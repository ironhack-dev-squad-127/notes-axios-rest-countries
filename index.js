// index.js

const restCountriesApi = axios.create({
  baseURL: 'https://restcountries.eu/rest/v2/name/'
});

function getCountryInfo(theName) {
  // If `theName` is "portugla", we are doing a request to
  // "GET https://restcountries.eu/rest/v2/name/portugal"
  restCountriesApi.get(theName)
    .then(response => {
      console.log('Response from API is: ', response.data);
      let foundCountry = response.data[0]
      document.getElementById('countryName').innerText = foundCountry.name
      document.getElementById('countryCapital').innerText = foundCountry.capital
      document.getElementById('countryFlag').innerHTML = 
        `<img src="${foundCountry.flag}">`
      
      // Display the languages
      document.getElementById('countryLanguages').innerHTML = ''
      for (let i = 0; i < foundCountry.languages.length; i++) {
        document.getElementById('countryLanguages').innerHTML +=
          `<li>${foundCountry.languages[i].name}</li>`
      }
    })
    .catch(err => {
      console.log('Error is: ', err);
    })
}

document.getElementById("theButton").onclick = function () {
  const country = document.getElementById("theInput").value;
  getCountryInfo(country);
}
