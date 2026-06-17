export interface Stats {
  total: number
  named: number
  anonymous: number
  byResidency: { grand_county_resident: string; count: number }[]
  byConcernLevel: { concern_level: number | null; count: number }[]
}
