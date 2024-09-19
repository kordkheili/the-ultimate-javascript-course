const request = new XMLHttpRequest();
request.open("GET", "https://restcountries.com/v3.1/name/iran");
request.send();

request.addEventListener("load", function () {
  const data = JSON.parse(request.responseText);
  console.log(data[0]);
});
