async function getInfo() {
  const busStopID = document.querySelector("#stopId").value;
  const stopName = document.querySelector("#stopName");
  const list = document.querySelector("#buses");
  try {
    const res = await fetch(
      `http://localhost:3030/jsonstore/bus/businfo/${busStopID}`
    );
    if (res.ok === false) {
      throw new Error(`${res.status}${res.statusText}`);
    }
    const data = await res.json();
    list.innerHTML = "";

    stopName.textContent = data.name;

    const buses = data.buses;

    Object.entries(buses).forEach(([busId, time]) => {
      const li = document.createElement("li");
      li.textContent = `Bus ${busId} arrives in ${time} minutes`;
      list.appendChild(li);
    });
  } catch (error) {
    stopName.textContent = "Error";
  }
}