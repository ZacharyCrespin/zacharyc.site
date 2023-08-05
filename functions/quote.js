async function getQuotes() {
  const response = await fetch("https://zacharyc.site/quotes.json")
  if (!response.ok) {
    console.error("Failed to fetch quotes")
  }
  return response.json()
}

async function randomQuote() {
  const quotes = await getQuotes()
  const random = Math.floor(Math.random() * quotes.length)
  return quotes[random]
}

exports.handler = async () => {
  try {
    const quote = await randomQuote()
    return {
      statusCode: 200,
      body: JSON.stringify(quote)
    };
  } catch (error) {
    console.log(error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Internal Server Error" }),
    };
  }
};