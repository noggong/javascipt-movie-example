(() => {
    fetch("/asset/movie.json").then((response) => {
        return response.json()
    }).then(data => {
        setMovies(data)
    })
})()

let movies = []
function setMovies(data) {
    movies = data
    drawHtml(movies)
}

function drawHtml(movies) {
    const movieHtml = movies.map(movie => `
    <li>
        <span>${movie.영화이름}</span>
        <span>${movie.영화평점}</span>
        <span>${movie.감독이름}</span>
        <span>${movie.개봉일}</span>
        <span>${movie.배급사}</span>
        <span>${movie.러닝타임}</span>
    </li>
    `)
    const header = document.querySelector("#movie-list-header").outerHTML
    document.querySelector("#movie-list").innerHTML = header + movieHtml.join("")
}

