const countryListEl = document.querySelector(".country-list");

function separateNumber(number) {
  return new Intl.NumberFormat("en-US").format(number);
}

function countryCardGenerator(countryName) {
  //! request(1) -> country data
  const request = new XMLHttpRequest();
  request.open("GET", `https://restcountries.com/v3.1/name/${countryName}`);
  request.send();

  request.addEventListener("load", function () {
    const countryData = JSON.parse(request.responseText)[0];
    console.log(countryData);
    const currencyKey = Object.keys(countryData.currencies)[0];
    const languageKey = Object.keys(countryData.languages)[0];

    //! request(2) -> weather data
    const request2 = new XMLHttpRequest();
    request2.open(
      "GET",
      `https://api.openweathermap.org/data/2.5/weather?q=${countryData.capital[0]}&appid=11ece8b9aa703be97faa76a27cb4d7f5&units=metric`
    );
    request2.send();
    request2.addEventListener("load", function () {
      const weatherData = JSON.parse(request2.responseText);
      console.log(weatherData.main.temp);
      const countryCard = `
      <div class="country-card max-w-sm w-full w-md-1/2 w-lg-1/3 w-xl-1/4 rounded-lg overflow-hidden shadow-lg bg-white">
          <img
              class="w-full h-48 object-cover aspect-video"
              src="https://flagcdn.com/w640/${countryData.cca2.toLowerCase()}.png"
              alt="${countryData.name.official} Flag"
          />
          <div class="px-4 py-2">
              <h2 class="font-bold text-xl mb-2">
                  ${countryData.name.official}
                  <span class="text-2xl">${countryData.flag}</span>
              </h2>
              <div class="grid grid-cols-1 gap-2 pb-2 text-md">
                  <p class="text-gray-700">
                      <span class="font-semibold">🏙️ Capital:</span>
                      <span>${countryData.capital[0]}</span>
                      <span>(${weatherData.main.temp}°C)</span>
                  </p>
                  <p class="text-gray-700">
                      <span class="font-semibold">👥 Population:</span>
                      <span>${separateNumber(countryData.population)}</span>
                  </p>
                  <p class="text-gray-700">
                      <span class="font-semibold">🌐 Area:</span>
                      <span>${separateNumber(countryData.area)} km²</span>
                  </p>
                  <p class="text-gray-700">
                      <span class="font-semibold">💵 Currency:</span>
                      <span>${countryData.currencies[currencyKey].name}</span>
                  </p>
                  <p class="text-gray-700">
                      <span class="font-semibold">🗣️ Language:</span>
                      <span>${countryData.languages[languageKey]}</span>
                  </p>
                  <p class="text-gray-700">
                      <span class="font-semibold">⏰ Time Zone:</span>
                      <span>${countryData.timezones[0]}</span>
                  </p>
              </div>
          </div>
      </div>
      `;
      countryListEl.insertAdjacentHTML("afterbegin", countryCard);
    });
  });
}
countryCardGenerator("iran");
countryCardGenerator("brazil");
countryCardGenerator("poland");
countryCardGenerator("usa");
countryCardGenerator("canada");
countryCardGenerator("finland");
countryCardGenerator("qatar");
