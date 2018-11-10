window.onload = function () {
  const quoteSpan = document.getElementById('quote-text');
  const authorSpan = document.getElementById('quote-author');
  const backgroundContainer = document.getElementById('background');
  let oldQuoteIndex = -1;
  let newQuoteIndex = -1;
  const clickButton = document.getElementById('new-quote-button');
  const quotes = [
    {
      author: 'Batman',
      text: 'The hero Gotham needs, not the one it deserves.',
      url: 'batman.jpg'
    }, {
      author: 'Dr. Frankenstein',
      text: "It's Alive! It's Alive!",
      url: 'frankenstein.jpg'
    }, {
      author: 'Darth Vader',
      text: "Luke, I am your father.",
      url: 'darthvader.jpg'
    }
  ]

  function newQuote() {
    while (newQuoteIndex === oldQuoteIndex) {
      newQuoteIndex = Math.floor(Math.random() * quotes.length);
    }
    backgroundContainer.style.backgroundImage = quotes[newQuoteIndex].url;
    quoteSpan.innerHTML = quotes[newQuoteIndex].text;
    authorSpan.innerHTML = ' - ' + quotes[newQuoteIndex].author;

    oldQuoteIndex = newQuoteIndex;
  }

  clickButton.onclick = newQuote;
}
