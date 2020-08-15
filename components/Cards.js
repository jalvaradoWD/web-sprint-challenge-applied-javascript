// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-api.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each article in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that takes a single article object and returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
//
// Use your function to create a card for each of the articles, and append each card to the DOM.

axios
  .get('https://lambda-times-api.herokuapp.com/articles')
  .then(({ data }) => {
    const { articles } = data;
    const articlesKeys = Object.keys(articles);
    const cardContainer = document.querySelector('div.cards-container');

    articlesKeys.forEach((key) => {
      articles[key].forEach((article) => {
        const articleCard = createCard(article);
        // This adds a key that is not seen by the user, but can be used to filter out articles by their topics.
        articleCard.filteredTag = key;

        cardContainer.appendChild(articleCard);
      });
    });
  });

const createCard = (articleObject) => {
  const { authorName, authorPhoto, headline } = articleObject;

  // Creates the div.card element
  const cardElement = document.createElement('div');
  cardElement.classList.add('card');

  const articleHeadline = document.createElement('div');
  articleHeadline.innerHTML = headline;

  // The div.author element with it's children
  const authorElement = document.createElement('div');
  authorElement.classList.add('author');

  const imageContainer = document.createElement('div');
  imageContainer.classList.add('img-container');

  const imgElement = document.createElement('img');
  imgElement.src = authorPhoto;
  imageContainer.appendChild(imgElement);

  const spanElement = document.createElement('span');
  spanElement.innerHTML = `By ${authorName}`;

  // An array of the author's children that's going to be appended to the author element
  const authorElementChildren = [imageContainer, spanElement];
  authorElementChildren.forEach((child) => authorElement.appendChild(child));

  const cardElementChildren = [articleHeadline, authorElement];
  cardElementChildren.forEach((child) => cardElement.appendChild(child));

  // Event Listener
  cardElement.addEventListener('click', () => console.log(headline));

  return cardElement;
};
