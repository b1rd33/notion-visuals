import { useState, useEffect, useCallback, type FC } from 'react'
import html2canvas from 'html2canvas-pro'
import { jsPDF } from 'jspdf'

interface DeckProps {
  slides: FC<{ active: boolean }>[]
}

export function Deck({ slides }: DeckProps) {
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState<'forward' | 'back'>('forward')
  const [showHint, setShowHint] = useState(true)
  const [exporting, setExporting] = useState(false)
  const [exportScale, setExportScale] = useState(3)
  const [presenting, setPresenting] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setShowHint(false), 4000)
    return () => clearTimeout(timer)
  }, [])

  const navigate = useCallback(
    (nav: 'next' | 'prev' | 'home' | 'end') => {
      setDirection(nav === 'prev' || nav === 'home' ? 'back' : 'forward')
      setCurrent((c) => {
        switch (nav) {
          case 'next':
            return Math.min(c + 1, slides.length - 1)
          case 'prev':
            return Math.max(c - 1, 0)
          case 'home':
            return 0
          case 'end':
            return slides.length - 1
        }
      })
    },
    [slides.length],
  )

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (exporting) return
      if (e.key === 'ArrowRight' || e.key === ' ') {
        e.preventDefault()
        navigate('next')
      }
      if (e.key === 'ArrowLeft') {
        navigate('prev')
      }
      if (e.key === 'Home') {
        navigate('home')
      }
      if (e.key === 'End') {
        navigate('end')
      }
      if (e.key === 'f' || e.key === 'F' || e.key === 'F11') {
        e.preventDefault()
        togglePresenting()
      }
      if (e.key === 'Escape' && presenting) {
        setPresenting(false)
        if (document.fullscreenElement) document.exitFullscreen()
      }
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [navigate, exporting, presenting])

  const togglePresenting = useCallback(() => {
    setPresenting(p => {
      const next = !p
      if (next) {
        document.documentElement.requestFullscreen?.()
      } else {
        if (document.fullscreenElement) document.exitFullscreen?.()
      }
      return next
    })
  }, [])

  useEffect(() => {
    const onFullscreenChange = () => {
      if (!document.fullscreenElement) setPresenting(false)
    }
    document.addEventListener('fullscreenchange', onFullscreenChange)
    return () => document.removeEventListener('fullscreenchange', onFullscreenChange)
  }, [])

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (exporting) return
    const rect = e.currentTarget.getBoundingClientRect()
    const x = e.clientX - rect.left
    if (x < e.currentTarget.offsetWidth * 0.33) {
      navigate('prev')
    } else {
      navigate('next')
    }
  }

  const exportPDF = async () => {
    setExporting(true)
    const deck = document.getElementById('deck')
    if (!deck) return

    // Landscape 16:9 PDF
    const slideW = 1440
    const slideH = 810
    const pdf = new jsPDF({ orientation: 'landscape', unit: 'px', format: [slideW, slideH] })

    // Disable animations during export
    deck.style.setProperty('--anim-duration', '0s')
    document.body.classList.add('exporting')

    for (let i = 0; i < slides.length; i++) {
      setCurrent(i)
      // Wait for render + fonts + SVG transitions to complete
      await new Promise(r => setTimeout(r, 1500))

      const canvas = await html2canvas(deck, {
        width: slideW,
        height: slideH,
        scale: exportScale,
        useCORS: true,
        backgroundColor: null,
      })

      const quality = exportScale >= 3 ? 0.95 : 0.92
      const imgData = canvas.toDataURL('image/jpeg', quality)
      if (i > 0) pdf.addPage([slideW, slideH], 'landscape')
      pdf.addImage(imgData, 'JPEG', 0, 0, slideW, slideH)
    }

    // Restore animations
    deck.style.removeProperty('--anim-duration')
    document.body.classList.remove('exporting')

    pdf.save('ARTISO-CFO-Presentation.pdf')
    setExporting(false)
  }

  const goToSlide = (i: number) => {
    setDirection(i > current ? 'forward' : 'back')
    setCurrent(i)
  }

  return (
    <div className={presenting ? 'presentation-mode' : ''}>
      {/* Top navigation bar */}
      <div className="deck-nav" style={presenting ? { display: 'none' } : undefined}>
        <div className="deck-nav-inner">
          <span className="deck-nav-title">ARTISO — CFO Board Presentation</span>
          <div className="deck-nav-dots">
            {slides.map((_, i) => (
              <button
                key={i}
                className={`deck-nav-dot${i === current ? ' active' : ''}`}
                onClick={(e) => { e.stopPropagation(); goToSlide(i) }}
                title={`Slide ${i + 1}`}
              />
            ))}
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <select
              className="deck-nav-select"
              value={exportScale}
              onChange={(e) => setExportScale(Number(e.target.value))}
              onClick={(e) => e.stopPropagation()}
              disabled={exporting}
            >
              <option value={1}>1x Draft</option>
              <option value={2}>2x Good</option>
              <option value={3}>3x High</option>
              <option value={4}>4x Ultra</option>
            </select>
            <button className="deck-nav-pdf" onClick={(e) => { e.stopPropagation(); exportPDF() }} disabled={exporting}>
              {exporting ? `${current + 1}/${slides.length}...` : '⬇ PDF'}
            </button>
            <button className="deck-nav-pdf" onClick={(e) => { e.stopPropagation(); togglePresenting() }} style={{ background: 'var(--purple-deep)', color: 'white' }}>
              ▶ Present
            </button>
          </div>
        </div>
      </div>

      <div className="deck" id="deck" data-direction={direction} onClick={handleClick}>
        <div className="progress-bar" style={{ width: `${(current / (slides.length - 1)) * 100}%` }} />
        {slides.map((SlideComponent, i) => (
          <SlideComponent key={i} active={i === current} />
        ))}
        {showHint && !exporting && <div className="nav-hint">&larr; &rarr; to navigate</div>}
      </div>

      {/* Presentation mode slide counter */}
      {presenting && !exporting && (
        <div style={{
          position: 'fixed', bottom: '16px', right: '24px', zIndex: 100,
          fontSize: '14px', color: 'rgba(255,255,255,0.5)',
          fontFamily: 'var(--font-body)', fontWeight: 500,
          textShadow: '0 1px 4px rgba(0,0,0,0.3)',
          pointerEvents: 'none',
        }}>
          {current + 1} / {slides.length}
        </div>
      )}

      {/* Export overlay — OUTSIDE the deck so it's not captured */}
      {exporting && (
        <div style={{
          position: 'fixed', inset: 0, zIndex: 9999,
          background: 'rgba(240,238,245,0.92)', display: 'flex',
          alignItems: 'center', justifyContent: 'center',
          flexDirection: 'column', gap: '12px',
          pointerEvents: 'none',
        }}>
          <div style={{ fontSize: '18px', fontWeight: 600, color: '#3d3575' }}>
            Exporting slide {current + 1} of {slides.length}...
          </div>
          <div style={{
            width: '200px', height: '4px', background: '#e8e6f0', borderRadius: '2px', overflow: 'hidden'
          }}>
            <div style={{
              width: `${((current + 1) / slides.length) * 100}%`,
              height: '100%', background: 'linear-gradient(90deg, #667eea, #a5b4fc)',
              transition: 'width 0.3s ease',
            }} />
          </div>
        </div>
      )}
    </div>
  )
}
