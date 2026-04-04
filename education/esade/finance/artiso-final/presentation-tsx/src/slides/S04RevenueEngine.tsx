import { SlideFooter } from '../components/SlideFooter'

export function S04RevenueEngine({ active }: { active: boolean }) {
  return (
    <section className={`slide slide--white${active ? ' active' : ''}`} id="s4" style={{ padding: 0 }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', flex: 1 }}>
        <div className="split-left" style={{ padding: '60px 40px 60px 80px', display: 'flex', flexDirection: 'column' }}>
          <div className="slide-label">Revenue Engine</div>
          <h2>Bottom-Up Revenue Model</h2>
          <p className="text-muted" style={{ fontSize: '16px', marginBottom: '20px' }}>Not a top-down TAM capture model — built from sales capacity constraints.</p>

          <div className="flow-steps">
            <div className="flow-step"><div className="flow-box">Founder FTEs (0.85) + Hired AEs (→7)</div></div>
            <div className="flow-step"><div className="flow-arrow">↓</div><div className="flow-box">Deal Capacity: 2 deals/AE/month × (1 - cross-sell %)</div></div>
            <div className="flow-step"><div className="flow-arrow">↓</div><div className="flow-box">Funnel Split: SME 56% · Large 31% · Enterprise 13%</div></div>
            <div className="flow-step"><div className="flow-arrow">↓</div><div className="flow-box">Module Penetration: M1→M2→M3→M4→M5 cross-sell</div></div>
            <div className="flow-step"><div className="flow-arrow">↓</div><div className="flow-box">Revenue = Setup + Subscription + Credits + PS</div></div>
          </div>

          <div style={{ marginTop: 'auto', paddingTop: '16px' }}>
            <div style={{ fontSize: '12px', fontWeight: 600, textTransform: 'uppercase' as const, letterSpacing: '0.08em', color: 'var(--purple-mid)', marginBottom: '12px' }}>ARR Milestones</div>
            <div style={{ display: 'grid', gridTemplateColumns: 'auto 1fr auto 1fr auto 1fr auto', alignItems: 'center', gap: 0 }}>
              <div style={{ textAlign: 'center' as const }}>
                <div style={{ width: '44px', height: '44px', borderRadius: '50%', background: 'var(--lavender-wash)', border: '2px solid var(--lavender)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '11px', fontWeight: 700, color: 'var(--purple-deep)', margin: '0 auto' }}>€100K</div>
                <div style={{ fontSize: '10px', color: 'var(--text-muted)', marginTop: '4px' }}>Q3'26</div>
              </div>
              <div style={{ height: '2px', background: 'linear-gradient(90deg,var(--lavender),var(--purple-mid))' }}></div>
              <div style={{ textAlign: 'center' as const }}>
                <div style={{ width: '44px', height: '44px', borderRadius: '50%', background: 'var(--lavender-wash)', border: '2px solid var(--purple-mid)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px', fontWeight: 700, color: 'var(--purple-deep)', margin: '0 auto' }}>€1M</div>
                <div style={{ fontSize: '10px', color: 'var(--text-muted)', marginTop: '4px' }}>Q3'27</div>
                <div style={{ fontSize: '9px', color: 'var(--purple-mid)', fontWeight: 600 }}>Series A gate</div>
              </div>
              <div style={{ height: '2px', background: 'linear-gradient(90deg,var(--purple-mid),var(--purple-deep))' }}></div>
              <div style={{ textAlign: 'center' as const }}>
                <div style={{ width: '44px', height: '44px', borderRadius: '50%', background: 'var(--lavender-wash)', border: '2px solid var(--purple-deep)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '11px', fontWeight: 700, color: 'var(--purple-deep)', margin: '0 auto' }}>€10M</div>
                <div style={{ fontSize: '10px', color: 'var(--text-muted)', marginTop: '4px' }}>Q1'29</div>
              </div>
              <div style={{ height: '2px', background: 'linear-gradient(90deg,var(--purple-deep),var(--purple-deep))' }}></div>
              <div style={{ textAlign: 'center' as const }}>
                <div style={{ width: '44px', height: '44px', borderRadius: '50%', background: 'var(--purple-deep)', border: '2px solid var(--purple-deep)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '10px', fontWeight: 700, color: 'white', margin: '0 auto' }}>€35.8M</div>
                <div style={{ fontSize: '10px', color: 'var(--text-muted)', marginTop: '4px' }}>Q4'30</div>
              </div>
            </div>
            <div style={{ fontSize: '11px', color: 'var(--text-muted)', marginTop: '8px' }}>Key assumptions: 2 deals/AE/month (Salesloft) · Sales cycle: SME 1mo, Large 3mo, Enterprise 6mo</div>
          </div>
        </div>

        <div className="split-right" style={{ padding: '60px 80px 60px 40px', display: 'flex', flexDirection: 'column', background: 'linear-gradient(135deg, #e8e4f0 0%, #c7cce8 50%, #a5b0d8 100%)' }}>
          <div className="slide-label" style={{ textAlign: 'center' as const, marginTop: '72px' }}>Annual Contract Value by Tier</div>
          <div className="tier-grid" style={{ marginTop: '20px' }}>
            <div className="tier-card">
              <div className="tier-name">SME</div>
              <div className="tier-acv">€17K</div>
              <div className="tier-label">1-10 users</div>
            </div>
            <div className="tier-card">
              <div className="tier-name">Large</div>
              <div className="tier-acv">€67K</div>
              <div className="tier-label">11-50 users</div>
            </div>
            <div className="tier-card">
              <div className="tier-name">Enterprise</div>
              <div className="tier-acv">€155K</div>
              <div className="tier-label">51+ users</div>
            </div>
          </div>
          <p style={{ textAlign: 'center' as const, fontSize: '14px', color: 'var(--text-muted)', marginTop: '18px' }}>Credit-based pricing with usage expansion upside.<br />5 modules × 3 tiers × 4 revenue streams.</p>

          <div style={{ marginTop: 'auto', paddingTop: '16px' }}>
            <div style={{ fontSize: '12px', fontWeight: 600, textTransform: 'uppercase' as const, letterSpacing: '0.08em', color: 'var(--purple-deep)', marginBottom: '10px' }}>How ACV Expands After Landing</div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
              <div style={{ background: 'rgba(255,255,255,0.6)', border: '1px solid rgba(255,255,255,0.8)', borderRadius: '8px', padding: '10px' }}>
                <div style={{ fontSize: '13px', fontWeight: 600, color: 'var(--purple-deep)' }}>Setup Fee</div>
                <div style={{ fontSize: '11px', color: 'var(--text-muted)', marginTop: '2px' }}>One-off onboarding at contract</div>
              </div>
              <div style={{ background: 'rgba(255,255,255,0.6)', border: '1px solid rgba(255,255,255,0.8)', borderRadius: '8px', padding: '10px' }}>
                <div style={{ fontSize: '13px', fontWeight: 600, color: 'var(--purple-deep)' }}>Subscription</div>
                <div style={{ fontSize: '11px', color: 'var(--text-muted)', marginTop: '2px' }}>Recurring platform fee (baseline)</div>
              </div>
              <div style={{ background: 'rgba(255,255,255,0.6)', border: '1px solid rgba(255,255,255,0.8)', borderRadius: '8px', padding: '10px' }}>
                <div style={{ fontSize: '13px', fontWeight: 600, color: 'var(--purple-deep)' }}>Usage Credits</div>
                <div style={{ fontSize: '11px', color: 'var(--text-muted)', marginTop: '2px' }}>Grows 1.5-4.5%/qtr per customer</div>
              </div>
              <div style={{ background: 'rgba(255,255,255,0.6)', border: '1px solid rgba(255,255,255,0.8)', borderRadius: '8px', padding: '10px' }}>
                <div style={{ fontSize: '13px', fontWeight: 600, color: 'var(--purple-deep)' }}>Prof. Services</div>
                <div style={{ fontSize: '11px', color: 'var(--text-muted)', marginTop: '2px' }}>Integrations + customization</div>
              </div>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px', marginTop: '8px' }}>
              <div style={{ background: 'rgba(255,255,255,0.5)', borderRadius: '8px', padding: '8px 10px' }}>
                <div style={{ fontSize: '10px', fontWeight: 600, textTransform: 'uppercase' as const, letterSpacing: '0.06em', color: 'var(--text-muted)' }}>Land Motion</div>
                <div style={{ fontSize: '13px', fontWeight: 600, color: 'var(--purple-deep)' }}>1 module + core sub</div>
              </div>
              <div style={{ background: 'rgba(255,255,255,0.5)', borderRadius: '8px', padding: '8px 10px' }}>
                <div style={{ fontSize: '10px', fontWeight: 600, textTransform: 'uppercase' as const, letterSpacing: '0.06em', color: 'var(--text-muted)' }}>Expand Motion</div>
                <div style={{ fontSize: '13px', fontWeight: 600, color: 'var(--purple-deep)' }}>+modules +credits over time</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <SlideFooter framework={'Session 03 — Adria Roca: "Biggest mistake = top-down. Correct = bottom-up"'} slideNum="4 / 12" />
    </section>
  )
}
