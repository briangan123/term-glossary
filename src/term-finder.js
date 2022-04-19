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
      
    async findTerm() {
      const termFind = document.querySelector("#termFind").value;
      console.log(termFind)
      await fetch(`api/termFinder`).then(res => res.json()).then((data) => {
        console.log(data);
        this.listMap2 = data;
        });
    }
    firstUpdated(changedProperties) {
      if (super.firstUpdated) {
        super.firstUpdated(changedProperties);
      }
      // const form = document.querySelector("#Find");
      // console.log(form);
      // form.addEventListener("click", this.findTerm.bind(this));
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
customElements.define('term-finder', termFinder);