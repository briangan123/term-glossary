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

    render() {
        return html`
        <!-- <style>
            table, th, td {
            border:1px solid black;
            }
        </style>
        <body>
            <h2>Glossary</h2>
            <table style=“width:100%“>
            <tr>
                <th>Term</th>
                <th>Definition</th>
                <th>Context</th>
            </tr>
            
            <tr>
                <td>‘first term’</td>
                <td>‘first def’</td>
                <td>‘context’</td>
            </tr>
            <tr>
                <td>‘2nd term’</td>
                <td>‘2nd def’</td>
                <td>‘context’</td>
            </tr>
            </table>
        </body> -->

        <ul>
            ${this.listMap.map(
            item => html`
                <li>
                    ${item.term} - ${item.definition} - ${item.context}
                </li>
                     `)}
        </ul>
        `;
    }
}
customElements.define('term-list', termList);

