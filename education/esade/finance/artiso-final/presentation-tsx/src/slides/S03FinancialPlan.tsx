import { SlideFooter } from '../components/SlideFooter'


export function S03FinancialPlan({ active }: { active: boolean }) {
  return (
    <section className={`slide slide--white${active ? ' active' : ''}`} id="s3">
      <div className="slide-label">Financial Plan</div>
      <h2>5-Year P&amp;L Summary</h2>

      <table style={{ marginTop: '12px' }}>
        <thead>
          <tr>
            <th style={{ width: '22%' }}>Metric</th>
            <th className="right">FY2024</th>
            <th className="right">FY2025</th>
            <th className="right">FY2026</th>
            <th className="right">FY2027</th>
            <th className="right">FY2028</th>
            <th className="right">FY2029</th>
            <th className="right">FY2030</th>
          </tr>
        </thead>
        <tbody>
          <tr><td className="bold">Total Revenue</td><td className="right">€0</td><td className="right">€15K</td><td className="right">€1.2M</td><td className="right">€4.3M</td><td className="right">€14.1M</td><td className="right">€25.7M</td><td className="right">€36.5M</td></tr>
          <tr><td>COGS</td><td className="right">—</td><td className="right">(€2K)</td><td className="right">(€220K)</td><td className="right">(€763K)</td><td className="right">(€2.5M)</td><td className="right">(€4.6M)</td><td className="right">(€6.5M)</td></tr>
          <tr><td>Gross Margin</td><td className="right">—</td><td className="right">86.7%</td><td className="right">82.1%</td><td className="right">82.1%</td><td className="right">82.2%</td><td className="right">82.2%</td><td className="right">82.3%</td></tr>
          <tr><td>Total OpEx</td><td className="right">(€120K)</td><td className="right">(€280K)</td><td className="right">(€1.8M)</td><td className="right">(€4.5M)</td><td className="right">(€12.0M)</td><td className="right">(€18.1M)</td><td className="right">(€21.8M)</td></tr>
          <tr className="highlight anim-pulse"><td className="bold">EBITDA</td><td className="right">(€120K)</td><td className="right">(€267K)</td><td className="right">(€755K)</td><td className="right">(€973K)</td><td className="right">(€357K)</td><td className="right">+€3.0M</td><td className="right">+€8.2M</td></tr>
          <tr><td>EBITDA Margin</td><td className="right">—</td><td className="right">—</td><td className="right">-61.5%</td><td className="right">-22.8%</td><td className="right">-2.5%</td><td className="right">+11.8%</td><td className="right">+22.5%</td></tr>
          <tr><td>Installed Base</td><td className="right">0</td><td className="right">3</td><td className="right">35</td><td className="right">81</td><td className="right">181</td><td className="right">279</td><td className="right">360</td></tr>
          <tr><td className="bold">ARR (End of Year)</td><td className="right">€0</td><td className="right">€0</td><td className="right">€2.1M</td><td className="right">€6.4M</td><td className="right">€16.1M</td><td className="right">€26.2M</td><td className="right">€35.7M</td></tr>
        </tbody>
      </table>

      <div style={{ display: 'flex', gap: '40px', marginTop: 'auto', paddingTop: '16px' }}>
        <div style={{ background: 'var(--lavender-wash)', borderRadius: '8px', padding: '14px 20px', flex: 1, border: '1px solid #e8e6f0' }}>
          <div style={{ fontSize: '13px', fontWeight: 600, color: 'var(--text-muted)', textTransform: 'uppercase' as const, letterSpacing: '0.06em' }}>EBITDA Breakeven</div>
          <div style={{ fontSize: '26px', fontWeight: 700, color: 'var(--purple-deep)' }}>Q4 2028</div>
        </div>
        <div style={{ background: 'var(--lavender-wash)', borderRadius: '8px', padding: '14px 20px', flex: 1, border: '1px solid #e8e6f0' }}>
          <div style={{ fontSize: '13px', fontWeight: 600, color: 'var(--text-muted)', textTransform: 'uppercase' as const, letterSpacing: '0.06em' }}>Revenue CAGR (FY26-30)</div>
          <div style={{ fontSize: '26px', fontWeight: 700, color: 'var(--purple-deep)' }}>131%</div>
        </div>
        <div style={{ background: 'var(--lavender-wash)', borderRadius: '8px', padding: '14px 20px', flex: 1, border: '1px solid #e8e6f0' }}>
          <div style={{ fontSize: '13px', fontWeight: 600, color: 'var(--text-muted)', textTransform: 'uppercase' as const, letterSpacing: '0.06em' }}>Tax Loss Carry-Forward</div>
          <div style={{ fontSize: '26px', fontWeight: 700, color: 'var(--purple-deep)' }}>€2.2M shielded</div>
        </div>
      </div>

      <SlideFooter framework="" slideNum="3 / 12" />
    </section>
  )
}
