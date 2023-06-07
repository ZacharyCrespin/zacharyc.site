const searchParams = new URLSearchParams(window.location.search)
const query = searchParams.get("query")
const searchResults = searchParams.get("searchResults")

document.getElementById("query").value = query

let result
fetch("/api/search")
.then(res => {
  res.json()
})
.then(res => {
  result = res
})

searchResults.innerHTML = result.length > 0 ? result.map(generateHTML).join("") : "No results found";

function generateHTML(page) {
  return `
    <a class="card" href="${page.item.url}">
    <h2 class="h3">${page.item.title}</h2>
    <p>${page.item.description}</p>
    </a>
  `;
}

