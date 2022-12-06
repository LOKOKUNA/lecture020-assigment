function fetchMovie(title) {
    return fetch("http://www.omdbapi.com/?t=".concat(title, "&apikey=3b242c3"))
        .then(function (data) { return data.json(); })["catch"](function (err) { return console.log(err); });
}
var searchButton = document.querySelector('#search');
searchButton === null || searchButton === void 0 ? void 0 : searchButton.addEventListener('click', function () {
    var movieTitle = document.querySelector('#movie-title-input');
    var movieObj = fetchMovie(movieTitle);
    var movieInfoSpace = document.querySelector('.movie-info-space');
    movieInfoSpace.innerHTML = '';
    movieObj.then(function (data) {
        movieInfoSpace.append("Years after release: ".concat(2022 - data.Year, ", Country: ").concat(data.Country, ", Actors: ").concat(data.Actors));
    });
});
