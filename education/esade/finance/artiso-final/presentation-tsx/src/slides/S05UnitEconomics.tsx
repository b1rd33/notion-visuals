import { SlideFooter } from '../components/SlideFooter'

export function S05UnitEconomics({ active }: { active: boolean }) {
  return (
    <section className={`slide slide--white${active ? ' active' : ''}`} id="s5">
      <div className="slide-label">Unit Economics</div>
      <h2>Key Metrics — FY2030 Base Case</h2>

      <div className="metric-grid" style={{ marginTop: '16px' }}>
        <div className="metric-card metric-card-v3">
          <div className="metric-value">€74K</div>
          <div className="metric-label">Blended CAC</div>
          <div className="metric-target">↑ from €17K — rises with scale</div>
        </div>
        <div className="metric-card metric-card-v3">
          <div className="metric-value">5.3x</div>
          <div className="metric-label">LTV / CAC</div>
          <div className="metric-target">Target: 3-5x</div>
        </div>
        <div className="metric-card metric-card-v3">
          <div className="metric-value">11 mo</div>
          <div className="metric-label">CAC Payback</div>
          <div className="metric-target">Target: &lt; 18 months</div>
        </div>
        <div className="metric-card metric-card-v3">
          <div className="metric-value">64%</div>
          <div className="metric-label">Rule of 40</div>
          <div className="metric-target">Rev Growth 41.5% + Margin 22.5%</div>
        </div>
        <div className="metric-card metric-card-v3">
          <div className="metric-value" style={{ color: 'var(--positive)' }}>0.0x</div>
          <div className="metric-label">Burn Multiple</div>
          <div className="metric-target">Cash-flow positive by FY2030</div>
        </div>
      </div>

      <div className="reco-box" style={{ marginTop: '20px' }}>
        <p style={{ fontSize: '15px' }}><strong>Note:</strong> CAC increases from €17K to €74K as the company scales — exactly as taught in Session 03. This is realistic, not the $2,887 LTV/CAC from the Skilfill case.</p>
      </div>

      <SlideFooter framework="Session 02 — Skilfill Case: Realistic unit economics, validated assumptions, no fantasy metrics" slideNum="5 / 12" />
    </section>
  )
}
