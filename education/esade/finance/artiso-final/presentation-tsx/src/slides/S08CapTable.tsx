import { SlideFooter } from '../components/SlideFooter'

export function S08CapTable({ active }: { active: boolean }) {
  return (
    <section className={`slide slide--white${active ? ' active' : ''}`} id="s8">
      <div className="slide-label">Cap Table</div>
      <h2>Ownership &amp; Dilution Path</h2>

      <table style={{ marginTop: '16px' }}>
        <thead>
          <tr>
            <th style={{ width: '28%' }}>Shareholder</th>
            <th className="right">Pre-Seed</th>
            <th className="right">Post-Seed</th>
            <th className="right">Post-Series A</th>
          </tr>
        </thead>
        <tbody>
          <tr><td className="bold">Sarah Iglesias (CEO)</td><td className="right">33.3%</td><td className="right">26.7%</td><td className="right">24.2%</td></tr>
          <tr><td className="bold">Matthias Brenninkmeijer (CTO)</td><td className="right">33.3%</td><td className="right">26.7%</td><td className="right">24.2%</td></tr>
          <tr><td className="bold">Lucas Pastur (CPO)</td><td className="right">33.3%</td><td className="right">26.7%</td><td className="right">24.2%</td></tr>
          <tr><td>ESOP (allocated + reserved)</td><td className="right">0%</td><td className="right">10.0%</td><td className="right">9.1%</td></tr>
          <tr className="highlight"><td className="bold">Seed Investors</td><td className="right">0%</td><td className="right">10.0%</td><td className="right">9.1%</td></tr>
          <tr><td>Series A Investors</td><td className="right">0%</td><td className="right">0%</td><td className="right">9.4%</td></tr>
          <tr style={{ borderTop: '2px solid #e5e7eb' }}><td className="bold">Total</td><td className="right bold">100%</td><td className="right bold">100%</td><td className="right bold">100%</td></tr>
        </tbody>
      </table>

      <div style={{ display: 'flex', gap: '24px', marginTop: 'auto' }}>
        <div style={{ background: 'linear-gradient(135deg,var(--lavender-wash),rgba(196,201,232,0.25))', borderRadius: '12px', padding: '20px 24px', flex: 1, border: '1px solid #e8e6f0', boxShadow: '0 4px 16px rgba(91,106,191,0.06)' }}>
          <div style={{ fontSize: '13px', fontWeight: 600, textTransform: 'uppercase' as const, letterSpacing: '0.06em', color: 'var(--text-muted)' }}>Price Per Share</div>
          <div style={{ fontSize: '24px', fontWeight: 700, color: 'var(--purple-deep)', marginTop: '4px' }}>€2.40 → €7.72 <span style={{ fontSize: '15px', color: 'var(--positive)', fontWeight: 500 }}>(3.2x step-up)</span></div>
        </div>
        <div style={{ background: 'linear-gradient(135deg,var(--lavender-wash),rgba(196,201,232,0.25))', borderRadius: '12px', padding: '20px 24px', flex: 1, border: '1px solid #e8e6f0', boxShadow: '0 4px 16px rgba(91,106,191,0.06)' }}>
          <div style={{ fontSize: '13px', fontWeight: 600, textTransform: 'uppercase' as const, letterSpacing: '0.06em', color: 'var(--text-muted)' }}>ESOP Method</div>
          <div style={{ fontSize: '18px', fontWeight: 500, color: 'var(--text)', marginTop: '4px' }}>Pre-money carve-out (VC standard) — pro-rata method is fairer to founders</div>
        </div>
      </div>

      <SlideFooter framework="" slideNum="8 / 12" />
    </section>
  )
}
