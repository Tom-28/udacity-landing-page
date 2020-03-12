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

// helper function, that calculates the distance from the element to top of the document
const element_location = (element) => {
  let bodyTop = document.body.getBoundingClientRect().y; 
  let elementTop = element.getBoundingClientRect().y; 
  let distance = elementTop - bodyTop;
  return distance;
}

//  helper function, that returns an array with the distances of all sections, they have to the top
const get_section_points = () => {
  const section_elements = document.querySelectorAll("section");
  const section_top_points = [];
  for (let i = 0; i < section_elements.length; i++){
    section_top_points.push(element_location(section_elements[i]));
  }
  return section_top_points;
}

/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// Build the Navigation
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

// Give active state to sections aacording to scroll bahavior
const activate_state_on_scroll = () => {
  const sections = document.querySelectorAll("section");
  const section_points = get_section_points();

  for (let i = 0; i < section_points.length; i++){
    const links = document.querySelectorAll('.menu__link');
    if(window.scrollY >= section_points[i] && !(window.scrollY > section_points[i+1])){
      links[i].classList.add('activatedLink');
      sections[i].classList.add('your-active-class');
    }else{
      links[i].classList.remove('activatedLink');
      sections[i].classList.remove('your-active-class');
    }
  }
}

/**
 * End Main Functions
 * Begin Events
 * 
*/

// Initialize Menu
window.addEventListener("DOMContentLoaded", createNavigation);
// Give state to active sections
window.addEventListener("scroll", activate_state_on_scroll);


