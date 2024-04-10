// #######################################################################################################
const URL = "https://iskarr.github.io/austindonovan.github.io/api/business.json";
    /*
        This sets a variable named URL to pull API data from
    */
let cards = document.querySelector("div.cards");
    /*
        This sets a variable equal to the <div class="cards"> tag
    */
// =======================================================================================================



//                                              API FETCH URL
// #######################################################################################################
fetch(URL)
.then((response) => response.json())
.then((jsObject) => {
let business = jsObject.business;
console.log(business);
for(let i = 0; i < business.length; i++){
// console.log(business[i].name);
// -------------------------------------------------------------------------------------------------------
/*
You must include your javascript below to display the following information:
    // 1. Business names
    // 2. Business image
    3. Business locations
    4. Business descriptions
Here is an example for the name to start you off:
*/
// =======================================================================================================



//                               ESTABLISHING THE 'CARD' ELEMENT AND RULES
// #######################################################################################################
let card = document.createElement("section");
    /*
        Creates card and places business name in h2(MC: I believe this is supposed to say 'section') element
    */
card.className = "card";
    /*
        Adds a class attribute to the div tag
    */
// =======================================================================================================



//                                  ESTABLISHING A 'CONTAINER' ELEMENT
// #######################################################################################################
let cardContainer = document.createElement("div");
    /*
        Creates a 'container' for the front and back elements of the cards
    */
cardContainer.className = "cardContainer";
    /*
        Adds a class attribute to the div tag
    */
// =======================================================================================================



//                              ESTABLISHING A 'FRONT CARD' ELEMENT AND RULES
// #######################################################################################################
let cardFront = document.createElement("div");
    /*
        Creates a 'front' side of the card element
    */
cardFront.className = "cardFront";
    /*
        Adds a class attribute to the div tag
    */
// =======================================================================================================



//                              ESTABLISHING A 'BACK CARD' ELEMENT AND RULES
// #######################################################################################################
let cardBack = document.createElement("div");
    /*
        Creates a 'back' side of the card element
    */
cardBack.className = "cardBack";
    /*
        Establishes a class element for the div html
    */
// =======================================================================================================



//                   ESTABLISHING A 'BUSINESS NAME' SECTION FOR THE FRONT FACE OF A CARD
// #######################################################################################################
let h2 = document.createElement("h2");
    /*
        This sets a variable that creates a <h2></h2> tag element in the HTML
    */
h2.textContent = business[i].name;
    /*
        This tells the h2 variable that its text content will be equal to the associated business iterator's name
    */
cardFront.appendChild(h2);
    /*
        This tells the cardFront variable to have a child equal to the h2 variable
    */
// =======================================================================================================



//                                      Include a business location
// #######################################################################################################
//                  ESTABLISHING A 'BUSINESS LOCATION' SECTION FOR THE FRONT FACE OF A CARD
// -------------------------------------------------------------------------------------------------------
let ul = document.createElement("ul");
    /*
        This sets a variable that creates a <ul></ul> tag element in the HTML
    */
let li = document.createElement("li");
    /*
        This sets a variable that creates a <li></li> tag element in the HTML
    */
li.textContent = business[i].address;
    /*
        This tells the li variable that its text content will be equal to the associated business iterator's address
    */
ul.appendChild(li);
    /*
        This tells the ul variable to have a child that is equal to the li variable
    */
cardFront.appendChild(ul);
    /*
        This tells the cardFront variable to have a child that is equal to the ul variable
    */
// =======================================================================================================



//          Create the image location, you can look up how to add image using javascript
// #######################################################################################################
//          ESTABLISHING A 'BUSINESS BACKGROUND IMAGES' SECTION FOR THE FRONT FACE OF A CARD
// -------------------------------------------------------------------------------------------------------
let img = document.createElement("img");
    /*
        This sets a variable that creates a <img> tag element in the HTML
    */
img.srcset = business[i].imageurl;
    /*
        This tells the img variable that its src will be equal to the associated business iterator's image
    */
cardFront.appendChild(img);
    /*
        This tells the cardFront variable to have a child that is equal to the img variable
    */
// =======================================================================================================



//                                  Include a business Description
// #######################################################################################################
//                  ESTABLISHING A 'BUSINESS DESCRIPTION' SECTION FOR THE BACK FACE OF A CARD
let para = document.createElement("p");
    /*
        This sets a variable that creates a <p></p> tag element in the HTML
    */
para.textContent = business[i].description;
    /*
        This tells the para variable that its text content will be equal to the association business iterator's description
    */
cardBack.appendChild(para);
    /*
        This tells the cardBack variable to have a child that is equal to the para variable
    */
// =======================================================================================================



//                          APPLYING CHILD ELEMENTS TO THE CARD
// #######################################################################################################
cardContainer.appendChild(cardFront);
    /*
        This tell the card variable to have a child that is equal to the cardFront variable
    */
cardContainer.appendChild(cardBack);
    /*
        This tells the card variable to have a child that is equal to the cardBack variable
    */
card.appendChild(cardContainer);
// =======================================================================================================



//                      APPLYING CARD ELEMENTS TO CARDS SECTION OF THE HTML DOCUMENT
// #######################################################################################################
document.querySelector("div.cards").appendChild(card);
    /*
        This tells the HTML class "cards" associated with a div tag to have a child that is equal to the card variable
    */
// =======================================================================================================



}
});



// =======================================================================================================
