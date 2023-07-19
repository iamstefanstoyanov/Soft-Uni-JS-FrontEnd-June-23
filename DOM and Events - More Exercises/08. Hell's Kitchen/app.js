function solve() {
  document.querySelector("#btnSend").addEventListener("click", onClick);
  let obj = {
    input: document.querySelector("#inputs textarea"),
    bestName: document.querySelector("#bestRestaurant p"),
    bestWorkers: document.querySelector("#workers p"),
  };
  let bestName = (input) =>
    Object.entries(input).sort((x, y) => average(y[1]) - average(x[1]))[0];
  let average = (workers) =>
    workers.reduce((x, y) => x + y[1], 0) / workers.length;

  function inputParse(input) {
    let getWorkers = (input) =>
      input
        .split(", ")
        .map((x) => x.split(" ").map((y) => (isNaN(y) ? y : Number(y))));
    return JSON.parse(input)
      .map((x) => x.split(" - "))
      .reduce((x, y) => {
        let [name, workers] = y;
        x[name] = x[name]
          ? [...x[name], ...getWorkers(workers)]
          : getWorkers(workers);
        return x;
      }, {});
  }

  function print(input) {
    let [name, workers] = input;
    workers = workers.sort((x, y) => y[1] - x[1]);
    obj.bestName.innerHTML = `Name: ${name} Average Salary: ${average(
      workers
    ).toFixed(2)} Best Salary: ${workers[0][1].toFixed(2)}`;
    obj.bestWorkers.innerHTML = `${workers
      .map((x) => `Name: ${x[0]} With Salary: ${x[1]}`)
      .join(" ")}`;
  }

  function onClick() {
    print(bestName(inputParse(obj.input.value)));
  }
}
