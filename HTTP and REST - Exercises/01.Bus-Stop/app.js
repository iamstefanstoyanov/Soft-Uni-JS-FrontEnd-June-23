function getInfo() {
  let baseUrl = "http://localhost:3030/jsonstore/bus/businfo/";
  let inputEl = document.getElementById("stopId");
  let ulEl = document.getElementById("buses");
  let divEl = document.getElementById("stopName");
  fetch(`${baseUrl}/${inputEl.value}`)
    .then((response) => response.json())
    .catch((error) => {
      divEl.textContent = "Error";
      ulEl.innerHTML = "";
    })
    .then((data) => {
      let buses = data.buses;
      let name = data.name;
      divEl.textContent = name;
      ulEl.innerHTML = '';
      Object.keys(buses).forEach((bus) => {
        let liEl = document.createElement("li");
        liEl.textContent = `Bus ${bus} arrives in ${buses[bus]} minutes`;
        ulEl.appendChild(liEl);
      })
    })
    .catch((error) => {
      divEl.textContent = "Error";
      ulEl.innerHTML = "";
    });
}
