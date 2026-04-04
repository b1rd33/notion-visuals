import type { FC } from 'react'
import { S01Title } from './S01Title'
import { S02BoardDecisions } from './S02BoardDecisions'
import { S03FinancialPlan } from './S03FinancialPlan'
import { S04RevenueEngine } from './S04RevenueEngine'
import { S05UnitEconomics } from './S05UnitEconomics'
import { S06FundingNeed } from './S06FundingNeed'
import { S07BlendedFinancing } from './S07BlendedFinancing'
import { S08CapTable } from './S08CapTable'
import { S09Valuation } from './S09Valuation'
import { S10Scenarios } from './S10Scenarios'
import { S11Risks } from './S11Risks'
import { S12BoardAsk } from './S12BoardAsk'

export const slides: FC<{ active: boolean }>[] = [
  S01Title,
  S02BoardDecisions,
  S03FinancialPlan,
  S04RevenueEngine,
  S05UnitEconomics,
  S06FundingNeed,
  S07BlendedFinancing,
  S08CapTable,
  S09Valuation,
  S10Scenarios,
  S11Risks,
  S12BoardAsk,
]
