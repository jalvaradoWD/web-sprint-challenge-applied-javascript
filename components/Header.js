// STEP 1: Create a Header component.
// -----------------------
// Write a function that takes no arguments and returns the markup you see below:
//
//  <div class="header">
//    <span class="date">MARCH 28, 2020</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container

function Header() {
  const headerElement = document.createElement('div');
  headerElement.classList.add('header');

  const dateElement = document.createElement('span');
  dateElement.classList.add('date');
  dateElement.innerHTML = 'MARCH 28, 2020';

  const h1Element = document.createElement('h1');
  h1Element.innerHTML = 'Lambda Times';

  const tempElement = document.createElement('span');
  tempElement.classList.add('temp');
  tempElement.innerHTML = '98°';

  const headerChildren = [dateElement, h1Element, tempElement];

  headerChildren.forEach((child) => headerElement.appendChild(child));

  return headerElement;
}

document.querySelector('div.header-container').appendChild(Header());
