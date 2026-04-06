import React, { useEffect, useRef, useState } from 'react'

export default function PreviewModal({ project, onClose }){
  const iframeRef = useRef(null)
  const [status, setStatus] = useState('loading') // loading | ready | blocked
  const [index, setIndex] = useState(0) // for screenshots carousel
  const touchStartX = useRef(null)
  const hasLiveDemo = /^https?:\/\//.test(project?.demo || '')

  useEffect(()=>{
    if(!project) return
    setStatus(hasLiveDemo ? 'loading' : 'blocked')
    setIndex(0)
    const iframe = iframeRef.current
    let timer = null

    if(hasLiveDemo){
      // fallback timeout: if load doesn't fire, assume blocked
      timer = setTimeout(()=>{
        setStatus(prev => prev === 'ready' ? 'ready' : 'blocked')
      }, 2000)
    }

    // ESC handler
    function onKey(e){ if(e.key === 'Escape') onClose() }
    window.addEventListener('keydown', onKey)

    return ()=>{
      clearTimeout(timer)
      window.removeEventListener('keydown', onKey)
    }
  }, [project, onClose, hasLiveDemo])

  if(!project) return null

  const screenshots = project.screenshots && project.screenshots.length ? project.screenshots : [project.img]

  function prev(){ setIndex(i => (i-1+screenshots.length)%screenshots.length) }
  function next(){ setIndex(i => (i+1)%screenshots.length) }

  function onTouchStart(e){ touchStartX.current = e.touches[0].clientX }
  function onTouchEnd(e){
    if(touchStartX.current == null) return
    const dx = e.changedTouches[0].clientX - touchStartX.current
    if(Math.abs(dx) > 40){ dx > 0 ? prev() : next() }
    touchStartX.current = null
  }

  return (
    <div className="preview-modal">
      <div className="preview-backdrop" onClick={onClose} />
      <div className="preview-panel" role="dialog" aria-modal="true">
        <header className="preview-header">
          <h3>{project.title}</h3>
          <div>
            {hasLiveDemo && (
              <a className="btn" href={project.demo} target="_blank" rel="noopener noreferrer">Open live</a>
            )}
            <button className="btn" onClick={onClose}>Close</button>
          </div>
        </header>

        <div className="preview-body">
          {status === 'loading' && (
            <div className="preview-loading">
              <div className="spinner" aria-hidden="true" />
              <div>Trying to load live preview…</div>
            </div>
          )}

          {hasLiveDemo && (
            <iframe
              ref={iframeRef}
              title={project.title}
              src={project.demo}
              frameBorder="0"
              sandbox="allow-same-origin allow-scripts allow-forms allow-popups"
              style={{display: status === 'ready' ? 'block' : 'none', width: '100%', height: 560}}
              onLoad={() => setStatus('ready')}
            />
          )}

          {status === 'blocked' && (
            <div className="preview-fallback" onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
              <div className="screenshot-wrap">
                <img src={screenshots[index]} alt={`${project.title} screenshot ${index+1}`} />
                {screenshots.length > 1 && (
                  <div className="screenshot-controls">
                    <button className="btn" onClick={prev} aria-label="Previous screenshot">‹</button>
                    <span className="screenshot-counter">{index+1}/{screenshots.length}</span>
                    <button className="btn" onClick={next} aria-label="Next screenshot">›</button>
                  </div>
                )}
              </div>
              <div className="fallback-text">
                <p>{hasLiveDemo ? 'Embedding is blocked by the target site. Use the screenshot or open the live site.' : 'A live URL is not available yet. Use the screenshot preview for now.'}</p>
                {hasLiveDemo && (
                  <a className="btn primary" href={project.demo} target="_blank" rel="noopener noreferrer">Open live site</a>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
