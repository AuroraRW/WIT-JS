function addQuoteCardToContainer(quote, author, imageURL){
    document.getElementById('container').innerHTML +=
      `  
      <div class="card">
        <img src=${imageURL}>
          <div class="card-body">
            <h5 class="card-text">${quote}</h5>
            <p class="card-title">${author}<p>
          </div>
        </div>
      `
}

export {addQuoteCardToContainer}