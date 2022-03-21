
##  Week 10 Group B  Term-Glossary

## NOTES for requirements

#### Requirements for the Back end
Build a microservice that stores and processes vocabulary terms

POST / READ This service can be passed a text / HTML string of text, identify words that match the glossary

POST / CREATE needs to be able to take word, textual definition, and any links desired

GET / READ needs to accept a parameter for returning 1 term / definition or ALL

Pervasive data store in a jsonbin.io or actual data store of your choice


#### Requriements for the Front end

Create a demo page / space that has the ability to add new words to the glossary via a small form POST
The ability to hit a button and present all words in the glossary with their definitions via a dl tag (https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dl)
The ability to take a block of HTML on the page and send off to the microservice for processing.
The front end needs to then get the words that match, find them in the text of the HTML, and then automatically apply a vocab-term tag (https://www.npmjs.com/package/@lrnwebcomponents/vocab-term) which when clicking the word, would show the definition positioned near it.
Demo should include an area where the user can type text and hit "process" and it augments the typed text, presenting matches for the vocab word in context


## Brainstorm

