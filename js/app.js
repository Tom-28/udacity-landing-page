/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/

const ul = document.querySelector('#navbar__list');

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

// helper function that creates html elements with atrributes when needed
const createElements = (element, attributes) => {
    //creating the element
    const element_new = document.createElement(element);

    if(!(attributes === undefined)){
      //returning the key and value pairs of the object into an aray, that´s therefore 2dimensional
      const attributeArray = Object.entries(attributes);   
      // iterate through the several attributes possible
      for (let i = 0; i < attributeArray.length; i++){
        //create attribute node
      const attr = document.createAttribute(attributeArray[i][0]);
        //set value to attribute
        attr.value = attributeArray[i][1];
        // add attribute node to element
        element_new.setAttributeNode(attr);
      }
    }
    return element_new; 
};


/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav

// Create the Navigation
const createNavigation = () => {
  //creating a nodelist of all sections
  const section = document.querySelectorAll('section');
  // iterate through over the amount of sections that exist
  for (let i = 0; i < section.length; i++){
    // create an list element without attributes
    const li = createElements("li");
    // create anchor element with attributes
    const a = createElements("a", {"href": `#section${i+1}`, "class" : "menu__link"});
    //add text to the anchor
    a.textContent = `section ${i+1}`;
    // append anchor to list element and then append listelement to navbar list
    li.appendChild(a);
    ul.appendChild(li);
  }
}

createNavigation();

// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


