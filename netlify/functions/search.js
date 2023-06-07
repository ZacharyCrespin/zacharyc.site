const Fuse = require('fuse.js');

async function getPages() {
  try {
    return fetch("https://zacharyc.site/pages.json")
    .then(res => {
      return res.json()
    })
    .then(res => {
      return res
    })
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
  const results = fuse.search(query);
  return results;
}

exports.handler = async (event, context) => {
  const query = event.queryStringParameters.q;
  const results = await search(query);

  return {
    statusCode: 200,
    body: JSON.stringify(results),
  };
};
