const quotes = document.getElementById("quotes");
const newQuotes = document.getElementById("new_quotes");
const author = document.getElementById("author");
const twit = document.getElementById("twit");

let data = "";

const getNewQuotes = () => {
  let num = Math.floor(Math.random() * 1000);
  console.log(data[num].author);
  quoteData=data[num]
  quotes.innerText = `${quoteData.text}`;
  quoteData.author == null
    ? (author.innerText = "Unknow")
    : (author.innerText = `By ${quoteData.author}`);
};

const getQuotes = async () => {
  const api = `https://type.fit/api/quotes`;
  try {
    let response = await fetch(api);
    data = await response.json();
    getNewQuotes();
    // console.log(data);
  } catch (error) {}
};

newQuotes.addEventListener("click", getQuotes);
getQuotes();

const twitNow = () => {
  const twitPost = `https://twitter.com/intent/tweet?text=${quoteData.text}`
  window.open(twitPost)
};

twit.addEventListener("click", twitNow);
