import { SlideFooter } from '../components/SlideFooter'

export function S07BlendedFinancing({ active }: { active: boolean }) {
  return (
    <section className={`slide slide--gradient-deep${active ? ' active' : ''}`} id="s7">
      <div className="slide-label">Financing Strategy</div>
      <h2 style={{ color: 'var(--white)' }}>Why Blended Financing Beats Pure Equity</h2>

      <table style={{ marginTop: '20px', color: 'var(--white)', fontSize: '18px' }}>
        <thead>
          <tr>
            <th style={{ color: 'rgba(255,255,255,0.6)', borderColor: 'rgba(255,255,255,0.2)', width: '30%', fontSize: '13px' }}>Source</th>
            <th className="right" style={{ color: 'rgba(255,255,255,0.6)', borderColor: 'rgba(255,255,255,0.2)', fontSize: '13px' }}>Amount</th>
            <th className="right" style={{ color: 'rgba(255,255,255,0.6)', borderColor: 'rgba(255,255,255,0.2)', fontSize: '13px' }}>Dilution</th>
            <th style={{ color: 'rgba(255,255,255,0.6)', borderColor: 'rgba(255,255,255,0.2)', fontSize: '13px' }}>Key Terms</th>
          </tr>
        </thead>
        <tbody>
          <tr style={{ borderColor: 'rgba(255,255,255,0.1)' }}><td className="bold" style={{ color: 'var(--white)' }}>Lead VC</td><td className="right" style={{ color: 'var(--white)' }}>€1.5-2.0M</td><td className="right" style={{ color: 'var(--white)' }}>5-7%</td><td style={{ color: 'rgba(255,255,255,0.7)' }}>Nauta / Inveready / Samaipata</td></tr>
          <tr style={{ borderColor: 'rgba(255,255,255,0.1)', background: 'rgba(255,255,255,0.05)' }}><td className="bold" style={{ color: 'var(--white)' }}>Angels / SAFEs</td><td className="right" style={{ color: 'var(--white)' }}>€300-500K</td><td className="right" style={{ color: 'var(--white)' }}>1-2%</td><td style={{ color: 'rgba(255,255,255,0.7)' }}>ESADE BAN, fashion execs</td></tr>
          <tr style={{ borderColor: 'rgba(255,255,255,0.1)' }}><td className="bold" style={{ color: 'var(--white)' }}>ENISA</td><td className="right" style={{ color: 'var(--white)' }}>€300K</td><td className="right" style={{ color: 'var(--white)' }}>0%</td><td style={{ color: 'rgba(255,255,255,0.7)' }}>Participative loan, no collateral</td></tr>
          <tr style={{ borderColor: 'rgba(255,255,255,0.1)', background: 'rgba(255,255,255,0.05)' }}><td className="bold" style={{ color: 'var(--white)' }}>CDTI / NEOTEC</td><td className="right" style={{ color: 'var(--white)' }}>€250-400K</td><td className="right" style={{ color: 'var(--white)' }}>0%</td><td style={{ color: 'rgba(255,255,255,0.7)' }}>R&amp;D grant, 70% co-funding</td></tr>
          <tr><td className="bold" style={{ color: 'var(--white)' }}>ICF / ACCIO</td><td className="right" style={{ color: 'var(--white)' }}>€200-300K</td><td className="right" style={{ color: 'var(--white)' }}>0%</td><td style={{ color: 'rgba(255,255,255,0.7)' }}>Catalan innovation grants</td></tr>
          <tr style={{ borderTop: '2px solid rgba(255,255,255,0.4)', background: 'rgba(255,255,255,0.12)' }}><td className="bold" style={{ color: 'var(--white)', fontSize: '20px' }}>Total</td><td className="right bold" style={{ color: 'var(--white)', fontSize: '20px' }}>~€3.0M</td><td className="right bold" style={{ color: 'var(--white)', fontSize: '20px' }}>8-12%</td><td style={{ color: 'rgba(255,255,255,0.7)', fontSize: '16px' }}>Blended CoC ~4.5%</td></tr>
        </tbody>
      </table>

      <div className="compare-box" style={{ paddingBottom: 0 }}>
        <div className="compare-item">
          <div className="compare-value" style={{ color: 'var(--white)' }}>~4.5%</div>
          <div className="compare-label" style={{ color: 'rgba(255,255,255,0.6)' }}>Blended Cost of Capital</div>
        </div>
        <div className="compare-vs" style={{ color: 'rgba(255,255,255,0.4)' }}>vs</div>
        <div className="compare-item">
          <div className="compare-value" style={{ color: 'rgba(255,255,255,0.4)', textDecoration: 'line-through' }}>~11%</div>
          <div className="compare-label" style={{ color: 'rgba(255,255,255,0.4)' }}>Pure Equity Alternative</div>
        </div>
      </div>

      <SlideFooter framework={'Session 01 — Ramiro (Keon): "Use public grants. Delay equity. Combine sources."'} slideNum="7 / 12" />
    </section>
  )
}
