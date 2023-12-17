export default function fetchJson<T>(
  url: string,
  options?: RequestInit
): Promise<T> {
  return fetch(url, options).then((response) => {
    if (response.ok) {
      return response.json();
    }
    throw new Error(response.statusText);
  });
}
