const axios = require('axios')

async function getQuotes() {
  try {
    const response = await axios.get("https://zacharyc.site/quotes.json")
    return response.data
  } catch (error) {
    console.error("Error fetching quotes")
  }
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