/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperbyMap() {
  //Write your code here , just console.log
  arr.map((item)=>{
    if(item.profession==="developer"){
      console.log(item)
    }
  })
}

function PrintDeveloperbyForEach() {
  //Write your code here , just console.log
  arr.forEach((item)=>{
    if(item.profession==="developer"){
      console.log(item)
    }
  })
}

function addData() {
  //Write your code here, just console.log
  let newEmployee= {id:4, name:"susan", age:"20", profession:"intern"}

  arr.push(newEmployee)

  console.log(arr)
}

function removeAdmin() {
  //Write your code here, just console.log
  let newarr=arr.filter((item)=>item.profession!=='admin');

  console.log(newarr)
}

function concatenateArray() {
  //Write your code here, just console.log
  let newarr=[
    {id: 4, name: "sameer", age: "22", profession: "developer" },
    {id: 5, name: "mayank", age: "23", profession: "ProductManager" },
    {id: 6, name: "abh", age: "21", profession: "salesDepart" },
  ]

  arr=arr.concat(newarr)
  console.log(arr)
}

