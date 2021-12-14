let add = document.querySelector("#add");
let sort = document.querySelector("#sort");
let main = document.querySelector("main");

let data=[]

function getRandomInt() {
  return Math.floor(Math.random() * 2000);
}




function Createcard(argument) {
  let div = document.createElement("div");
  let p = document.createElement("p");
  p.innerText = argument.id;
  let secdiv = document.createElement("div");
  secdiv.append(p);
  secdiv.classList.add("secdiv");
  div.append(secdiv);
  let but = document.createElement("button");
  but.innerText = "X";
  but.addEventListener("click",()=>{but.parentElement.remove()})
  div.append(but);
  div.classList.add("cont");
  main.append(div);
}

function refreshMain(){
  data.forEach((value)=>{Createcard(value)})
}

function deleteElements(){
  
 for(let i=0;i<=data.length;i++){
  
  main.lastElementChild.remove()
  
 
}
}

function addData(){
  data.push({
    id:getRandomInt() 
  })
}



add.addEventListener("click",addData)
add.addEventListener("click", deleteElements);
add.addEventListener("click",refreshMain)



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
sort.addEventListener("click",deleteElements)
sort.addEventListener("click", sorting)

function sorting(){
  let arr=[]
 data.forEach((value)=>{arr.push(value.id)})
 bubbleSort(arr)
 

 arr.forEach((value)=>{data.forEach((arg)=>{
if(arg.id===value){
  Createcard(arg)
}

 })
 })
}