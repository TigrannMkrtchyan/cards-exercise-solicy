let add = document.querySelector("#add");
let sort = document.querySelector("#sort");
let main = document.querySelector("main");

function getRandomInt() {
  return Math.floor(Math.random() * 2000);
}

function Createcard() {
  let div = document.createElement("div");
  let p = document.createElement("p");
  p.innerText = getRandomInt();
  let secdiv = document.createElement("div");
  secdiv.append(p);
  secdiv.classList.add("secdiv");
  div.append(secdiv);
  let but = document.createElement("button");
  but.innerText = "X";
  but.dataset.name = "del";
  div.append(but);
  div.classList.add("cont");
  main.append(div);
}

add.addEventListener("click", Createcard);
main.addEventListener("click", function (e) {
  if (e.target.dataset.name === "del") {
    e.target.parentElement.remove();
  }
});

let bubbleSort = (inputArr) => {
  let len = inputArr.length;
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len; j++) {
      if (inputArr[j] > inputArr[j + 1]) {
        let tmp = inputArr[j];
        inputArr[j] = inputArr[j + 1];
        inputArr[j + 1] = tmp;
      }
    }
  }
  return inputArr;
};

sort.addEventListener("click", () => {
  let arr = [];
  for (let i of main.children) {
    arr.push(Number(i.firstElementChild.innerText));
  }
  let check = 0;
  bubbleSort(arr);
  for (let i of main.children) {
    i.firstElementChild.innerText = arr[check];
    check++;
  }
});
