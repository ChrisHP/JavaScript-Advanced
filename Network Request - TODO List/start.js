const listUrl = "https://jsonplaceholder.typicode.com/todos";
async function getToDoList(url) {
  const response = await fetch(url);
  return response;
}
getToDoList(listUrl)
  .then((response) => response.json())
  .then((json) => console.log(json))
  .catch((err) => console.error(err));
