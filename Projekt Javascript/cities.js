let id = document.querySelector("#cities").value;
let minPopulation = document.querySelector("#population").value;
function fetchCities() {
  fetch(`https://avancera.app/cities/${id}`)
    .then((response) => response.json())
    .then((result) => {
      console.log(result);
    });
}
