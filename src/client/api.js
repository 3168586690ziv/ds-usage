// The usage API: POST /api/usage, the single route this plugin serves.
const ROUTE = 'api/usage'

export const call = async (endpoint, payload, signal) => {
  let response
  try {
    // Document-relative so the Web UI keeps working under a mounted base path.
    response = await fetch(ROUTE, {
      method: 'POST',
      credentials: 'same-origin',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ endpoint, payload: payload ?? null }),
      signal,
    })
  } catch (error) {
    if (error?.name === 'AbortError') throw error
    throw Object.assign(new Error(`network error: ${error?.message ?? error}`), { code: 'NETWORK' })
  }
  if (!response.ok) {
    throw Object.assign(new Error(`HTTP ${response.status}`), { code: `HTTP_${response.status}` })
  }
  const result = await response.json()
  if (!result.ok) {
    throw Object.assign(new Error(result.error?.message ?? 'Request failed'), { code: result.error?.code ?? 'usage/error' })
  }
  return result.value
}

export const usageApi = {
  usage: () => call('usage', { timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone }),
}
