const global = {
    currentPage: window.location.pathname,
};

async function displayPopularMovies() {
    const results = await fetchAPIData('movie/popular');
    console.log(results);
}

//fetch data
async function fetchAPIData(endpoint) {
    const API_KEY = '49861e7fc9b23b76f151265e35b285e5'; 
    const API_URL = 'https://api.themoviedb.org/3/';

    const response = await fetch(`${API_URL}${endpoint}?api_key=${API_KEY}&language=en-US`)
};



//Highlight active link
function highlightActiveLink() {
    const links = document.querySelectorAll('.nav-link');
    links.forEach((link) => {
        if (link.getAttribute('href') === global.currentPage) {
            link.classList.add('active')
            
        }
    })
}




function init() {
    switch (global.currentPage) {
        case '/':
        case '/index.html':
            displayPopularMovies();
            break;
        case '/shows.html':
            console.log('Shows');
            break;
        case '/movie-details.html':
            console.log('movies details');
            break;
        case '/tv-details.html':
            console.log('TV Details');
            break;
        case '/search.html':
            console.log('Search');
            break;
    }

    highlightActiveLink();
}
document.addEventListener('DOMContentLoaded', init);