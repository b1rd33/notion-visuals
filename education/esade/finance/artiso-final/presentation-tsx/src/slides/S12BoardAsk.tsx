import { SlideFooter } from '../components/SlideFooter'

export function S12BoardAsk({ active }: { active: boolean }) {
  return (
    <section className={`slide slide--gradient-deep${active ? ' active' : ''}`} id="s12">
      <div className="slide-label">Board Resolution</div>
      <h2 style={{ color: 'var(--white)' }}>What We Ask the Board to Approve</h2>

      <div className="resolution-grid" style={{ marginTop: '20px' }}>
        <div className="resolution-card anim-fade-up anim-stagger-2">
          <div className="res-num">1</div>
          <h3>Approve the Raise</h3>
          <p>€3M pre-seed at €27M pre-money with blended equity + non-dilutive structure</p>
        </div>
        <div className="resolution-card anim-fade-up anim-stagger-4">
          <div className="res-num">2</div>
          <h3>Approve the Strategy</h3>
          <p>Parallel VC process + ENISA/CDTI/ACCIO applications starting immediately</p>
        </div>
        <div className="resolution-card anim-fade-up anim-stagger-6">
          <div className="res-num">3</div>
          <h3>Approve Series A Prep</h3>
          <p>Begin investor relationship building Q2 2027 — 15 months before needed</p>
        </div>
      </div>

      <div style={{ marginTop: 'auto', textAlign: 'center' as const, paddingBottom: '8px' }}>
        <p className="anim-fade-in" style={{ fontSize: '20px', color: 'rgba(255,255,255,0.85)', fontStyle: 'italic', maxWidth: '700px', margin: '0 auto', lineHeight: 1.5, animationDelay: '1.5s' }}>"The discipline is not just raising this round. It is ensuring the company reaches the next round with evidence, optionality, and negotiating leverage."</p>
        <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.45)', marginTop: '10px' }}>— CFO Advisory Team: Roxane, Christian, Martí, Leonor, Tamás</p>
      </div>

      <SlideFooter framework="ARTISO — CFO Advisory Team — April 9, 2026" slideNum="12 / 12" />
    </section>
  )
}
