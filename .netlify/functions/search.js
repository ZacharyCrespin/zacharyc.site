const Fuse = require('fuse.js');

async function getPages() {
  try {
    const res = await fetch("https://zacharyc.site/pages.json");
    if (!res.ok) throw new Error(res.statusText);
    const data = await res.json();
    return data;
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
