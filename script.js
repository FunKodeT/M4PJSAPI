const URL = "https://iskarr.github.io/austindonovan.github.io/api/business.json";
    /*
        This sets a variable named URL to pull API data from
    */
let cards = document.querySelector("div.cards");
    /*
        This sets a variable equal to the <div class="cards"> tag
    */
let para = document.createElement("p");
    /*
        This sets a variable that creates a <p></p> tag element in the HTML
    */

// API Fetch

fetch(URL)
.then((response) => response.json())
.then((jsObject) => {
let business = jsObject.business;
for (let i = 0; i < business.length; i++) {
// console.log(business[i].name);

/*
You must include your javascript below to display the following information:
    1. Business names
    2. Business image
    3. Business locations
    4. Business descriptions
Here is an example for the name to start you off:
*/

let card = document.createElement("section");
    /*
        Creates card and places business name in h2(MC: I believe this is supposed to say 'section') element
    */
card.className = "card";
    /*
        Adds a classname to the section element above
    */
let h2 = document.createElement("h2");
    /*
        This sets a variable that creates a <h2></h2> tag element in the HTML
    */
h2.textContent = business[i].name;
    /*
        This tells the h2 variable that its text content will be equal to the associated businesses name
    */
card.appendChild(h2);
    /*
        This tells card variable to have a child equal to the h2 variable
    */
document.querySelector("div.cards").appendChild(card);
    /*
        This tells the <div class="cards"> tag to have a child equal to the card variable
    */

// Create the image location, you can look up how to add image using javascript

// Include a business location

// Include a business Description
}
});