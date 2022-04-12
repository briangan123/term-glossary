import {LitElement, html, css} from 'lit';

class termList extends LitElement{

async getData(){
const listbtn = document.querySelector("#viewList")
listbtn.addEventListener("click", (e) => {
e.preventDefault()

  

fetch(`/api/viewList.js`).then(res => res.json()).then((data) => {
    console.log(data);
   });

  

}
)
}
}

customElements.define('term-List', termList);