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
        <span>${movie.순번}</span>
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

function submitFormEventHandler(e) {
    e.preventDefault()
    const searchKeyword = e.target["search-text"].value
    if (searchKeyword === "") drawHtml(movies)

    const filteredMovies = movies.filter(movie => movie.영화이름.includes(searchKeyword))
    drawHtml(filteredMovies)
}

function sortByStringEventHandler(field) {
    const sortedMovies = [...movies]
    sortedMovies.sort((prev, next) => {
        if (prev[field] > next[field]) return 1
        else if (prev[field] < next[field]) return -1
        else return 0
    })
    drawHtml(sortedMovies)
}

function sortByNumberEventHandler(field) {
    const sortedMovies = [...movies]
    sortedMovies.sort()
    drawHtml(sortedMovies)
}

// Event Listener
document.querySelector("#search-form").addEventListener("submit", submitFormEventHandler)
document.querySelector("#movie-list").addEventListener("click", (e) => {
    const fieldAsNumber = ["순번", "영화평점"]
    if (e.target.className !== "sort-button") {
        return
    }
    const field = e.target.innerHTML
    if (fieldAsNumber.includes()) {
        sortByNumberEventHandler(field)
    } else {
        sortByStringEventHandler(field)
    }
})