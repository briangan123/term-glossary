import {LitElement, html, css} from 'lit';

class termList extends LitElement{
    constructor() {
        super();
    }
    
    render() {
        return html`
        <style>
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
                <td></td>
                <td>‘first def’</td>
                <td>‘context’</td>
            </tr>
            <tr>
                <td>‘2nd term’</td>
                <td>‘2nd def’</td>
                <td>‘context’</td>
            </tr>
            </table>
        </body>
        `;
    }

    async getList() {
        await fetch(`api/viewList.js`).then(res => res.json()).then((data) => {
            console.log(data);
            this.listMap = data;
            return data;
        });
    }
}
customElements.define('term-list', termList);

// need a static get properties for data
// use     ${this.view === 'list'
// ? html`
// <ul>
//   ${this.image.map(
//     item => html`
//       <li>
//       ${item.image} - ${item.title} - ${item.description} - ${item.secondary_creator}
//       </li>
//     `
//   )}
// </ul>