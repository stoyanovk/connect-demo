export async function getUsers() {
  return fetch("https://jsonplaceholder.typicode.com/users")
    .then((r) => r.json())
    .then((r) => r);
}
