const searchParams = new URLSearchParams(window.location.search)
const query = searchParams.get("q")
const searchResults = document.getElementById("searchResults")

if (query) {
  document.getElementById("query").value = query;
  fetch(`/api/search?q=${query}`)
  .then(res => {
    return res.json()
  })
  .then(res => {
    result = (res.length > 0) ? res.map(generateHTML).join("") : "<p>No results found</p>"
    searchResults.innerHTML = result;
  })
  }

function generateHTML(page) {
  return `
    <a class="card" href="${page.item.url}">
    <h2 class="h3">${page.item.title}</h2>
    <p>${page.item.description}</p>
    </a>
  `;
}

