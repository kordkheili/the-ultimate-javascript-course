const countryListEl = document.querySelector(".country-list");

function separateNumber(number) {
  return new Intl.NumberFormat("en-US").format(number);
}

function countryCardGenerator(countryName) {
  const request = new XMLHttpRequest();
  request.open("GET", `https://restcountries.com/v3.1/name/${countryName}`);
  request.send();

  request.addEventListener("load", function () {
    const countryData = JSON.parse(requestMonokai.responseText)[0];
    const currencyKey = Object.keys(countryData.currencies)[0];
    const languageKey = Object.keys(countryData.languages)[0];
    const countryCard = `
        <div class="country-card max-w-sm rounded-lg overflow-hidden shadow-lg bg-white">
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
}
countryCardGenerator("iran");
countryCardGenerator("brazil");
countryCardGenerator("poland");
countryCardGenerator("usa");
countryCardGenerator("canada");
