const host = 'http://localhost:1338';

export function query(endpoint) {
  return fetch(`${host}${endpoint}`).then((res) => res.json());
}
