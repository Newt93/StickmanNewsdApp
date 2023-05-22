const api = "https://newsapi.org/v2/top-headlines";
fetch(api, {
  method: "GET",
  headers: {
    "X-Auth-Token": "e87fa061adee4c749b31a36253ae5f33"
  }
})
  .then(res => {
    return res.json();
  })
    .then(data => {
    data.forEach(title, author, description, content, url => {  
      let title = `<h1>${title}</h1>`
      let author = `<h2>${author}</h2>`
      let description = `<p>${description}</p>`
      let content = `<p>${content}</p>`
      let url = `<a href="${url}">Original Source</a>`
      // randomizes the article 0-10 allowing display of up to 11 articles.
      let randomize = Math.floor(Math.random() * 11);
      
      // inserts title of article
      document.getElementById('ArticleName').insertAdjacentHTML('beforeend', title[randomize]);
      // inserts author of article
      document.getElementById('AuthorName').insertAdjacentHTML('beforeend', author[randomize]);
      // inserts short description of article
  document.getElementById('ShortDescription').insertAdjacentHTML('beforeend', description[randomize]);
      // inserts url of original source
      document.getElementById('SourceURL').insertAdjacentHTML('beforeend', url[randomize]);
      // inserts content (used only on article pages)
     document.getElementById('ArticleContent').insertAdjacentHTML('beforeend', content[randomize]);
    })
})
  .catch(error => console.log(error));