const form = document.querySelector("#add-term")
form.addEventListener("submit", (e) => {
e.preventDefault()

  const term = form.term.value;
  const definition = form.definition.value;
  const context = form.context.value;

  console.log(term)
  console.log(definition)
  console.log(context)

  fetch(`/api/addTerm.js?term=${term}&definition=${definition}&context=${context}`).then(res => res.json()).then((data) => {
   console.log(data);
  });

}
)