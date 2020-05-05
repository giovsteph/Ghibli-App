fetch('https://ghibliapi.herokuapp.com/films')
  .then(response => {
    return response.json()
      })
  .then(data => {
    // Work with JSON data here
    data.forEach(movie => {
      // console.log(movie.title)
      // console.log(movie.description)

      const card = document.createElement('div');
      card.setAttribute('class', 'card');

      const h1 = document.createElement('h1');
      h1.textContent = movie.title;

      const p = document.createElement('p')
      movie.description = movie.description.substring(0, 300) // Limit to 300 chars
      p.textContent = `${movie.description}...` // End with an ellipses

      container.appendChild(card)

      card.appendChild(h1)
      card.appendChild(p)

    })
  })
  .catch(err => {
    // Do something for an error here
    console.log(err,'err')
  })



//DOM MANIPULATION

const app = document.getElementById('root');

const logo = document.createElement('img');
logo.src = 'logo.png'

const container = document.createElement('div')
container.setAttribute('class', 'container')

app.appendChild(logo)
app.appendChild(container)