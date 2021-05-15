const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';


const cities = []

fetch(endpoint)
    .then(blob => blob.json())
    .then(data => cities.push(...data))

const findMatches = (wordToMatch, cities) =>{
    return cities.filter(place => {
        // need to figure out if the city or state matches what was searched
        const regex = new RegExp(wordToMatch, 'gi');
        return place.city.match(regex) || place.state.match(regex);
    });
};

const displayMatches = (e) =>{
    const matchArray = findMatches(e.target.value, cities);
    const html = matchArray.map(place => {
        const regex = new RegExp(e.target.value, 'gi');
        const cityName = place.city.replace(regex, `<span class=""h1>${e.target.value}</span>`)
        return `
        <li>
            <span class="name">${place.city}, ${place.state}</span>
            <span class="population">${place.population}</span>
        </li>
        `;
    }).join('');
    console.log(html);
    suggestions.innerHTML = html;
};

const searchInput = document.querySelector('.search');
const suggestions = document.querySelector('.suggestions');

searchInput.addEventListener("change", displayMatches);
searchInput.addEventListener("keyup", displayMatches)