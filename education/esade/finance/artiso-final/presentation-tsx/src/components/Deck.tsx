import { useState, useEffect, useCallback, type FC } from 'react'

interface DeckProps {
  slides: FC<{ active: boolean }>[]
}

export function Deck({ slides }: DeckProps) {
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState<'forward' | 'back'>('forward')
  const [showHint, setShowHint] = useState(true)

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
  }, [navigate])

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = e.clientX - rect.left
    if (x < e.currentTarget.offsetWidth * 0.33) {
      navigate('prev')
    } else {
      navigate('next')
    }
  }

  return (
    <div className="deck" id="deck" data-direction={direction} onClick={handleClick}>
      <div className="progress-bar" style={{ width: `${(current / (slides.length - 1)) * 100}%` }} />
      {slides.map((SlideComponent, i) => (
        <SlideComponent key={i} active={i === current} />
      ))}
      {showHint && <div className="nav-hint">&larr; &rarr; to navigate</div>}
    </div>
  )
}
