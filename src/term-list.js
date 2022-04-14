import {LitElement, html, css} from 'lit';

class termList extends LitElement{
    constructor() {
        super();
        this.id = null;
        this.listMap = [];
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
        await fetch(`api/viewList.js`).then(res => res.json()).then((data) => {
            console.log(data);
            this.listMap = data;
            return data;
        });
    }

     deleteTerm(e) {
        console.log("deleteTerm fxn is working")
        if (e.target.hasAttribute('data-term-id')) 
        {
          fetch(`api/removeTerm.js?id=${this.item.id}`, 
            {
                id: e.target.getAttribute('data-term-id')
            })
        }
        this.render();
    }

    render() {
        return html`

        <ul>
            ${this.listMap.map(
            item => html`
                <li>
                    <button data-term-id="${item.id}" label="Delete term" id="Delete" @click="${this.deleteTerm(this.item)}">Delete</button>
                    ${item.term}: ${item.definition} (${item.context})
                </li>
                     `)}
        </ul>
        `;
    }


}
customElements.define('term-list', termList);

