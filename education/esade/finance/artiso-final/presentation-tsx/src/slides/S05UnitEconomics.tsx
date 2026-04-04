import { SlideFooter } from '../components/SlideFooter'
import { useCountUp } from '../hooks/useCountUp'

const MiniGauge = ({ value, max, color }: { value: number; max: number; color: string }) => {
  const pct = Math.min(value / max, 1);
  const total = Math.PI * 18;
  return (
    <svg width="44" height="28" viewBox="0 0 44 28" style={{ position: 'absolute', top: 10, right: 10 }}>
      <path d="M 4 24 A 18 18 0 0 1 40 24" fill="none" stroke="#e8e6f0" strokeWidth="3.5" />
      <path d="M 4 24 A 18 18 0 0 1 40 24" fill="none" stroke={color} strokeWidth="3.5"
        strokeDasharray={`${total * pct} ${total}`} strokeLinecap="round" />
    </svg>
  );
};

export function S05UnitEconomics({ active }: { active: boolean }) {
  const cac = useCountUp(74, active)
  const ltv = useCountUp(5.3, active)
  const payback = useCountUp(11, active)
  const rule40 = useCountUp(64, active)

  return (
    <section className={`slide slide--white${active ? ' active' : ''}`} id="s5">
      <div className="slide-label">Unit Economics</div>
      <h2>Key Metrics — FY2030 Base Case</h2>

      <div className="metric-grid" style={{ marginTop: '16px' }}>
        <div className="metric-card metric-card-v3 anim-fade-up anim-stagger-1">
          <MiniGauge value={74} max={100} color="#667eea" />
          <div className="metric-value">{`€${Math.round(cac)}K`}</div>
          <div className="metric-label">Blended CAC</div>
          <div className="metric-target">↑ from €17K — rises with scale</div>
        </div>
        <div className="metric-card metric-card-v3 anim-fade-up anim-stagger-2">
          <MiniGauge value={5.3} max={10} color="#059669" />
          <div className="metric-value">{`${ltv.toFixed(1)}x`}</div>
          <div className="metric-label">LTV / CAC</div>
          <div className="metric-target">Target: 3-5x</div>
        </div>
        <div className="metric-card metric-card-v3 anim-fade-up anim-stagger-3">
          <MiniGauge value={11} max={24} color="#d97706" />
          <div className="metric-value">{`${Math.round(payback)} mo`}</div>
          <div className="metric-label">CAC Payback</div>
          <div className="metric-target">Target: &lt; 18 months</div>
        </div>
        <div className="metric-card metric-card-v3 anim-fade-up anim-stagger-4">
          <MiniGauge value={64} max={100} color="#8b5cf6" />
          <div className="metric-value">{`${Math.round(rule40)}%`}</div>
          <div className="metric-label">Rule of 40</div>
          <div className="metric-target">Rev Growth 41.5% + Margin 22.5%</div>
        </div>
        <div className="metric-card metric-card-v3 anim-fade-up anim-stagger-5">
          <MiniGauge value={0} max={1} color="#059669" />
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
