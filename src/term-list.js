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
        await fetch(`api/viewList`).then(res => res.json()).then((data) => {
            console.log(data);
            this.listMap = data;
            return data;
        });
    }

     async deleteTerm(e) {
        if (e.target.hasAttribute('data-term-id')) 
            {
                const clickedId = e.target.getAttribute('data-term-id');
                console.log(clickedId);
                await fetch(`api/removeTerm?id=${clickedId}`, 
                {
                    id: e.target.getAttribute('data-term-id')
                })
                // .then(res => res.json()).then((data) => {
                //     this.listMap = data;
                //     return data;
                // });
            }
        this.getList();  
        
    }

    render() {
        return html`
        <ul>
            ${this.listMap.map(
            item => html`
                <li>
                    <button  @click="${this.deleteTerm}" data-term-id="${item.id}" label="Delete term" id="Delete">Delete</button>
                    ${item.term}: ${item.definition} (${item.context})
                </li>
                     `)}
        </ul>
        `;
    }


}
customElements.define('term-list', termList);

