const host = 'http://localhost:1337';

export function query(endpoint) {
  return fetch(`${host}${endpoint}`).then((res) => res.json());
}
