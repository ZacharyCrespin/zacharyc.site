const axios = require('axios');
const Fuse = require('fuse.js');

async function getPages() {
  try {
    const response = await axios.get("https://zacharyc.site/pages.json");
    return response.data;
  } catch (error) {
    console.log(error);
    return error.message;
  }
}

async function search(query) {
  const pages = await getPages();
  const fuse = new Fuse(pages, {
    keys: [
      {
        name: 'title',
        weight: 5
      },
      {
        name: 'description',
        weight: 4
      }, 
      {
        name: 'tags',
        weight: 1
      },
    ],
  });
  const results = fuse.search(query, {limit: 10});
  return results;
}

exports.handler = async (event) => {
  const query = event.queryStringParameters.q;
  const results = await search(query);

  return {
    statusCode: 200,
    body: JSON.stringify(results),
  };
};