import {LitElement, html, css} from 'lit';

class termFinder extends LitElement{
    constructor() {
        super();
        this.id = null;
        this.listMap2 = [];
        this.term = "";
        this.definition = "";
        this.context = "";
    }

    static get properties() {
        return {
        listMap: {type: Array},
          id: {type: Number},
          term: {type: String},
          definition: {type: String},
          context: {type: String},
        };
      }
      
      async getList() {
        const form = document.querySelector("#term-find")
        form.addEventListener("submit2", (e) => {
        e.preventDefault()
        
          const termFind = form.termFind.value;
        
          console.log(termFind)
        
          await fetch(`api/termFinder.js`).then(res => res.json()).then((data) => {
           console.log(data);
           this.listMap2 = data;
          });
        
        }
        )
    }
    render() {
        return html`
        <ul>
            ${this.listMap2.map(
            item => html`
                <li>
                    ${item.term} - ${item.definition} - ${item.context}
                </li>
                     `)}
        </ul>
        `;
    }

}
customElements.define('term-find', termFind);