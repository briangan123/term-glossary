const form = document.querySelector("#add-term")
form.addEventListener("click", (e) => {
e.preventDefault()

  const term = document.querySelector("#term").value;
  const definition = document.querySelector("#definition").value;
  const context = document.querySelector("#context").value;

  // console.log(term)
  // console.log(definition)
  // console.log(context)

  fetch(`/api/addTerm?term=${term}&definition=${definition}&context=${context}`).then(res => res.json()).then((data) => {
   console.log(data);
  });

}
)