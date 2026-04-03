# ARTISO Financial Model — Version Control

## v4 — Apr 3, 2026 (Artiso_Financial_Model_v4_Apr3.xlsx)

**Base:** v3 (all fixes + CapTable + Valuation + Tax Carry-Forward)
**Change:** Addressed Martí's feedback — first year of operation labeling
**Formula check:** 4,282 formulas, 0 errors

### Changes
- FY2026 relabeled as "FY2026* (Apr-Dec)" in annual summary
- Footnote added: "Q1 2026 was pre-investment (€0 revenue, €0 opex). Full calendar year = 12 months."
- Pre-Investment column D added with "Q1 2026" label and €3M opening cash
- README updated to v4.0 with timeline description
- All v3 formulas preserved — no structural changes

### Why not 12 monthly columns?
Inserting 3 columns (Jan-Mar) before April would break 4,282+ formula references across 9 sheets. The operational model correctly starts in April when the seed arrives. Adding 3 zero-activity months would be pure padding. Instead, we explicitly label and footnote the pre-investment period.

---

## v3 — Apr 2, 2026 10:30 PM (Artiso_Financial_Model_v3_Apr2.xlsx)

**Base:** v2 (all 11 bug fixes + UE rebuild)
**Editor:** Christian (automated via Claude + openpyxl)
**Verification:** 5 course cross-reference agents (Sessions 00-04) + LibreOffice recalc
**Formula check:** 4,282 formulas, 0 errors

### New: Tax Loss Carry-Forward (2_Projections row 89)

Replaced `=IF(EBIT>0, EBIT*25%, 0)` with cumulative loss pool logic:
`=MAX(0, cumulative_EBIT * 25% - cumulative_prior_taxes)`

- FY2026-2028: €0 taxes (cumulative losses shield all profits)
- FY2029: €224K taxes (was €770K — loss pool partially offsets)
- Net tax savings: ~€584K over model horizon
- Cash recovers to positive sooner (Q2 2029)
- Session 03 explicitly teaches: "apply tax loss carry-forward to startup models"

### New: 7_CapTable Sheet (67 rows)

Built from Session 04 share-based valuation formulas:
- **Section A:** Pre-seed cap table (3 founders × 33.3%, 10M shares)
- **Section B:** Post-seed (founders 26.7% each, ESOP 10%, Seed investors 10%, 12.5M shares)
- **Section C:** Series A projection (~2% dilution at €241M pre-money based on FY2028 ARR)
- **Section D:** Dilution waterfall summary
- **Section E:** ESOP dilution analysis — flags VC pre-money carve-out vs course-recommended pro-rata method
- PPS: €2.40 (seed) → €19.33 (Series A) = 8.1x step-up

### New: 8_Valuation Sheet (100 rows)

Built from Session 04 5-Step VC Method:
- **Section A:** 5-Step VC Method (EV at exit €358M at 10x ARR, required ownership 3.2%, implied pre-money €90.3M)
- **Section B:** Implied IRR for seed investors = 85.9% (far exceeds 40% hurdle)
- **Section C:** Return multiples (11.9x no dilution, 11.7x post-Series A)
- **Section D:** Valuation triangulation (5 methods: FY2026 Rev×40x, ARR×20x, Forward Rev×5x, VC backward, comparables) — range €25.8M-€90.3M, €27M defensible at lower end
- **Section E:** Required exit for 40% IRR = €117.6M, model projects €358M — easily sufficient

### Course Gap Analysis (from 5 cross-reference agents)

Addressed in v3:
- Tax Loss Carry-Forward ✓
- Cap Table with proper share math ✓
- 5-Step VC Method valuation ✓
- Valuation triangulation ✓
- ESOP dilution analysis ✓
- IRR calculation ✓

Remaining known simplifications (noted for professors):
- Deferred revenue = 0 (structural simplification)
- AR ignores annual prepay (linked to above)
- Sales cycle params defined but unused
- No cohort-level retention tracking (blended churn only)
- No dedicated sensitivity/tornado chart (3 scenarios exist)
- No Series A modeled in cash flow (flagged in Valuation sheet)

---

## v2 — Apr 2, 2026 9:00 PM (Artiso_Financial_Model_v2_Apr2.xlsx)

**Base:** Artiso_Financial_Model_Marti_Built.xlsx (v3.0 by Martí, downloaded Apr 2)
**Editor:** Christian (automated fixes via Claude + openpyxl)
**Verification:** All 20 issues independently confirmed by Claude audit + GPT-5.4 audit
**Formula check:** 4,149 formulas, 0 errors post-fix (LibreOffice recalc)

### Fixes Applied

| # | Sheet | Cells | Fix | Impact |
|---|-------|-------|-----|--------|
| 1 | 2_Projections | I31:AC31, L32:AC32, O33:AC33, P34:AC34 (68 cells) | Replaced #REF! with '5_Headcount'!{col}63 and '1_Assumptions'!$F$82 | Unblocked ~420 cascading #VALUE! errors across all 4 sheets |
| 2a | 2_Projections | E71:M71 | Changed COGS period multiplier from *3 to *1 in monthly columns | Gross margin corrected from ~56% to ~84% in Year 1 |
| 2b | 2_Projections | E71:AC71 | Replaced hardcoded ^(28-1) exponent with correct period index per column | COGS now uses correct credit growth per period |
| 3 | 2_Projections | D108:J108 | Changed =IFERROR(D103/D95,0) to =IFERROR(D102/D94,0) | EBITDA Margin % now shows correct values (was 0% everywhere) |
| 4 | 5_Headcount | C16 | Changed salary from 10,000 to 100,000 | Corrects ~500K+ understated costs over model horizon |
| 5 | 2_Projections | G53, G54, G55 | Changed ^(2-1) to ^(3-1) | June credit revenue now uses correct period index |
| 6 | 2_Projections | N25:AC25, N26:AC26 (32 cells) | Changed churn exponent from ^1 to ^3 in quarterly columns | Large/Enterprise churn now compounds correctly over quarters |
| 7 | 2_Projections | Rows 24-26 (49 cells) | Changed $F104/$F105/$F106 to $F$104/$F$105/$F$106 | Row references now absolute — won't break if rows inserted |
| 8 | 1_Assumptions | E127 | Changed Downside PS Projects/Month from 0.17 to 0.05 | Downside now correctly lower than Base (was backwards) |
| 9 | 1_Assumptions | H88 | Changed =C88/SUM($C$88:$C$88) to =C88/SUM($C$86:$C$88) | Formula now returns Enterprise share of client mix (was always 1) |
| 11 | 2_Projections | E37 | Changed E12/E13/E14 to E18/E19/E20 | April setup fees now use integer new logos (was booking phantom revenue) |

### Unit Economics Sheet Rebuilt

Completely rebuilt 6_UnitEconomics with formula-driven metrics:

**A. Input Metrics (rows 5-12)**
- S&M Spend, New Logos, Installed Base, Recurring Revenue, Total Revenue, Gross Profit, Gross Margin %, EBITDA

**B. Unit Economics (rows 15-20)**
- Blended CAC — returns "N/A" when logos=0 (not misleading 0)
- Blended ARPU — annualized recurring revenue / installed base
- Blended Logo Churn — weighted from assumption rates (not back-calculated from rounded base)
- LTV — ARPU × GM% / Annual Churn (5% floor, not 1%)
- LTV/CAC ratio
- CAC Payback (months)

**C. Efficiency Metrics (rows 23-25)**
- Burn Multiple — formula-driven (was hardcoded)
- Magic Number — annualized for monthly/quarterly comparability
- Rule of 40 — Revenue Growth % + EBITDA Margin % (new)

### Known Issues NOT Fixed (require team decision)

| # | Issue | Why not fixed |
|---|-------|---------------|
| 10 | Sales cycle params unused (F89-91) | Design decision — need team input on whether to model pipeline delay |
| 12 | NRR label | Rebuilt as honest "Recurring Revenue Growth" metric via ARPU approach |
| 17 | Annual billing discount on full base | Small impact (~4% of revenue), accepted as simplification |
| 18 | Deferred revenue = 0 | Structural change — would require reworking CF and BS logic |
| 19 | AR ignores annual prepay | Same as #18 — linked structural simplification |
| 20 | Numbers vs Deliverable 2 mismatch | Model numbers will change post-fixes — need to reconcile memo after |

---

## v1 (Original) — Artiso_Financial_Model_Marti_Built.xlsx

**Author:** Martí Lombarte
**Date:** ~Mar 2026
**Status:** 20 issues identified (see excel-review.md for full audit)
