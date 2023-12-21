document.querySelector("form").addEventListener("submit", createTodo);

function createTodo(e) {
  e.preventDefault();

  var task = document.querySelector("#task").value;
  var tr = document.createElement("tr");
  var td1 = document.createElement("td");
  var td2 = document.createElement("td");

  td1.innerText = task;
  td2.innerText = "Delete";
  td2.addEventListener("click", deleteData);

  tr.append(td1, td2);
  document.querySelector("tbody").append(tr);
}

function deleteData(e) {
  e.target.parentNode.remove();
}
