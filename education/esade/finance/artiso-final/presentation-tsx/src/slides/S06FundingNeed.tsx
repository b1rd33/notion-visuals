import { SlideFooter } from '../components/SlideFooter'

export function S06FundingNeed({ active }: { active: boolean }) {
  return (
    <section className={`slide slide--white${active ? ' active' : ''}`} id="s6">
      <div className="slide-label">Cash Runway</div>
      <h2>Funding Need &amp; Timing</h2>

      <div style={{ display: 'flex', gap: '24px', flex: 1, alignItems: 'stretch', marginTop: '8px' }}>
        {/* Cash Waterfall — inline SVG for pixel-perfect rendering */}
        <div style={{ flex: 2, display: 'flex', alignItems: 'stretch', minHeight: 0 }}>
          <svg viewBox="0 0 660 460" style={{ width: '100%', height: '100%', display: 'block' }} xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="gp" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#667eea" /><stop offset="100%" stopColor="#a5b4fc" /></linearGradient>
              <linearGradient id="gn" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#fca5a5" /><stop offset="100%" stopColor="#dc2626" /></linearGradient>
              <filter id="bar-shadow"><feDropShadow dx="0" dy="2" stdDeviation="3" floodColor="#667eea" floodOpacity="0.12" /></filter>
            </defs>
            {/* Zero line at y=340. Max positive = 290px. Scale: 1px = €24.5K */}
            <line x1="10" y1="340" x2="650" y2="340" stroke="#d1d5db" strokeWidth="1.5" strokeDasharray="6,4" />
            <text x="4" y="336" fontSize="9" fill="#9CA3AF" fontWeight="600" fontFamily="DM Sans,sans-serif">€0</text>

            {/* Q2'26: €3.0M → 122px */}
            <rect x="22" y="218" width="44" height="122" rx="3" fill="url(#gp)" filter="url(#bar-shadow)" />
            <text x="44" y="210" textAnchor="middle" fontSize="11" fill="#2c2c3a" fontWeight="600" fontFamily="DM Sans,sans-serif">€3.0M</text>
            <text x="44" y="358" textAnchor="middle" fontSize="10" fill="#6B7280" fontWeight="600" fontFamily="DM Sans,sans-serif">Q2'26</text>

            {/* Q4'26: €2.3M → 94px */}
            <rect x="88" y="246" width="44" height="94" rx="3" fill="url(#gp)" filter="url(#bar-shadow)" />
            <text x="110" y="238" textAnchor="middle" fontSize="11" fill="#2c2c3a" fontWeight="600" fontFamily="DM Sans,sans-serif">€2.3M</text>
            <text x="110" y="358" textAnchor="middle" fontSize="10" fill="#6B7280" fontWeight="600" fontFamily="DM Sans,sans-serif">Q4'26</text>

            {/* Q2'27: €1.5M → 61px */}
            <rect x="154" y="279" width="44" height="61" rx="3" fill="url(#gp)" filter="url(#bar-shadow)" />
            <text x="176" y="271" textAnchor="middle" fontSize="11" fill="#2c2c3a" fontWeight="600" fontFamily="DM Sans,sans-serif">€1.5M</text>
            <text x="176" y="358" textAnchor="middle" fontSize="10" fill="#6B7280" fontWeight="600" fontFamily="DM Sans,sans-serif">Q2'27</text>
            <text x="176" y="372" textAnchor="middle" fontSize="8" fill="#d97706" fontWeight="700" fontFamily="DM Sans,sans-serif">FUNDRAISE</text>

            {/* Q4'27: €607K → 25px */}
            <rect x="220" y="315" width="44" height="25" rx="3" fill="url(#gp)" filter="url(#bar-shadow)" />
            <text x="242" y="307" textAnchor="middle" fontSize="11" fill="#2c2c3a" fontWeight="600" fontFamily="DM Sans,sans-serif">€607K</text>
            <text x="242" y="358" textAnchor="middle" fontSize="10" fill="#6B7280" fontWeight="600" fontFamily="DM Sans,sans-serif">Q4'27</text>
            <text x="242" y="372" textAnchor="middle" fontSize="8" fill="#dc2626" fontWeight="700" fontFamily="DM Sans,sans-serif">RAISE NOW</text>

            {/* Q1'28: €227K → 9px */}
            <rect x="286" y="331" width="44" height="9" rx="2" fill="url(#gp)" filter="url(#bar-shadow)" />
            <text x="308" y="323" textAnchor="middle" fontSize="11" fill="#2c2c3a" fontWeight="600" fontFamily="DM Sans,sans-serif">€227K</text>
            <text x="308" y="358" textAnchor="middle" fontSize="10" fill="#6B7280" fontWeight="600" fontFamily="DM Sans,sans-serif">Q1'28</text>

            {/* Q2'28: -€139K → 6px BELOW zero */}
            <rect x="352" y="340" width="44" height="6" rx="2" fill="url(#gn)" />
            <text x="374" y="360" textAnchor="middle" fontSize="10" fill="#dc2626" fontWeight="600" fontFamily="DM Sans,sans-serif">-€139K</text>
            <text x="374" y="374" textAnchor="middle" fontSize="10" fill="#6B7280" fontWeight="600" fontFamily="DM Sans,sans-serif">Q2'28</text>

            {/* Q4'28: -€477K → 19px BELOW zero */}
            <rect x="418" y="340" width="44" height="19" rx="2" fill="url(#gn)" />
            <text x="440" y="374" textAnchor="middle" fontSize="10" fill="#dc2626" fontWeight="600" fontFamily="DM Sans,sans-serif">-€477K</text>
            <text x="440" y="388" textAnchor="middle" fontSize="10" fill="#6B7280" fontWeight="600" fontFamily="DM Sans,sans-serif">Q4'28</text>

            {/* Q2'29: €108K → 4px */}
            <rect x="484" y="336" width="44" height="4" rx="2" fill="url(#gp)" filter="url(#bar-shadow)" />
            <text x="506" y="328" textAnchor="middle" fontSize="11" fill="#2c2c3a" fontWeight="600" fontFamily="DM Sans,sans-serif">€108K</text>
            <text x="506" y="358" textAnchor="middle" fontSize="10" fill="#6B7280" fontWeight="600" fontFamily="DM Sans,sans-serif">Q2'29</text>

            {/* Q4'29: €1.6M → 65px */}
            <rect x="550" y="275" width="44" height="65" rx="3" fill="url(#gp)" filter="url(#bar-shadow)" />
            <text x="572" y="267" textAnchor="middle" fontSize="11" fill="#2c2c3a" fontWeight="600" fontFamily="DM Sans,sans-serif">€1.6M</text>
            <text x="572" y="358" textAnchor="middle" fontSize="10" fill="#6B7280" fontWeight="600" fontFamily="DM Sans,sans-serif">Q4'29</text>

            {/* Q4'30: €7.1M → 290px (full height) */}
            <rect x="616" y="50" width="44" height="290" rx="3" fill="url(#gp)" filter="url(#bar-shadow)" />
            <text x="638" y="42" textAnchor="middle" fontSize="11" fill="#2c2c3a" fontWeight="700" fontFamily="DM Sans,sans-serif">€7.1M</text>
            <text x="638" y="358" textAnchor="middle" fontSize="10" fill="#6B7280" fontWeight="600" fontFamily="DM Sans,sans-serif">Q4'30</text>
          </svg>
        </div>

        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '14px', justifyContent: 'flex-start', paddingTop: '8px' }}>
          <div style={{ background: 'var(--lavender-wash)', borderRadius: '10px', padding: '18px', border: '1px solid #e8e6f0' }}>
            <div style={{ fontSize: '12px', fontWeight: 600, textTransform: 'uppercase' as const, letterSpacing: '0.06em', color: 'var(--text-muted)' }}>Lowest Point</div>
            <div style={{ fontSize: '30px', fontWeight: 700, color: 'var(--negative)' }}>-€477K</div>
            <div style={{ fontSize: '13px', color: 'var(--text-muted)' }}>Q4 2028 — pre-Series A gap</div>
          </div>
          <div style={{ background: 'var(--lavender-wash)', borderRadius: '10px', padding: '18px', border: '1px solid #e8e6f0' }}>
            <div style={{ fontSize: '12px', fontWeight: 600, textTransform: 'uppercase' as const, letterSpacing: '0.06em', color: 'var(--text-muted)' }}>Series A Prep</div>
            <div style={{ fontSize: '30px', fontWeight: 700, color: 'var(--purple-deep)' }}>Q2 2027</div>
            <div style={{ fontSize: '13px', color: 'var(--text-muted)' }}>15 months after pre-seed close</div>
          </div>
          <div style={{ background: 'var(--lavender-wash)', borderRadius: '10px', padding: '18px', border: '1px solid #e8e6f0' }}>
            <div style={{ fontSize: '12px', fontWeight: 600, textTransform: 'uppercase' as const, letterSpacing: '0.06em', color: 'var(--text-muted)' }}>Venture Debt Window</div>
            <div style={{ fontSize: '30px', fontWeight: 700, color: 'var(--purple-deep)' }}>H2 2028</div>
            <div style={{ fontSize: '13px', color: 'var(--text-muted)' }}>Near EBITDA breakeven — 9-10% + 1% warrants</div>
          </div>
          <div style={{ background: 'linear-gradient(135deg,rgba(91,106,191,0.08),rgba(196,201,232,0.2))', borderRadius: '10px', padding: '14px 18px', border: '1px solid #e8e6f0', marginTop: 'auto' }}>
            <div style={{ fontSize: '14px', color: 'var(--text)', lineHeight: 1.5 }}><strong style={{ color: 'var(--purple-deep)' }}>€3M seed</strong> funds 27 months of runway (Q2'26→Q2'28) at avg. €111K/mo burn.</div>
          </div>
        </div>
      </div>

      <SlideFooter framework={'Session 03 — "Dying of Success": Cash consumed by growth before profitability'} slideNum="6 / 12" />
    </section>
  )
}
