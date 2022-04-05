class updateData {

    static get properties() {
		return {
			term: {type: String},
			definition: {type: String},
			context: {type: String}
        }
    }

    static updateData() {
        console.log("here");
        const term = document.querySelector("#term").value;
        const definition = document.querySelector("#definition").value;
        const context = document.querySelector("#context").value;
        const url = new URL('https://term-glossary.vercel.app/api/addterm.js')
        url.searchParams.set('term',term)
        url.searchParams.set('definition', definition)
        url.searchParams.set('context', context)
    
        fetch(`/api/addTerm?term= ${term} `).then(res => res.json()).then((data) => {
         document.querySelector("#term").value = JSON.stringify(data, null, 2);
        });
      }
}
customElements.define('add-term-form', updateData);