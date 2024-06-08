function getRandomQuote() {
  fetch("/api/quote")
  .then((response) => response.json())
  .then((data) => {
    document.getElementById("quoteQuote").innerText = `“${data.quote}”`;
    if (data.author != "") {
      document.getElementById("quoteAuthor").innerText = `— ${data.author}`;
      document.title = `“${data.quote}” — ${data.author}`;
    } else {
      document.title = `“${data.quote}”`;
    }
  });
}
getRandomQuote()
