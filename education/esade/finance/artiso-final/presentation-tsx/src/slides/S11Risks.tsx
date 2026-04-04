import { SlideFooter } from '../components/SlideFooter'

export function S11Risks({ active }: { active: boolean }) {
  return (
    <section className={`slide slide--white${active ? ' active' : ''}`} id="s11">
      <div className="slide-label">Risk Analysis</div>
      <h2>Key Risks &amp; Mitigation</h2>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '18px', flex: 1, alignContent: 'center', marginTop: '16px' }}>
        <div className="risk-card sev-critical">
          <div className="risk-card-head"><h3>Customer Concentration <span className="sev-pill critical">Critical</span></h3><span className="risk-card-idx">01</span></div>
          <div className="risk-card-body">7 logos, top 3 = 60%+ of Y1 ARR.</div>
          <div className="risk-card-foot"><strong>Mitigate:</strong> Diversify across tiers, cluster GTM via MODACC.</div>
        </div>
        <div className="risk-card sev-critical">
          <div className="risk-card-head"><h3>Technology Moat Erosion <span className="sev-pill critical">Critical</span></h3><span className="risk-card-idx">02</span></div>
          <div className="risk-card-body">Adobe/OpenAI entering vertical AI.</div>
          <div className="risk-card-foot"><strong>Mitigate:</strong> Deepen proprietary fashion ontology + PLM integrations.</div>
        </div>
        <div className="risk-card sev-high">
          <div className="risk-card-head"><h3>Extended Sales Cycles <span className="sev-pill high">High</span></h3><span className="risk-card-idx">03</span></div>
          <div className="risk-card-body">Enterprise brands: 6-9 months.</div>
          <div className="risk-card-foot"><strong>Mitigate:</strong> Parallel SME pipeline (1mo cycle), founder-led first 15 logos.</div>
        </div>
        <div className="risk-card sev-high">
          <div className="risk-card-head"><h3>Cash Runway Timing <span className="sev-pill high">High</span></h3><span className="risk-card-idx">04</span></div>
          <div className="risk-card-body">Series A must close by Q1 2028.</div>
          <div className="risk-card-foot"><strong>Mitigate:</strong> Begin process Q2 2027, €500K internal trigger.</div>
        </div>
        <div className="risk-card sev-medium">
          <div className="risk-card-head"><h3>Model Sensitivity <span className="sev-pill medium">Medium</span></h3><span className="risk-card-idx">05</span></div>
          <div className="risk-card-body">Enterprise NRR + lead growth dominate.</div>
          <div className="risk-card-foot"><strong>Mitigate:</strong> Monthly recalibration vs actuals.</div>
        </div>
        <div className="risk-card sev-action">
          <div className="risk-card-head"><h3>Contingency Plan <span className="sev-pill action">Ready</span></h3><span className="risk-card-idx">06</span></div>
          <div className="risk-card-body">Defer 3 hires + cut S&amp;M 30% → burn €120K→€80K/mo → +5mo runway.</div>
          <div className="risk-card-foot"><strong>Venture debt:</strong> €1-2M facility at H2 2028 (9-10% + 1% warrants).</div>
        </div>
      </div>

      <SlideFooter framework={'Session 01 — Jose Antonio Gonzalez (Business Angel): "Know your worst case scenario"'} slideNum="11 / 12" />
    </section>
  )
}
