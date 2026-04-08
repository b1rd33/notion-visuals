import { SlideFooter } from '../components/SlideFooter'

export function S02BoardDecisions({ active }: { active: boolean }) {
  return (
    <section className={`slide slide--white${active ? ' active' : ''}`} id="s2">
      <div className="slide-label">Agenda</div>
      <h2>What the Board Needs to Decide</h2>

      <div className="question-list">
        <div className="question-item">
          <div className="question-num">1</div>
          <div className="question-text">How much capital does ARTISO actually need to reach Series A from strength?</div>
        </div>
        <div className="question-item">
          <div className="question-num">2</div>
          <div className="question-text">What financing mix minimizes cost of capital while preserving founder control?</div>
        </div>
        <div className="question-item">
          <div className="question-num">3</div>
          <div className="question-text">Is €27M pre-money defensible — and what does the valuation triangulation show?</div>
        </div>
      </div>

      <div className="reco-box">
        <p><strong>Recommendation:</strong> Raise €3M now using a blended equity + non-dilutive stack at ~4.5% blended cost of capital — 60% cheaper than pure equity.</p>
      </div>

      <SlideFooter framework="" slideNum="2 / 12" />
    </section>
  )
}
