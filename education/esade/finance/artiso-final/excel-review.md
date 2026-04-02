# ARTISO Financial Model — Combined Review

## Source Files
- Excel: `Artiso_Financial_Model_Marti_Built.xlsx` (v3.0, built by Martí)
- Reference: `Artiso_SaaS_Financial_Model_v11.xlsx` (ARTISO's own model)
- Assignment: `Start-up Group final assignment MIE 2026.pdf`

## Model Structure (7 sheets)
| Sheet | Rows×Cols | Purpose |
|-------|-----------|---------|
| 0_README | 105×6 | Documentation |
| 1_Assumptions | 150×8 | All inputs, 3 scenarios (Base/Upside/Downside) |
| 2_Projections | 110×33 | Full P&L + annual summary |
| 3_CashFlow | 30×29 | CF statement + runway alerts |
| 4_BalanceSheet | 25×29 | BS with check row |
| 5_Headcount | 63×29 | 23 roles, hiring flags |
| 6_UnitEconomics | 25×51 | CAC, LTV, NRR, Payback, Magic Number, Burn Multiple |

---

## Completeness vs Assignment Requirements

| Requirement | Status | Notes |
|-------------|--------|-------|
| P&L 5yr (Y1 monthly, Y2-3 quarterly) | DONE | Actually quarterly all Y2-5 (exceeds req) |
| Annual P&L summary with historical | DONE | FY2024-2025 estimates included |
| Balance Sheet | DONE | Balances (check row = 0 all periods) |
| Cash Flow Statement | DONE | Includes runway + fundraising alerts |
| Three-statement linkage | DONE | P&L→CF→BS verified |
| Cap Table & Dilution | MISSING | |
| Scenario Comparison | MISSING | Inputs exist, output sheet doesn't |
| Sensitivity Analysis | MISSING | |
| Valuation | MISSING | |

**Completeness: ~75%**

---

## CRITICAL BUGS (model-breaking)

### 1. 68 #REF! errors in cross-sell penetration
- **Cells:** `2_Projections!I31:AC31`, `L32:AC32`, `O33:AC33`, `P34:AC34`
- **Impact:** Post-launch cross-sell engine for modules M2-M5 is completely broken. Penetration stays flat at 15%/10%/5%/8% after launch instead of growing.
- **Root cause:** Formulas reference cells that were deleted or moved.

### 2. SaaS COGS corrupted — fixed exponent + wrong period scaling
- **Cells:** `2_Projections!E71:AC71`
- **Impact:** Every period uses a fixed credit-growth exponent of 28, and monthly periods are multiplied by 3 months instead of 1. Apr 2026 COGS shows €7,386 but correct value is ~€1,606. Drags gross margin from ~84% down to 56%.
- **Root cause:** Formula hardcodes quarterly multiplier even in monthly columns.

### 3. Revenue recognized on fractional logos
- **Cells:** `2_Projections!E37`
- **Impact:** M1 setup-fee revenue is recognized off raw fractional logos (E12:E14) even though actual new logos (E18:E21) are all zero. Revenue booked before any whole customer closes.

### 4. June credit revenue wrong period index
- **Cells:** `2_Projections!G53:G55`
- **Impact:** Uses `(2-1)` instead of `(3-1)` for growth exponent. Understates June credit revenue and ARR.

---

## SERIOUS ISSUES (misleading outputs)

### 5. NRR formula includes new-logo revenue
- **Cells:** `6_UnitEconomics!F14:AC14`
- **Impact:** Labeled as NRR but is just total recurring revenue this period / last period. Includes new logos, so it's not net revenue retention.

### 6. LTV/CAC absurd (64x+) due to suppressed churn
- **Cells:** `6_UnitEconomics!F19:M20`
- **Impact:** Logo bases are rounded to whole numbers every period, suppressing churn on small cohorts. Churn is floored at 1%. Produces LTV >€1M and LTV/CAC >64x.

### 7. CAC masked by IFERROR
- **Cells:** `6_UnitEconomics!E8:AC8`
- **Impact:** When new logos = 0, CAC shows €0 instead of undefined/infinite. Apr 2026 is clearest example.

### 8. Burn Multiple is hardcoded values, not formulas
- **Cells:** `6_UnitEconomics!F25:AC25`
- **Impact:** Won't recalculate if anything upstream changes.

### 9. Magic Number mixes monthly and quarterly periods
- **Cells:** `6_UnitEconomics!F24:AC24`
- **Impact:** Values are not comparable across the sheet (monthly vs quarterly).

### 10. Annual billing discount misapplied
- **Cells:** `2_Projections!E45:AC49` with `1_Assumptions!C134:F135`
- **Impact:** Discount applied to entire installed base every period, but assumption is "% new customers on annual billing." No cohort or renewal logic.

---

## MODERATE ISSUES (known, fixable)

### 11. EBITDA Margin % formula wrong
- **Cells:** `2_Projections!D108:J108`
- **Formula:** `=IFERROR(D103/D95,0)` → divides D&A (row 103) by Subscription Revenue (row 95)
- **Should be:** `=IFERROR(D102/D94,0)` → EBITDA (row 102) / Total Revenue (row 94)
- **Result:** Shows 0% for all years.

### 12. AI Researcher salary typo
- **Cells:** `5_Headcount!C16, D16`
- **Value:** €10,000 salary / €13,000 employer cost
- **Should be:** €100,000 / €130,000 (same as rows 17-18)
- **Impact:** Understates P&E opex by €9,750/month from Jul 2026 onward.

### 13. Deferred revenue hardcoded to zero
- **Cells:** `3_CashFlow!E13:AC13`, `4_BalanceSheet!E16:AC16`
- **Impact:** 40% annual billing assumed but no deferred revenue modeled. Prepaid cash and liability omitted.

### 14. AR ignores annual prepay
- **Cells:** `3_CashFlow!E11:AC11`
- **Impact:** AR calculated from total revenue despite annual prepay. Working capital and runway mis-stated.

---

## CONCEPTUAL / ASSUMPTION ISSUES

### 15. "No sales effort" claim contradicted by model
- `1_Assumptions!C79:C81` and `2_Projections!E8:AC11` assume 0.85 founder sales FTE pre-AE, scaling to 7 AEs. Acquisition is entirely sales-capacity driven.

### 16. Cross-sell assumptions aggressive
- `1_Assumptions!C95:C103`: 5-8% cross-sell per period for existing customers, 5-15% extra-module attach on first sale. No usage gating or CS effort modeled.

### 17. Lead funnel is not a funnel
- `2_Projections!E12:AC14` and `1_Assumptions!C86:E88`: Just splits sales capacity by segment mix. `C86:C88` sum to 100%. No lead volume, conversion, or PLG motion. Demand is effectively infinite.

### 18. PS revenue cap not enforced
- `2_Projections!E59:AC62`: PS described as "capped <10% of total" but no cap in formulas; row 63 only monitors ratio.

### 19. Stray formulas beyond visible range
- `6_UnitEconomics!AD18:AY18`: Formulas spilling beyond E:AC. Reference blank columns — accidental spillover.

---

## KEY NUMBER DIVERGENCES (v3.0 vs v11 reference)

| Metric | v11 | v3.0 (Martí) | Delta |
|--------|-----|--------------|-------|
| ARR FY2026 | €447K | €1,302K | +191% |
| ARR FY2030 | €29.3M | €37.0M | +26% |
| EBITDA breakeven | Q2 2028 | Q4 2028 | 2Q later |
| Lowest cash | €1.55M (Q4 2027) | **-€458K** (Q4 2028) | Goes negative |
| Y1 Gross margin | 83% | 50-56% | Much lower (COGS bug) |
| Y2-5 Gross margin | 82-87% | 79-82% | Broadly aligned |
| Credit rev share FY2030 | ~40% | 84% | Usage-based dominance |

---

## MISSING SHEETS TO ADD

### 1. Cap Table & Dilution
- Pre-seed: 3 founders × 33.3% + 10% ESOP = 100%
- Post-seed: €3M at €27M pre-money → investors get 10%, founders dilute to 27% each, ESOP to 9%
- Series A projection: €10M at 10-15x ARR (Q1 2028)

### 2. Scenario Comparison
- Side-by-side Base/Upside/Downside for: ARR, Revenue, EBITDA, Cash Balance, Installed Base
- Already have 3-scenario inputs in 1_Assumptions row 156

### 3. Sensitivity Analysis
- Tornado chart showing ±20% impact on FY2030 ARR and Cash
- Top levers: Enterprise NRR, Lead Growth Rate, Credit Pricing, Churn Rate

### 4. Valuation
- DCF or comparable multiples approach
- €27M pre-money / €30M post-money justification
- 60x FY2026E ARR vs European AI/SaaS pre-seed comps

---

## PRIORITY FIX ORDER

1. **Fix 68 #REF! errors** in cross-sell (rows 31-34) — unlocks the revenue engine
2. **Fix SaaS COGS** (row 71) — corrects gross margins
3. **Fix EBITDA Margin %** (row 108) — quick formula swap
4. **Fix AI Researcher salary** (Headcount row 16) — dropped zero
5. **Fix June credit revenue index** (G53:G55)
6. **Fix NRR formula** to exclude new logos
7. **Rebuild LTV/CAC** with proper churn handling
8. **Convert Burn Multiple** from hardcoded to formulas
9. **Add Cap Table sheet**
10. **Add Scenario Comparison sheet**
11. **Add Sensitivity Analysis sheet**
12. **Add Valuation sheet**

---

## Martí's Voice Memo (Apr 1, 2026)

> "This is all based on their own finances, on their own financial projections, which they built with Claude and a lot of the equations didn't work. A lot of the logic didn't make any sense. Even now they say that they don't need anybody just cross-sell — they say customers will just use it, which is also a weird assumption. If you guys can check the logic to make sure it makes sense and check that the equations make sense. And if you have time, try to do the unit economics in the back."

---

## GPT-5.4 Review Output

> PASTE ChatGPT output below this line:
A) Excel model review

I went through the workbook sheet by sheet. The big picture is this:

The workbook is structurally close, but it is not presentation-ready yet.
The three-statement link is mostly there, and the balance sheet balances, but there are still material formula errors, broken references, placeholder logic, and metric definitions that would not survive professor scrutiny. Most importantly, the current workbook no longer matches the numbers stated in your March 26 deliverable, which said base-case cash never goes negative and FY2030 revenue was about €24.2M.  ￼

1) High-confidence issues to fix immediately

Priority	Sheet / cells	Issue	Why it matters	Exact fix
Critical	2_Projections!D108:J108	EBITDA Margin % formula is wrong	It currently divides D&A by Subscription Revenue instead of EBITDA by Total Revenue	Replace with =IFERROR(D102/D94,0) in D108 and copy across to J108
Critical	5_Headcount!C16	AI Researcher salary typo: €10K instead of €100K	Understates personnel cost and burn	Change C16 from 10000 to 100000
Critical	2_Projections!I31:AC34	68 formulas contain #REF! in module penetration / cross-sell logic	This contaminates module adoption, revenue, COGS, ARR, cash flow, and unit economics downstream	Rebuild rows 31–34 with clean formulas; do not leave any #REF! in final workbook
Critical	6_UnitEconomics!F14:AC14	NRR formula is wrong conceptually	It measures total recurring revenue growth, not NRR of an opening cohort	Rebuild NRR using cohort logic or remove NRR from main output until fixed
High	6_UnitEconomics!F25:AC25	Burn Multiple row is hardcoded values, not formulas	Hardcoded KPI row is a red flag in a finance model	Replace with formulas tied to net burn and net new ARR
High	3_CashFlow!13 and 4_BalanceSheet!16	Deferred revenue is a placeholder = 0	40% annual billing means cash and liabilities are understated early on	Add deferred revenue schedule and link it into cash flow and balance sheet
High	3_CashFlow!22:23	No Series A modeled	This is why cash goes negative in 2028–2029	Add a financing line for Series A and/or a bridge trigger
Medium	2_Projections!53:55	Credit revenue ramps extremely aggressively	Drives FY2030 revenue far above your memo / deliverable numbers	Review credit usage growth, caps, and module multiplier assumptions
Medium	2_Projections!79:81	OpEx formula mixes floor / % revenue / personnel, but assumptions may over-scale weirdly	Can create unrealistic operating leverage or double-count style effects	Keep structure, but stress-test and simplify if needed
Medium	6_UnitEconomics!18:21	LTV logic is too optimistic	Churn calculation is crude and LTV inflates to unrealistic levels	Rebuild with weighted churn by segment or cap output used in memo


⸻

2) The most serious model break: the cross-sell / module penetration block

The worst mechanical problem is in 2_Projections, rows 31:34.

Those rows drive:
	•	module penetration,
	•	subscription revenue,
	•	setup fee revenue,
	•	credit uplift via additional modules,
	•	and therefore ARR, cash, and valuation.

Because I31:AC34 contain #REF!, your current output is not reliable.

Recommended replacement logic for rows 31–34

Do not try to reconstruct the old logic exactly. Replace it with a simpler, defensible version:

For M2 penetration
	•	H31 stays as initial landing adoption:
='1_Assumptions'!$F$100
	•	I31:

=MIN(1,H31+IFERROR(MIN(I$9*'1_Assumptions'!$F$83*'1_Assumptions'!$F$82*I$5,H27*(1-H31)*'1_Assumptions'!$F$95*I$5)/MAX(I27,1),0))

Copy I31 across to AC31.

For M3 penetration
	•	K32 stays:

='1_Assumptions'!$F$101

	•	L32:

=MIN(1,K32+IFERROR(MIN(L$9*'1_Assumptions'!$F$83*'1_Assumptions'!$F$82*L$5,K27*(1-K32)*'1_Assumptions'!$F$96*L$5)/MAX(L27,1),0))

Copy L32 across to AC32.

For M4 penetration
	•	N33 stays:

='1_Assumptions'!$F$102

	•	O33:

=MIN(1,N33+IFERROR(MIN(O$9*'1_Assumptions'!$F$83*'1_Assumptions'!$F$82*O$5,N27*(1-N33)*'1_Assumptions'!$F$97*O$5)/MAX(O27,1),0))

Copy O33 across to AC33.

For M5 penetration
	•	O34 stays:

='1_Assumptions'!$F$103

	•	P34:

=MIN(1,O34+IFERROR(MIN(P$9*'1_Assumptions'!$F$83*'1_Assumptions'!$F$82*P$5,O27*(1-O34)*'1_Assumptions'!$F$98*P$5)/MAX(P27,1),0))

Copy P34 across to AC34.

This is much cleaner:
	•	same-period AE capacity,
	•	explicit cross-sell bandwidth,
	•	explicit period length,
	•	explicit adoption ceiling.

⸻

3) Other logic issues I would flag in front of professors

The model output no longer matches your own prior deliverable
Your March 26 deliverable states base-case FY2030:
	•	ARR: €29.3M
	•	Revenue: €24.2M
	•	EBITDA: €16.4M
	•	Installed base: 212
	•	Cash never goes negative; lowest cash €1.55M at Q1 2028.  ￼

But the current workbook is showing, roughly:
	•	FY2030 revenue around €37.7M
	•	FY2030 EBITDA around €8.7M
	•	Installed base around 396
	•	cash turns negative from Q2 2028 to Q2 2029

That mismatch alone will get noticed.

NRR is not actually NRR
6_UnitEconomics!F14:AC14 is just:

current recurring revenue / prior recurring revenue

That includes new customers, so it is gross recurring growth, not NRR.

LTV/CAC is overstated
Even your own second deliverable already says 32.6x by FY2030 is not realistic.  ￼
The workbook still has the same structural problem: churn is too low / too mechanically derived, so LTV explodes.

Burn Multiple is hardcoded
That is one of those details a finance professor loves to catch.

Deferred revenue is missing
With 40% annual billing, zero deferred revenue is not a minor omission. It distorts:
	•	cash timing,
	•	liabilities,
	•	working capital,
	•	cash runway.

Sales model over-assumes organic cross-sell
You already know this. Right now the workbook still behaves as if module expansion can happen with limited explicit selling friction.

⸻

4) Specific additions I recommend

Add sheet: 7_CapTable

Purpose: show dilution clearly from founding to pre-seed to Series A.

Suggested layout:

Cell block	Content
B2:F9	Pre-seed cap table
B11:F18	Post pre-seed cap table
B20:F28	Series A assumptions and post-Series A cap table
H2:J10	Dilution summary by stakeholder

Suggested rows:
	•	Founders (3 lines)
	•	ESOP allocated
	•	ESOP unallocated
	•	Pre-seed investors
	•	Series A investors

Suggested inputs:
	•	C3:C5 founder shares
	•	C12 pre-seed pre-money = 27000000
	•	C13 pre-seed raise = 3000000
	•	C22 Series A ARR basis
	•	C23 Series A ARR multiple
	•	C24 Series A pre-money = C22*C23
	•	C25 Series A raise = 10000000

Key formulas:
	•	pre-seed investor ownership = raise / post-money
	•	new shares issued = existing diluted shares * raise / pre-money
	•	Series A ownership = Series A raise / (Series A pre-money + Series A raise)

Add sheet: 8_Scenarios

Purpose: one-page board view.

Columns:
	•	B: Metric
	•	C: Base
	•	D: Upside
	•	E: Downside
	•	F: Commentary

Rows:
	•	FY2027 ARR
	•	FY2028 ARR
	•	FY2030 ARR
	•	FY2028 EBITDA
	•	FY2030 EBITDA
	•	Lowest cash
	•	Date cash < €500K
	•	Required external financing
	•	Timing of Series A
	•	Founding dilution to Series A

Add sheet: 9_Sensitivity

Purpose: tornado chart and ranking of key drivers.

Inputs:
	•	Enterprise NRR
	•	lead growth rate
	•	logo churn
	•	credit usage growth
	•	sales cycle
	•	gross margin
	•	S&M efficiency

Set:
	•	base,
	•	low case,
	•	high case,
	•	impact on FY2030 ARR,
	•	impact on min cash.

Add sheet: 10_Valuation

Purpose: investor-ready valuation backup.

Sections:
	1.	B2:E10 Pre-seed revenue multiple method
	2.	B12:E20 Series A forward ARR method
	3.	B22:F35 DCF sanity check
	4.	H2:J10 valuation range bridge

I would lead with comparables / ARR multiple, and keep DCF only as a low-weight cross-check.

⸻

5) What I would change in the current model before you submit it

This is the minimum viable repair list:
	1.	Fix 5_Headcount!C16
	2.	Fix 2_Projections!D108:J108
	3.	Rebuild 2_Projections!I31:AC34
	4.	Replace 6_UnitEconomics!F25:AC25 with formulas
	5.	Remove NRR from the main board deck unless you rebuild it correctly
	6.	Add Series A or bridge financing line to 3_CashFlow
	7.	Add deferred revenue logic to cash flow and balance sheet
	8.	Add cap table, scenarios, sensitivity, valuation sheets
	9.	Reconcile workbook outputs to the memo / deck numbers you plan to present
	10.	Add a final 11_Checks sheet with:

	•	no #REF!
	•	BS check = 0
	•	cash never below threshold without financing plan
	•	all scenario outputs populated

⸻

6) My honest board-level diagnosis

If you present this workbook as-is, the professors can attack it on:
	•	broken model integrity,
	•	invalid NRR,
	•	missing deferred revenue,
	•	absent financing round despite negative cash,
	•	too-optimistic cross-sell,
	•	unrealistic operating leverage.

If you fix the items above, the model becomes defendable enough for class.

⸻

B) 3-page memo draft

ARTISO - Financing Recommendation Memo

To: Board of Directors
From: CFO Team
Date: April 8, 2026
Subject: Funding strategy, valuation, and financing recommendation for ARTISO

1. Executive recommendation

ARTISO should raise a €3.0M pre-seed round now using a blended funding stack rather than pure equity:
	•	€1.5-2.0M VC lead capital
	•	€0.3-0.5M angels / SAFEs
	•	€0.7-1.2M non-dilutive financing from ENISA, CDTI NEOTEC, and ICF/ACCIÓ

This is the most efficient structure for three reasons. First, it funds the company through the next value-inflection phase: converting pilots into contracted ARR, proving repeatability across fashion brands, and establishing the basis for a credible Series A process. Second, it reduces dilution versus a pure-equity round. Third, it preserves strategic flexibility if enterprise sales cycles prove slower than expected.

The recommended position is to anchor at €27M pre-money, while remaining prepared to close slightly lower if necessary to secure a high-quality lead and faster execution. The valuation is ambitious for pre-seed, but defensible if framed around traction quality, vertical AI positioning, >80% gross margins, and category-specific model/IP development. It should be presented as a target valuation, not as a non-negotiable entitlement.

⸻

2. Financial needs by scenario

The immediate objective of the round is not to optimize for headline valuation. It is to ensure ARTISO reaches the next financing event from a position of strength rather than from a position of urgency.

Scenario	Funding need now	Runway implication	Financing consequence
Base	€3.0M	Sufficient to reach major milestones and launch Series A from evidence	Raise now; begin Series A prep in Q2 2027
Upside	€3.0M	Adequate, with option to accelerate hiring or international GTM	Pull Series A forward and/or raise larger round at higher price
Downside	€3.0M + contingency	Initial round alone may not be enough if sales cycles extend or churn rises	Activate cost cuts early; prepare bridge / inside extension of €0.5-1.0M

Under the base case, the company targets ARR growth from €447K in 2026 to €29.3M in 2030, with EBITDA breakeven in Q4 2028 and a planned €10M Series A. Those figures imply strong operating leverage, but the model is highly sensitive to Enterprise NRR and lead growth. Your own prior work also identified these as the dominant value drivers.  ￼

The downside case is the key reason a pure-equity-only strategy is suboptimal. If enterprise procurement takes longer than expected, or if cross-sell expands more slowly than modeled, ARTISO risks entering a financing process with weaker momentum. The financing plan therefore must include not only capital raised today, but also explicit protection against a delayed next round.

⸻

3. Alternative sources of financing

ARTISO has four realistic financing categories.

A. Venture capital
This should be the primary source of capital because ARTISO is a high-growth, category-defining software company with capital needs beyond what grants and angel money can fund.

Priority targets:
	•	Nauta Capital
	•	Inveready
	•	Samaipata

These firms fit ARTISO’s profile best: European, software-native, familiar with early-stage B2B SaaS and AI, and credible for subsequent institutional rounds.

B. Angels / micro-SAFEs
Angels are valuable for:
	•	speeding up the process,
	•	validating the round socially,
	•	bridging between term sheet discussions and closing,
	•	bringing strategic fashion and enterprise contacts.

Recommended size: €300-500K total.

C. Non-dilutive financing
This is the most attractive source on a cost-of-capital basis and should be actively pursued in parallel, not after the equity closes.

Priority instruments:
	•	ENISA: up to €300K
	•	CDTI NEOTEC: €250-400K
	•	ICF / ACCIÓ: €200-300K

These instruments are particularly suitable because ARTISO’s product has a genuine R&D core, not merely commercial packaging around a horizontal model. They also reduce the amount of expensive equity sold too early.

D. Debt / revenue-based financing
This is not recommended as a primary source today. ARTISO is too early for conventional venture debt, and revenue-based financing is expensive and better suited as a tactical bridge once recurring revenue is more predictable.

⸻

4. Funding strategy recommendation

The recommended strategy is a stacked round:

Source	Amount
Lead VC	€1.5-2.0M
Angels / SAFEs	€0.3-0.5M
ENISA	€0.3M
CDTI / NEOTEC	€0.25-0.4M
ICF / ACCIÓ	€0.2-0.3M
Total	~€3.0M

This structure is superior to pure equity because it lowers effective cost of capital. Based on the group’s prior analysis, the blended structure implies roughly 4.5% blended cost of capital, compared with roughly 11% for pure equity, while keeping dilution around 8-12% instead of 10%+ on a pure-equity basis.  ￼

The strategic logic is simple:
	1.	secure enough cash now to avoid fundraising from weakness,
	2.	preserve founder ownership,
	3.	keep optionality for Series A,
	4.	avoid overreliance on one financing source.

The most important implementation point is sequencing. Non-dilutive applications should begin immediately, but the company must not wait for grant decisions before running the VC process. They should be pursued in parallel.

⸻

5. Valuation

The proposed round is €3M at €27M pre-money / €30M post-money.

This valuation can be justified using a forward revenue multiple approach:
	•	FY2026E ARR: €447K
	•	implied multiple: ~60x ARR

For a traditional SaaS company, that would be excessive. For a vertical AI company at pilot stage, it is aggressive but arguable if three conditions are met:
	1.	the product is perceived as infrastructure, not a feature,
	2.	early enterprise traction is real,
	3.	switching costs and category specificity are credible.

That said, the board should recognize the downside of anchoring too rigidly to €27M. ARTISO is still early, with only 7 paying logos, meaningful customer concentration risk, and large incumbent platform risk. The right financing recommendation is therefore:
	•	target: €27M pre-money
	•	acceptable range: roughly €22-25M if required to secure a strong lead and shorten time to close

That stance is financially rational. A slightly lower entry price is often worth accepting if it increases speed, syndicate quality, and Series A credibility.

⸻

6. Next steps

ARTISO should take the following actions immediately:
	1.	Repair and simplify the financial model before investor conversations. Remove fragile or overstated metrics, especially any NRR or LTV outputs that are not methodologically sound.
	2.	Launch the equity process now with a focused list of VCs and strategic angels.
	3.	Apply in parallel for ENISA, CDTI NEOTEC, and ICF/ACCIÓ.
	4.	Implement a formal runway trigger: if cash approaches the internal threshold, management immediately opens a bridge or accelerates cost actions.
	5.	Prepare Series A from Q2 2027, not when cash becomes tight.
	6.	Operationally de-risk the downside by deferring three hires and cutting S&M by 30% if conversion slows; this reduces burn from roughly €120K/month to €80K/month, extending runway by about five months.  ￼

Appendix note

Appendix should include:
	•	the full Excel financial model,
	•	the March 26 financing analysis,
	•	cap table and dilution schedule,
	•	scenario and sensitivity outputs,
	•	valuation backup,
	•	risk and contingency summary.

That is exactly aligned with the assignment brief, which requires a 5-year financial plan, a 3-page memo covering financing needs, alternatives, recommendation, valuation, and next steps, and a presentation built around numbers and financing justification.  ￼

⸻

C) Presentation design

You have 10 minutes. I would do 12 slides. This is tight, clean, and finance-first.

⸻

Slide 1 - ARTISO at a glance

Content
	•	One-line description:
Agentic AI platform for fashion creative workflows that learns a brand’s visual DNA
	•	Traction bar:
	•	7 paying logos
	•	>€60K pilot revenue
	•	200+ brands on waitlist
	•	Named logos: Deichmann, TATA Group, NF&TA
	•	Round:
	•	€3M pre-seed
	•	€27M pre / €30M post
	•	Why now:
	•	enterprise traction validated
	•	category timing favorable
	•	capital needed to convert pilots into scalable ARR

Speaker notes
“ARTISO is not a generic AI tool. It is a vertical AI workflow layer for fashion brands, trained around brand-specific visual memory and creative execution. The financing question is not whether the company has a product hypothesis. It does. The question is how to fund the next stage in the lowest-cost, least-dilutive way while preserving enough runway to reach a strong Series A.”

⸻

Slide 2 - What the board needs to decide

Content
Three decisions:
	1.	How much capital ARTISO actually needs
	2.	What mix of financing minimizes cost of capital
	3.	Whether €27M pre-money is defendable

Bottom box:
	•	Recommendation: raise €3M now using blended equity + non-dilutive stack

Speaker notes
“This presentation is organized around three board decisions: amount, mix, and price. Our conclusion is that ARTISO should raise €3M now, but not as pure equity. The value creation comes from combining VC, angels, and public innovation capital.”

⸻

Slide 3 - 5-year financial plan summary

Content
Table:

Metric	2026	2027	2028	2029	2030
ARR	€447K	€1.81M	€4.63M	€12.0M	€29.3M
Revenue	€316K	€1.39M	€4.03M	€9.98M	€24.2M
Gross Margin	83%	82%	83%	85%	87%
EBITDA	(€462K)	(€784K)	€424K	€4.78M	€16.4M

Footer:
	•	EBITDA breakeven: Q4 2028
	•	Series A target: €10M

Speaker notes
“The plan shows a classic venture profile: early losses, high gross margins, then operating leverage as recurring revenue scales. The key point for the board is not the exact 2030 number. It is the capital path needed to get from today’s pilot-stage business to the point where a Series A can be raised from evidence rather than from narrative.”

⸻

Slide 4 - Revenue model deep dive

Content
Left side: pricing structure
	•	3-tier SaaS
	•	SME ACV: €17K
	•	Large: €67K
	•	Enterprise: €155K
	•	Revenue streams:
	•	setup fees
	•	recurring subscription
	•	credit-based usage
	•	limited professional services

Right side: why this matters financially
	•	usage-based expansion potential
	•	recurring base builds valuation
	•	PS remains ancillary, not core

Speaker notes
“The model is strongest when recurring revenue drives the story. Setup fees help cash conversion early, but they should not be the investor headline. Credit-based pricing is strategically attractive because it creates upside through usage expansion, but we should be careful not to assume that all expansion happens organically.”

⸻

Slide 5 - Unit economics: what is usable and what is not

Content
Two-column slide.

Usable
	•	high gross margin profile
	•	attractive CAC payback potential
	•	credit usage creates expansion upside

Needs adjustment
	•	LTV/CAC reaching 32.6x is not credible
	•	NRR requires cleaner cohort logic
	•	cross-sell currently modeled too easily

Speaker notes
“We are not presenting the unit economics as flawless. We are presenting them honestly. Gross margin is strong. CAC payback can become attractive. But some model outputs, especially LTV/CAC and NRR, are too optimistic in their current form. We would rather disclose that ourselves than let the board discover it first.”

⸻

Slide 6 - Funding need and timing

Content
Waterfall / timeline:
	•	Opening raise: €3.0M
	•	Expected revenue contribution before next round
	•	Lowest cash point: Q1 2028
	•	Begin Series A prep: Q2 2027
	•	Target Series A: €10M

Add note:
	•	internal cash trigger for action
	•	no financing from weakness

Speaker notes
“The financing question is fundamentally about timing. ARTISO should not wait until cash is tight to start the next process. The right move is to raise the pre-seed now, start Series A preparation around Q2 2027, and use explicit internal runway triggers so the company never enters a process as a forced seller.”

⸻

Slide 7 - Why blended financing beats pure equity

Content
Table:

Source	Amount	Dilution
VC	€1.5-2.0M	5-7%
Angels	€0.3-0.5M	1-2%
Non-dilutive	€0.7-1.2M	0%
Total	~€3.0M	8-12%

Bottom banner:
	•	blended cost of capital: ~4.5%
	•	pure equity alternative: ~11%

Speaker notes
“This is the most distinctive part of the recommendation. ARTISO does not need to fund this stage only with expensive equity. Because the company has a genuine R&D component, public innovation financing is available and economically superior. The blended stack reduces dilution and improves capital efficiency without starving the business.”

⸻

Slide 8 - Cap table and dilution

Content
Simple cap table:

Today
	•	Founder 1: 33.3%
	•	Founder 2: 33.3%
	•	Founder 3: 33.3%

Post pre-seed + ESOP
	•	Founder 1: ~27.0%
	•	Founder 2: ~27.0%
	•	Founder 3: ~27.0%
	•	ESOP: 9.0%
	•	New investors: 10.0%

Post Series A (illustrative)
Show dilution mechanically, not over-precisely.

Speaker notes
“The key message here is not the exact decimal. It is that the pre-seed should be structured to preserve founder control and future fundraising flexibility. We show dilution explicitly because the assignment asks for it, but the board decision is really about whether today’s capital buys enough time and progress to justify the ownership sold.”

⸻

Slide 9 - Valuation: defendable, but aggressive

Content
Left:
	•	proposed pre-money: €27M
	•	raise: €3M
	•	post-money: €30M

Right:
	•	basis: ~60x FY2026E ARR
	•	support:
	•	European AI / SaaS pre-seed comps
	•	vertical AI positioning
	•	pilot revenue + waitlist + paid logos
	•	high gross margins

Bottom:
	•	board view: target valuation
	•	acceptable execution range: €22-25M if needed

Speaker notes
“The valuation is defendable, but it is a stretch. That is the honest answer. We think €27M pre-money is a reasonable opening position given category, traction quality, and margin profile. But if a slightly lower price materially improves syndicate quality or speed, the company should prioritize closing the right round over defending the headline number.”

⸻

Slide 10 - Scenario analysis

Content
3-column comparison table:

Metric	Base	Upside	Downside
Initial round	€3.0M	€3.0M	€3.0M
Series A timing	Q2 2027 prep	earlier / larger	earlier need for contingency
Funding risk	manageable	low	high
Management action	normal plan	accelerate GTM	cut burn + bridge optionality

Bottom:
	•	Do not show €528M upside ARR
	•	Keep upside credible

Speaker notes
“We intentionally made the scenario slide decision-oriented, not fantasy-driven. The upside case in the raw model is not credible enough to present as-is. So we use scenarios to show financing implications, not to advertise heroic outputs.”

⸻

Slide 11 - Sensitivity and risks

Content
Tornado chart concept:
	1.	Enterprise NRR
	2.	Lead growth rate
	3.	Logo churn
	4.	Sales cycle length
	5.	Credit usage growth
	6.	Gross margin

Risk box:
	•	customer concentration
	•	moat erosion from Adobe / OpenAI
	•	long enterprise sales cycles
	•	model sensitivity
	•	runway timing

Speaker notes
“The board should focus on two variables above all others: Enterprise NRR and lead growth. Those are the major determinants of both ARR and cash. The right takeaway is that ARTISO is fundable, but only if management treats the model as a living operating tool and not as a static investor deck.”

⸻

Slide 12 - Contingency plan, next steps, and board ask

Content
Contingency:
	•	defer 3 hires
	•	cut S&M by 30%
	•	burn falls from ~€120K/month to ~€80K/month
	•	runway extension: ~5 months

Next 90 days:
	•	fix model
	•	launch VC process
	•	submit non-dilutive applications
	•	finalize Series A milestones

Board ask
	•	approve target raise of €3M
	•	approve blended financing strategy
	•	approve parallel grant / loan applications
	•	approve Series A prep starting Q2 2027

Speaker notes
“Our ask is straightforward: approve a €3M pre-seed process, approve the blended financing strategy, and approve early Series A preparation. The real discipline is not just raising this round. It is ensuring the company reaches the next round with evidence, optionality, and negotiating leverage.”

⸻

D) Q&A prep - 20 hardest questions

1) Why does ARTISO need €3M now instead of €2M?

Why they ask: They want to see whether you understand financing need versus vanity fundraising.
Answer: “Because the company is still in a proof-to-scale phase with enterprise sales cycles that can stretch to 6-9 months. €2M would likely leave too little margin for execution risk. €3M gives enough runway to convert pilots, build product depth, and prepare Series A without fundraising from weakness.”

2) Why not raise the entire amount as equity and move faster?

Why they ask: To test whether your blended stack is real or just theoretical.
Answer: “We could, but it would be more expensive capital. ARTISO qualifies for innovation-linked non-dilutive instruments, so ignoring them would unnecessarily increase founder dilution. Our recommendation is speed with parallel paths, not delay while waiting for grants.”

3) Isn’t €27M pre-money too aggressive for pre-seed?

Why they ask: This is the obvious pressure point.
Answer: “Yes, it is aggressive. We think it is defensible as an anchor because of the vertical AI positioning, early paying logos, and margin profile. But we would not defend it rigidly if a slightly lower valuation materially improves lead quality or closing certainty.”

4) What exactly justifies a 60x FY2026E ARR multiple?

Why they ask: They want valuation discipline.
Answer: “Only three things justify it: vertical AI category premium, evidence of enterprise willingness to pay, and a belief that ARTISO is becoming part of workflow infrastructure rather than a point feature. If investors do not buy that framing, the multiple compresses quickly, which is why we present €27M as a target rather than a guaranteed clearing price.”

5) Why are you showing NRR if the model does not calculate true NRR?

Why they ask: To test honesty and technical understanding.
Answer: “We should not present the current model output as true NRR. The existing formula measures recurring revenue growth, not opening-cohort retention. In the final deck I would either remove NRR or relabel it until the cohort logic is fixed.”

6) LTV/CAC at 32.6x is absurd. Why should we trust anything else?

Why they ask: They want to see whether one bad metric infects the whole case.
Answer: “That output is too optimistic, and we agree. It comes from churn and expansion assumptions that overstate lifetime value. The right response is not to defend the number; it is to revise the metric and keep the financing case centered on runway, gross margin, and milestone-based fundraising.”

7) Your EBITDA margin reaches levels above strong SaaS benchmarks. Why?

Why they ask: To challenge unrealistic operating leverage.
Answer: “Because the current model scales revenue faster than headcount and assumes strong expansion efficiency. That makes it directionally useful but too optimistic at the outer years. For decision-making, I would focus more on 2026-2028 than on the terminal margin.”

8) Why does the workbook cash go negative if your prior deliverable said it would not?

Why they ask: They want to catch inconsistency.
Answer: “Because the current workbook still has broken formula logic, missing deferred revenue, and no Series A financing line. The right conclusion is that the model needs repair before being treated as the final source of truth. We would present reconciled numbers, not both versions.”

9) How much of the revenue forecast depends on cross-sell?

Why they ask: Cross-sell is a weak assumption in your case.
Answer: “Too much in the current model. That is exactly why we are flagging it. The conservative way to communicate with investors is to underwrite the case primarily on new-logo acquisition and initial ACV, with cross-sell treated as upside rather than as baseline inevitability.”

10) Why do you think customers will expand without a real sales motion?

Why they ask: They know the model assumes organic usage.
Answer: “We do not. That assumption is too generous. Expansion should be modeled with explicit AE bandwidth, customer success effort, and longer time-to-expand. The financing plan is still valid, but the expansion curve needs to be moderated.”

11) If enterprise sales cycles stretch from 6 months to 9 months, what happens?

Why they ask: To test downside planning.
Answer: “It delays revenue recognition and can pull forward the need for either a bridge or cost actions. That is why we recommend a contingency plan now: defer three hires, reduce S&M by 30%, and preserve bridge optionality if conversion lags.”

12) Why is headcount only 23 while revenue reaches very high levels?

Why they ask: Revenue per employee looks stretched.
Answer: “Because the model assumes unusually high operating leverage from software and usage-based expansion. It may be directionally possible, but it is optimistic. In practice, if growth materializes at that pace, ARTISO would likely need to add more GTM, support, and customer success capacity.”

13) Why is deferred revenue not modeled if 40% of customers pay annually?

Why they ask: This is a classic finance-model integrity question.
Answer: “It should be modeled. Leaving it out understates early cash and understates liabilities. We identified it as a must-fix before final submission.”

14) Why should ENISA/CDTI/ICF be considered realistic, not wishful?

Why they ask: Non-dilutive stacks often look good on paper but fail in execution.
Answer: “Because ARTISO fits the profile better than a generic software startup: there is real R&D, a Spanish/Catalan financing context, and a venture-stage growth plan. That said, we do not assume full success. We pursue them in parallel and do not make the equity close dependent on them.”

15) What happens if you only raise €2.2M instead of €3M?

Why they ask: To see if you understand financing flexibility.
Answer: “Then management has to either cut burn immediately or shorten the milestone set expected before the next round. It is survivable, but it increases execution risk and reduces negotiating leverage for Series A.”

16) Why not rely more on angels and less on VCs?

Why they ask: To test capital source fit.
Answer: “Angels are useful for speed and signaling, but they are not sufficient as the core of the round. ARTISO needs an institutional lead that can validate pricing, help syndicate, and strengthen credibility for the next financing event.”

17) What is the single biggest risk in the case?

Why they ask: They want prioritization.
Answer: “Commercial validation at scale. Not whether the product can generate impressive outputs, but whether enterprise customers buy, expand, and renew at the pace assumed. Everything else in the model depends on that.”

18) What would make you revise the valuation downward internally?

Why they ask: To test discipline.
Answer: “If the sales cycle lengthens materially, if expansion proves weaker than expected, or if investors consistently reject the infrastructure narrative and price ARTISO more like a feature layer. In that case, speed and syndicate quality become more important than defending €27M.”

19) Why begin Series A prep in Q2 2027 if the round is expected later?

Why they ask: To test timing sophistication.
Answer: “Because the best Series A processes begin before the company urgently needs cash. Starting in Q2 2027 gives time to build investor familiarity, sharpen milestones, and avoid a compressed process.”

20) If you had to remove one slide from the presentation, which would it be?

Why they ask: They want to see whether you know what matters most.
Answer: “I would remove anything that looks like vanity upside. The essential slides are financial plan, funding need, financing mix, valuation, dilution, sensitivity, and risk. This is a finance decision, so every slide has to earn its place numerically.”

⸻

If you want, I can turn this next into a professor-ready final memo version and a clean speaker script for all 12 slides.

---


