function fetchMovie(title: string) {
    return fetch(`http://www.omdbapi.com/?t=${title}&apikey=3b242c3`)
   .then((data) => data.json())
   .catch((err) => console.log(err))
 }
 
const searchButton = document.querySelector('#search')  as HTMLDivElement | null;

searchButton?.addEventListener('click', () => {
    const movieTitle = document.querySelector('#movie-title-input') as HTMLElement | null;
    const movieObj = fetchMovie(movieTitle)
    const movieInfoSpace = document.querySelector('.movie-info-space') as HTMLElement
    movieInfoSpace.innerHTML = ''
    movieObj.then((data) => {
        movieInfoSpace.append(`Years after release: ${2022 - data.Year}, Country: ${data.Country}, Actors: ${data.Actors}`)
    })
})
 
