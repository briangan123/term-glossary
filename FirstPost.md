
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

#### Frontend Visual V1
![Frontendv1](https://lh3.googleusercontent.com/L8MHOZn8g481YO5Oz-8VYZDVgndfkswlwqlnxMUI_FUuq-MwjT3Nm0utHjGAhMKVH-rtQ4gvcG9M5l1CUpLG-KR--qNzeGaEBItecUbUHzcSaVbtnG-sQo2BoqRLYjA74j57VjTzD2vwTtzy490hrKjIqiORpmJqWstvdofI_rcyeVj0luEqrvuIMt5iw5StXwhfY9GlmkbZSGC1vx4XNS-8zuwEIJx3vX52A8hdo8rho__CXsPbJ1tXAbFfH3w0L0BUIrLc0EAGWulLbGv1hLHEI4PzzRVZCTl_OnqCbCU7s03sZ-E-1F0_H4T9gp7IweuiPdKYJsuoTp9YCShFxmToBdFBvABNAksmKjBUD03qmaVwtjmUrtWAvzMyx7ikDbVQ6Vk63lq10rlz_9gVNg2Ek1kE9cixI7qWKeAT60viL-QgxW4lv-B0-pk__k2Bcmh1EhHnUnJP65CRDSmwt70fMmUE_-yfqT9krcpbU_QkOaSJhhjKVy7W1bRHBCXq2Tim4u1oPj4s4Xz7yOGvlZzFElDum9z7jElwa7-ZF6VCdHKqcH-nPudfL_sR9Yj3vIaWmXT0_pZbWbAeaddBlJaFKT-YR9VbuZKWl-YykP_aZFQVEWXefkqB2vJ3P-RQEOJhAzenJJjS0aaH4W0h7XvDU-QtsSnBZwQaC0dxm0CV8rm9CJhNKWz9dysAu1YV7XWLbjK-jpNggx0EoLHsZDf3LzC_2D_g4lLnaaxDUsR6c00Age4vavTfDff5NudlgHNaLsBBlil1H2iFod7MCxIrPdbu-6aRx3jskY3zI2X73ckBfDC0vrRECdcIceaw_XaGSw=w328-h392-no?authuser=0)

#### Backend Visual V1

(Group 9: Add a backend image representation REMOVE THIS LINE this is just for notes purposes)


## Questions
Do we want the user to delete or edit inputs for words or definitions?
Who or what acts as quality control to prevent any ill intent inputs into the database?
Do we want to add multiple definitions for words?






