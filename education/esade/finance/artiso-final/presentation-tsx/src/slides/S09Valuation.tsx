import { SlideFooter } from '../components/SlideFooter'

export function S09Valuation({ active }: { active: boolean }) {
  return (
    <section className={`slide slide--white${active ? ' active' : ''}`} id="s9" style={{ padding: 0 }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', flex: 1 }}>
        <div className="split-left" style={{ padding: '60px 40px 60px 80px', display: 'flex', flexDirection: 'column' }}>
          <div className="slide-label">Valuation</div>
          <h2>5-Step VC Method</h2>

          <div className="vc-flow" style={{ display: 'flex', flexDirection: 'column', gap: '6px', marginTop: '12px', flex: 1 }}>
            {/* Step 1 */}
            <div className="anim-fade-left anim-stagger-1" style={{ display: 'flex', alignItems: 'center', gap: '14px', background: 'var(--lavender-wash)', border: '1px solid #e8e6f0', borderRadius: '10px', padding: '12px 16px', borderLeft: '4px solid var(--purple-deep)' }}>
              <div style={{ minWidth: '34px', height: '34px', borderRadius: '50%', background: 'var(--purple-deep)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '15px', fontWeight: 700 }}>1</div>
              <div><div style={{ fontSize: '13px', fontWeight: 600 }}>EV at Exit</div><div style={{ fontSize: '12px', color: 'var(--text-muted)' }}>FY2030 ARR €35.7M × 10x = <strong style={{ color: 'var(--purple-deep)' }}>€357M</strong></div></div>
            </div>
            <div className="anim-fade-in anim-stagger-1" style={{ textAlign: 'center' as const, color: 'var(--lavender)', fontSize: '14px', lineHeight: 1 }}>↓</div>

            {/* Step 2 */}
            <div className="anim-fade-left anim-stagger-2" style={{ display: 'flex', alignItems: 'center', gap: '14px', background: 'var(--lavender-wash)', border: '1px solid #e8e6f0', borderRadius: '10px', padding: '12px 16px', borderLeft: '4px solid var(--purple-deep)' }}>
              <div style={{ minWidth: '34px', height: '34px', borderRadius: '50%', background: 'var(--purple-deep)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '15px', fontWeight: 700 }}>2</div>
              <div><div style={{ fontSize: '13px', fontWeight: 600 }}>Required Value at Exit</div><div style={{ fontSize: '12px', color: 'var(--text-muted)' }}>€3M × (1.6)⁴ = <strong style={{ color: 'var(--purple-deep)' }}>€19.7M</strong></div></div>
            </div>
            <div className="anim-fade-in anim-stagger-2" style={{ textAlign: 'center' as const, color: 'var(--lavender)', fontSize: '14px', lineHeight: 1 }}>↓</div>

            {/* Step 3 */}
            <div className="anim-fade-left anim-stagger-3" style={{ display: 'flex', alignItems: 'center', gap: '14px', background: 'var(--lavender-wash)', border: '1px solid #e8e6f0', borderRadius: '10px', padding: '12px 16px', borderLeft: '4px solid var(--purple-mid)' }}>
              <div style={{ minWidth: '34px', height: '34px', borderRadius: '50%', background: 'var(--purple-mid)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '15px', fontWeight: 700 }}>3</div>
              <div><div style={{ fontSize: '13px', fontWeight: 600 }}>Required Ownership</div><div style={{ fontSize: '12px', color: 'var(--text-muted)' }}>€19.7M / €357M = <strong style={{ color: 'var(--purple-deep)' }}>5.5%</strong></div></div>
            </div>
            <div className="anim-fade-in anim-stagger-3" style={{ textAlign: 'center' as const, color: 'var(--lavender)', fontSize: '14px', lineHeight: 1 }}>↓</div>

            {/* Step 4 */}
            <div className="anim-fade-left anim-stagger-4" style={{ display: 'flex', alignItems: 'center', gap: '14px', background: 'var(--lavender-wash)', border: '1px solid #e8e6f0', borderRadius: '10px', padding: '12px 16px', borderLeft: '4px solid var(--purple-soft)' }}>
              <div style={{ minWidth: '34px', height: '34px', borderRadius: '50%', background: 'var(--purple-soft)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '15px', fontWeight: 700 }}>4</div>
              <div><div style={{ fontSize: '13px', fontWeight: 600 }}>Shares Issued</div><div style={{ fontSize: '12px', color: 'var(--text-muted)' }}>~729K on 12.5M FD base</div></div>
            </div>
            <div className="anim-fade-in anim-stagger-4" style={{ textAlign: 'center' as const, color: 'var(--accent)', fontSize: '14px', lineHeight: 1 }}>↓</div>

            {/* Step 5 */}
            <div className="anim-fade-left anim-stagger-5 anim-pulse" style={{ display: 'flex', alignItems: 'center', gap: '14px', background: 'linear-gradient(135deg,rgba(102,126,234,0.15),rgba(165,180,252,0.22))', border: '2px solid var(--accent-light)', borderRadius: '12px', padding: '14px 18px', boxShadow: '0 6px 18px rgba(102,126,234,0.12)' }}>
              <div style={{ minWidth: '40px', height: '40px', borderRadius: '50%', background: 'var(--accent)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '17px', fontWeight: 700 }}>5</div>
              <div><div style={{ fontSize: '14px', fontWeight: 700, color: 'var(--purple-deep)' }}>Implied Pre-Money</div><div style={{ fontSize: '13px', color: 'var(--text-muted)' }}><strong style={{ color: 'var(--purple-deep)', fontSize: '18px' }}>€51.4M</strong> — €27M is conservative</div></div>
            </div>

            <div className="anim-fade-up" style={{ fontSize: '12px', color: 'var(--text-muted)', marginTop: 'auto', textAlign: 'center' as const, animationDelay: '0.7s' }}>Investors enter at <strong style={{ color: 'var(--purple-deep)' }}>47% discount</strong> to VC-implied valuation (execution risk at pre-seed)</div>
          </div>
        </div>

        <div className="split-right anim-fade-in" style={{ padding: '50px 80px 50px 40px', display: 'flex', flexDirection: 'column', background: 'linear-gradient(135deg, #e8e4f0 0%, #c7cce8 50%, #a5b0d8 100%)', animationDelay: '1.2s' }}>
          <div style={{ textAlign: 'center' as const, marginBottom: '16px' }}>
            <div style={{ fontSize: '12px', fontWeight: 600, textTransform: 'uppercase' as const, letterSpacing: '0.08em', color: 'var(--purple-deep)', marginBottom: '6px' }}>Seed Investor IRR</div>
            <div style={{ fontSize: '58px', fontWeight: 700, color: 'var(--purple-deep)', lineHeight: 1 }}>85.7%</div>
            <div style={{ fontSize: '13px', color: 'var(--text-muted)', marginTop: '4px' }}>Far exceeds 60% hurdle · 11.9x return</div>
          </div>

          <div style={{ fontSize: '12px', fontWeight: 600, textTransform: 'uppercase' as const, letterSpacing: '0.08em', color: 'var(--purple-deep)', marginBottom: '6px' }}>Valuation Triangulation</div>
          <table style={{ fontSize: '14px' }}>
            <thead><tr><th>Method</th><th className="right">Implied Pre-Money</th></tr></thead>
            <tbody>
              <tr><td>FY2026 Revenue × 40x</td><td className="right">€49.0M</td></tr>
              <tr><td>FY2026 ARR × 20x</td><td className="right">€41.3M</td></tr>
              <tr><td>FY2027 Forward Rev × 5x</td><td className="right">€21.4M</td></tr>
              <tr><td>VC Method (backward)</td><td className="right">€51.4M</td></tr>
              <tr className="highlight"><td className="bold">Comparable Transactions</td><td className="right bold">€27.0M</td></tr>
            </tbody>
          </table>

          <div style={{ background: 'rgba(255,255,255,0.5)', borderRadius: '8px', padding: '10px 14px', marginTop: '12px', textAlign: 'center' as const }}>
            <p style={{ fontSize: '13px', color: 'var(--text)', lineHeight: 1.5 }}>Range: €21.4M – €51.4M · <strong>€27M sits within the range</strong><br /><span style={{ color: 'var(--text-muted)' }}>Acceptable: €22-25M if it secures a strong lead</span></p>
          </div>

          <div style={{ marginTop: '12px' }}>
            <div style={{ fontSize: '11px', fontWeight: 600, textTransform: 'uppercase' as const, letterSpacing: '0.08em', color: 'var(--purple-deep)', marginBottom: '6px' }}>Comparable Pre-Seed Deals</div>
            <div style={{ display: 'flex', gap: '8px' }}>
              <div style={{ flex: 1, background: 'rgba(255,255,255,0.5)', borderRadius: '8px', padding: '8px', textAlign: 'center' as const }}>
                <div style={{ fontSize: '12px', fontWeight: 600, color: 'var(--text)' }}>Heuritech</div>
                <div style={{ fontSize: '11px', color: 'var(--text-muted)' }}>€5M at ~€25M pre</div>
              </div>
              <div style={{ flex: 1, background: 'rgba(255,255,255,0.5)', borderRadius: '8px', padding: '8px', textAlign: 'center' as const }}>
                <div style={{ fontSize: '12px', fontWeight: 600, color: 'var(--text)' }}>CALA</div>
                <div style={{ fontSize: '11px', color: 'var(--text-muted)' }}>$7M at ~$30M pre</div>
              </div>
              <div style={{ flex: 1, background: 'rgba(255,255,255,0.5)', borderRadius: '8px', padding: '8px', textAlign: 'center' as const }}>
                <div style={{ fontSize: '12px', fontWeight: 600, color: 'var(--text)' }}>Vue.ai</div>
                <div style={{ fontSize: '11px', color: 'var(--text-muted)' }}>$47M+ (later stage)</div>
              </div>
            </div>
          </div>

          <div style={{ marginTop: 'auto', background: 'rgba(255,255,255,0.4)', borderRadius: '8px', padding: '8px 14px', textAlign: 'center' as const }}>
            <div style={{ fontSize: '11px', color: 'var(--text-muted)' }}>At 10x ARR exit (€357M): each founder's 24.2% = <strong style={{ color: 'var(--purple-deep)' }}>€86M</strong></div>
          </div>
        </div>
      </div>

      <SlideFooter framework="" slideNum="9 / 12" />
    </section>
  )
}
