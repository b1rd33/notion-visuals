import { SlideFooter } from '../components/SlideFooter'

export function S10Scenarios({ active }: { active: boolean }) {
  return (
    <section className={`slide slide--white${active ? ' active' : ''}`} id="s10">
      <div className="slide-label">Scenario Analysis</div>
      <h2>Base · Upside · Downside</h2>

      <table style={{ marginTop: '16px' }}>
        <thead>
          <tr><th style={{ width: '28%' }}>Metric</th><th className="right">Base</th><th className="right">Upside</th><th className="right">Downside</th></tr>
        </thead>
        <tbody>
          <tr><td className="bold">FY2030 Revenue</td><td className="right">€36.5M</td><td className="right">€148.5M</td><td className="right">€3.8M</td></tr>
          <tr><td>Cash Floor</td><td className="right" style={{ color: 'var(--negative)' }}>-€379K</td><td className="right" style={{ color: 'var(--negative)' }}>-€82K</td><td className="right" style={{ color: 'var(--negative)' }}>-€6.9M</td></tr>
          <tr><td>Series A Timing</td><td className="right">Q4 2027</td><td className="right">Earlier / larger</td><td className="right">Urgent — bridge needed</td></tr>
          <tr><td className="bold">Management Action</td><td className="right">Execute plan</td><td className="right">Accelerate GTM</td><td className="right">Cut burn + bridge</td></tr>
          <tr><td className="bold">FY2028 Revenue</td><td className="right">€14.1M</td><td className="right">€56.0M</td><td className="right">€1.4M</td></tr>
          <tr><td>EBITDA Breakeven</td><td className="right">Q4 2028</td><td className="right">Q2 2028</td><td className="right">Never within horizon</td></tr>
        </tbody>
      </table>

      <div className="gap-lg"></div>

      <div style={{ display: 'flex', gap: '24px' }}>
        <div style={{ flex: 1 }}>
          <h3>Top Sensitivity Levers</h3>
          <p style={{ fontSize: '15px', color: 'var(--text-muted)', marginTop: '8px' }}>±20% swing on FY2030 ARR and cash:</p>
          <div style={{ marginTop: '10px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{ width: '240px', height: '28px', background: 'linear-gradient(90deg,var(--accent-light),var(--accent))', borderRadius: '4px' }}></div>
              <span style={{ fontSize: '14px', fontWeight: 600 }}>Enterprise NRR</span>
              <span style={{ fontSize: '13px', color: 'var(--text-muted)' }}>Dominant lever</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{ width: '200px', height: '28px', background: 'linear-gradient(90deg,var(--lavender),var(--purple-soft))', borderRadius: '4px' }}></div>
              <span style={{ fontSize: '14px', fontWeight: 600 }}>Lead Growth Rate</span>
              <span style={{ fontSize: '13px', color: 'var(--text-muted)' }}>Second lever</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{ width: '60px', height: '24px', background: 'linear-gradient(90deg,#e8e6f0,var(--lavender))', borderRadius: '4px' }}></div>
              <span style={{ fontSize: '14px' }}>Credit Pricing · SME Churn</span>
              <span style={{ fontSize: '13px', color: 'var(--text-muted)' }}>Minor</span>
            </div>
          </div>
        </div>
        <div style={{ flex: 1 }}>
          <div className="reco-box">
            <p style={{ fontSize: '15px' }}><strong>Key insight:</strong> The model is volume-driven, not price-driven. Enterprise NRR and lead growth rate are the two variables that determine whether ARTISO reaches €35M ARR or stalls at €10M. All other inputs are secondary.</p>
          </div>
        </div>
      </div>

      <SlideFooter framework="" slideNum="10 / 12" />
    </section>
  )
}
