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
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [navigate, exporting])

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
    const pdf = new jsPDF({ orientation: 'landscape', unit: 'px', format: [1280, 720] })

    for (let i = 0; i < slides.length; i++) {
      // Activate the slide
      setCurrent(i)
      // Wait for React to render + animations to settle
      await new Promise(r => setTimeout(r, 300))

      const canvas = await html2canvas(deck, {
        width: 1280,
        height: 720,
        scale: 2,
        useCORS: true,
        backgroundColor: '#ffffff',
      })

      const imgData = canvas.toDataURL('image/png')
      if (i > 0) pdf.addPage([1280, 720], 'landscape')
      pdf.addImage(imgData, 'PNG', 0, 0, 1280, 720)
    }

    pdf.save('ARTISO-CFO-Presentation.pdf')
    setExporting(false)
  }

  const goToSlide = (i: number) => {
    setDirection(i > current ? 'forward' : 'back')
    setCurrent(i)
  }

  return (
    <>
      {/* Top navigation bar */}
      <div className="deck-nav">
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
          <button className="deck-nav-pdf" onClick={(e) => { e.stopPropagation(); exportPDF() }} disabled={exporting}>
            {exporting ? `Exporting ${current + 1}/${slides.length}...` : '⬇ Export PDF'}
          </button>
        </div>
      </div>

      <div className="deck" id="deck" data-direction={direction} onClick={handleClick}>
        <div className="progress-bar" style={{ width: `${(current / (slides.length - 1)) * 100}%` }} />
        {slides.map((SlideComponent, i) => (
          <SlideComponent key={i} active={i === current} />
        ))}
        {showHint && <div className="nav-hint">&larr; &rarr; to navigate</div>}

        {/* Export overlay */}
        {exporting && (
          <div style={{
            position: 'absolute', inset: 0, zIndex: 200,
            background: 'rgba(255,255,255,0.85)', display: 'flex',
            alignItems: 'center', justifyContent: 'center',
            flexDirection: 'column', gap: '12px',
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
    </>
  )
}
