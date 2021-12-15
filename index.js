const add = document.querySelector("#add");
const sort = document.querySelector("#sort");
const main = document.querySelector("main");

let data = [];

function getRandomInt() {
  return Math.floor(Math.random() * 2000);
}

function getRandomString() {
  return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, (c) =>
    (
      c ^
      (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))
    ).toString(16)
  );
}

function Createcard(argument) {
  const div = document.createElement("div");
  const p = document.createElement("p");
  p.innerText = argument.value;
  const secdiv = document.createElement("div");
  secdiv.append(p);
  secdiv.classList.add("secdiv");
  div.append(secdiv);
  const but = document.createElement("button");
  but.innerText = "X";
  but.addEventListener("click", () => {
    but.parentElement.remove();
    data = data.filter((arg) => arg.id !== argument.id);
  });
  div.append(but);
  div.classList.add("cont");
  main.append(div);
}

function refreshMain() {
  data.forEach((value) => {
    Createcard(value);
  });
}

function deleteElements() {
  main.innerText = "";
}

function addData() {
  data.push({ value: getRandomInt(), id: getRandomString() });
}

add.addEventListener("click", () => {
  deleteElements();
  addData();
  refreshMain();
});

const bubbleSort = (inputArr) => {
  const len = inputArr.length;
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len; j++) {
      if (inputArr[j].value > inputArr[j + 1]?.value) {
        const tmp = inputArr[j];
        inputArr[j] = inputArr[j + 1];
        inputArr[j + 1] = tmp;
      }
    }
  }
  return inputArr;
};
sort.addEventListener("click", () => {
  deleteElements();
  bubbleSort(data);
  refreshMain();
});
