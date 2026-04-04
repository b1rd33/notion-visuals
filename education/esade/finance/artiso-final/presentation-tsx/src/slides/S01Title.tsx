import { SlideFooter } from '../components/SlideFooter'

export function S01Title({ active }: { active: boolean }) {
  return (
    <section className={`slide slide--gradient${active ? ' active' : ''}`} id="s1">
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
        <svg viewBox="0 8.87 219.78 53.3" style={{ height: '36px', width: 'auto' }}>
          <path d="M39.35,52.67c2.12,5.87,3.58,8.44,6.64,8.73v.43h-18.69v-.43c4.09-.29,5.48-3.01,4.09-6.8l-3.8-10.52H11.32l-1.46,3.94c-3.07,8.44-2.56,12.81,2.41,13.38v.43H0v-.43c3.5-.43,5.33-5.22,8.47-13.81L22.71,8.87h.58l16.06,43.8ZM11.9,42.36h15.11l-7.52-20.9-7.59,20.9Z" fill="#1a1a1a" />
          <path d="M86.74,61.4v.43c-1.17.14-4.82.29-7.01.29-5.26,0-6.57-2.29-15.62-21.75-1.24-2.58-2.48-3.15-4.82-3.15h-2.99v15.31c0,5.3.29,8.87,5.26,8.87v.43h-18.69v-.43c4.96,0,5.26-3.58,5.26-8.87V19.03c0-5.3-.29-8.87-5.26-8.87v-.43h19.71c11.68,0,18.11,5.3,18.11,13.6,0,7.01-5.33,11.45-11.9,13.17v.14c2.12,1.22,3.94,4.08,5.69,7.37,7.3,13.74,8.76,16.25,12.27,17.39ZM56.29,36.06h4.96c7.23,0,10.95-4.37,10.95-12.17s-3.43-13.02-10.88-13.02h-2.26c-1.75,0-2.77.86-2.77,2.58v22.61Z" fill="#1a1a1a" />
          <path d="M120.77,21.04h-.44c-4.02-8.37-6.57-10.16-13.58-10.16h-2.26v41.65c0,5.3.29,8.87,5.26,8.87v.43h-18.69v-.43c4.96,0,5.26-3.58,5.26-8.87V10.87h-2.26c-6.94,0-9.56,1.79-13.58,10.16h-.44l1.02-11.31h38.7l1.02,11.31Z" fill="#1a1a1a" />
          <path d="M119.45,61.83v-.43c4.96,0,5.26-3.58,5.26-8.87V19.03c0-5.3-.29-8.87-5.26-8.87v-.43h18.69v.43c-4.96,0-5.26,3.58-5.26,8.87v33.49c0,5.3.29,8.87,5.26,8.87v.43h-18.69Z" fill="#1a1a1a" />
          <path d="M138.44,59.75l-.44-11.81h.44c3.21,9.02,8.25,13.74,15.04,13.74,5.77,0,10.88-3.79,10.88-10.3s-5.26-9.23-11.39-12.17l-3.72-1.79c-4.89-2.36-10.15-5.72-10.15-13.74,0-8.52,6.28-14.81,15.26-14.81,4.02,0,9.64,1.29,13.14,2.86v9.3h-.44c-3.29-7.73-7.59-11.16-13.14-11.16-5.91,0-9.71,3.86-9.71,9.66s4.67,8.23,9.13,10.38l3.72,1.79c6.35,3.08,12.41,6.44,12.41,15.24s-6.86,15.74-17.08,15.74c-4.24,0-10.51-1.22-13.95-2.93Z" fill="#1a1a1a" />
          <path d="M169.69,35.92c0-16.03,9.64-27.05,24.09-27.05s23.95,10.45,23.95,26.76-9.64,27.05-24.09,27.05-23.95-10.45-23.95-26.76ZM208.68,35.78c0-14.46-5.11-25.91-15.04-25.91s-14.9,11.02-14.9,25.91,5.11,25.91,15.04,25.91,14.89-11.02,14.89-25.91Z" fill="#1a1a1a" />
        </svg>
        <span style={{ fontSize: '14px', fontWeight: 500, color: 'var(--text-muted)', letterSpacing: '0.04em' }}>04/2026 — CONFIDENTIAL</span>
      </div>

      <div className="spacer"></div>

      <h1 style={{ fontSize: '52px', maxWidth: '700px' }}>Build the agentic OS<br />for fashion.</h1>
      <p style={{ fontSize: '20px', color: 'var(--text)', maxWidth: '600px', marginBottom: '28px' }}>A design ontology that orchestrates the full creative lifecycle — from concept to production — learning each brand's visual DNA.</p>

      <div className="traction-row">
        <div className="traction-pill"><strong>7</strong> paying logos</div>
        <div className="traction-pill"><strong>&gt;€60K</strong> pilot revenue</div>
        <div className="traction-pill"><strong>200+</strong> brands waitlist</div>
        <div className="traction-pill"><strong>€3M</strong> pre-seed round</div>
      </div>

      <p className="text-small text-muted" style={{ marginTop: '4px' }}>Named customers: Deichmann · TATA Group · NF&amp;TA · Nude Project · Natura</p>

      <SlideFooter framework="ESADE CFO Advisory — Roxane · Christian · Martí · Leonor · Tamás" slideNum="1 / 12" />
    </section>
  )
}
