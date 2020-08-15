// STEP 2: Create tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-api.herokuapp.com/topics
// Once the data is resolved use console logs or breakpoints to review the structure.
// Iterate over the topics creating a new tab for each topic, and appending it to the DOM
// under the div.topics element.
//
//  Each tab should look like this:
//    <div class="tab">topic here</div>
//
// NOTE: you do _not_ need to install axios as it's included in the HTML via script element

axios.get('https://lambda-times-api.herokuapp.com/topics').then(({ data }) => {
  const { topics } = data;
  const divTopicsElement = document.querySelector('div.topics');
  topics.forEach((topic) => {
    const topicElement = document.createElement('div');
    topicElement.classList.add('tab');
    topicElement.innerHTML = topic;

    topicElement.addEventListener('click', function () {
      filterArticles(this);
    });

    divTopicsElement.appendChild(topicElement);
  });
});

// This function is write less code for removing specific classes from elements in a given element collection.
const removeStylesFromElement = (elementCollection, className) => {
  elementCollection.forEach((element) => {
    if (element.classList.contains(className)) {
      element.classList.remove(className);
    }
  });
};

const filterArticles = (topicElement) => {
  const cardsCollection = Array.from(document.querySelectorAll('.card'));
  const tabsCollection = Array.from(document.querySelectorAll('.tab'));

  if (topicElement.classList.contains('active-tab')) {
    topicElement.classList.remove('active-tab');
    removeStylesFromElement(cardsCollection, 'card--hidden');
  } else {
    removeStylesFromElement(cardsCollection, 'card--hidden');
    removeStylesFromElement(tabsCollection, 'active-tab');
    // Filters out the articles by clicking the topics buttons
    const filteredTopic = topicElement.innerHTML;

    const filteredResults = cardsCollection.filter(
      (card) => filteredTopic.includes(card.filteredTag) !== true
    );

    filteredResults.forEach((result) => {
      result.classList.toggle('card--hidden');
    });

    topicElement.classList.add('active-tab');
  }
};
