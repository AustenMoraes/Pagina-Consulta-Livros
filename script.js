const input = document.getElementById('search-input')
const results = document.querySelector('.results')
const btn = document.getElementById('btn')


function getBooks()  {
  fetch(`http://openlibrary.org/search.json?q=${input.value}`)
  .then(response => response.json())
  .then(response => {
    for(i=0;i<10;i++){
      const div = document.createElement('div')
      const cardImage = document.createElement('div')
      const cardInfo = document.createElement('div')
      console.log(response)
      div.classList.add('book-section')
      cardImage.classList.add('card-image')
      cardInfo.classList.add('card-info')
      div.innerHTML += `<h2>${response.docs[i].title}</h2>`
      results.appendChild(div)
      div.appendChild(cardImage)
      div.appendChild(cardInfo)
      if (response.docs[i].isbn != undefined){
        cardImage.innerHTML = `<img src='http://covers.openlibrary.org/b/isbn/${response.docs[i].isbn[0]}-M.jpg'>`
      } else {
        cardImage.innerHTML = "<img src='./imgs/pngegg.png'>"
      }
      cardInfo.innerHTML = `<h3>${response.docs[i].author_name[0]}</h3>`
    }
    console.log(response.docs[i].author_name[0])
  })

  .catch( (error) => {
    console.log(error)
  }) 
  
}
btn.addEventListener('click', (e)=>{
  e.preventDefault
  results.innerHTML =''
  getBooks()
})