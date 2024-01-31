const listUrl = "https://jsonplaceholder.typicode.com/todos";
const list=document.getElementById("todo-list");
async function getToDoList(url) {
  const response = await fetch(url);
  return response;
}
function createListElements(json){
  let li=null;
  for (const e of json) {
    li=document.createElement("li")
    li.innerText=e.title;
    list.append(li);
  }
}

getToDoList(listUrl)
  .then((response) => response.json())
  .then(createListElements)
  .catch((err) => console.error(err));


