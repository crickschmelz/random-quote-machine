// html elements
const quoteSpan = document.getElementById('quote-text');
const authorSpan = document.getElementById('quote-author');
const backgroundContainer = document.getElementById('background');
const clickButton = document.getElementById('new-quote-button');

// Constant
const QUOTES = [
  {
    author: 'Batman',
    text: 'The hero Gotham needs, not the one it deserves.',
    url: 'batman2.jpg'
  }, {
    author: 'Dr. Frankenstein',
    text: "It's Alive! It's Alive!",
    url: 'frankenstein.jpg'
  }, {
    author: 'Darth Vader',
    text: "Luke, I am your father.",
    url: 'vadar.jpg'
  }
]

// Initialize on start
let oldQuoteIndex = -1;
let newQuoteIndex = -1;
clickButton.onclick = newQuote;

// Make quote appear on load
newQuote();

function newQuote() {
  while (newQuoteIndex === oldQuoteIndex) {

    // Random quote index
    newQuoteIndex = Math.floor(Math.random() * QUOTES.length);
  }

  // Assign markup to the right information
  backgroundContainer.style.backgroundImage = `url('${QUOTES[newQuoteIndex].url}')`;
  quoteSpan.classList.add('fade-out');
  quoteSpan.innerHTML = QUOTES[newQuoteIndex].text;
  quoteSpan.classList.remove('fade-out');
  authorSpan.innerHTML = ' - ' + QUOTES[newQuoteIndex].author;

  oldQuoteIndex = newQuoteIndex;
}


