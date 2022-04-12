import {LitElement, html, css} from 'lit';

class termList extends LitElement{
    constructor() {
        super();
    }

    render() {
        return html`stuff`;
    }
    async getData() {
        await fetch(`../api/viewList.js`).then(res => res.json()).then((data) => {
            console.log(data);
            this.listMap = data;
            
            return data
        });
    }
}
customElements.define('term-list', termList);