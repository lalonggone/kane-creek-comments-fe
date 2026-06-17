const API_URL = import.meta.env.VITE_API_URL;

// Paginated + searchable feed. Returns { results, total, page, limit }.
const getResponses = async ({ q = '', residency = 'all', page = 1, limit = 12 } = {}) => {
  const params = new URLSearchParams({ page, limit });
  if (q) params.set('q', q);
  if (residency && residency !== 'all') params.set('residency', residency);

  const res = await fetch(`${API_URL}/responses?${params}`);
  if (!res.ok) {
    throw new Error(`Failed to load comments (${res.status})`);
  }
  return res.json();
};

// A single response by its real database id (used by the detail page).
const getResponseById = async (id) => {
  const res = await fetch(`${API_URL}/responses/${id}`);
  if (res.status === 404) return null;
  if (!res.ok) {
    throw new Error(`Failed to load comment (${res.status})`);
  }
  return res.json();
};

// Aggregate counts for the stats line.
const getStats = async () => {
  const res = await fetch(`${API_URL}/stats`);
  if (!res.ok) {
    throw new Error(`Failed to load stats (${res.status})`);
  }
  return res.json();
};

export { getResponses, getResponseById, getStats };
