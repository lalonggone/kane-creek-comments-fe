// Matches the public API allowlist exactly (server.js `publicColumns`).
// PII columns (email, phone, address) and internal flags (volunteer,
// email_updates) are never returned, so they are not part of this type.
export interface Response {
  id: number
  submitted_at: string
  grand_county_resident: string
  concern_level: number | null
  response: string
  impacts_speculated: string | null
  name: string
}
