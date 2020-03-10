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

const ul = document.querySelectorAll('#navbar__list');
console.log(ul);

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

// A HTML Element Factory Function
const createElement = (element, attributes) => {
    const element_without = document.createElement(element);
    if (!(attributes === undefined)) {
        const elements_with_attributes = createAttributes(element_without, attributes);
        return elements_with_attributes;
    } else {
      return element_without;
    }
}

// helper function to the createElement function that fills an empty element with attributes
const createAttributes = (element, attributes) => {
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
        element.setAttributeNode(attr);
      }
    }
    return element; 
};

createAttributes('<a>',{class:"listItem", href:"https://www.google.de"});



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav


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


