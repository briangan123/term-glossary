const form = document.querySelector("#term-list")
form.addEventListener("viewList", (e) => {
e.preventDefault()

  

fetch(`/api/viewList.js`).then(res => res.json()).then((data) => {
    console.log(data);
   });

  

}
)