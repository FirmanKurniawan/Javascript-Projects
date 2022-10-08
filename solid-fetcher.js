// @ts-check
// Solidjs fetcher function to use in createResource

const BACKEND_URL = "http://localhost:5000";

export default async function fetcher(endpoint, options) {
  try {
    let response = await fetch(BACKEND_URL + endpoint, options);
    let json = await response.json();
    if (!json) {
      return { error: "Terjadi kesalahan!" };
    }

    return json;
  } catch (error) {
    return { error: error.message };
  }
}
