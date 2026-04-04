import { useState, useEffect, useCallback, type FC } from 'react'

interface DeckProps {
  slides: FC<{ active: boolean }>[]
}

export function Deck({ slides }: DeckProps) {
  const [current, setCurrent] = useState(0)

  const navigate = useCallback(
    (direction: 'next' | 'prev' | 'home' | 'end') => {
      setCurrent((c) => {
        switch (direction) {
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
    <div className="deck" id="deck" onClick={handleClick}>
      {slides.map((SlideComponent, i) => (
        <SlideComponent key={i} active={i === current} />
      ))}
    </div>
  )
}
