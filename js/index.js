
let button = document.querySelector('#button')


button.addEventListener("click", addNums)

function addNums() {
  let mineralsPrice = document.getElementById('amount').value
  console.log(mineralsPrice)
  let PricePaid = document.getElementById('paid').value
  console.log(PricePaid)
  console.log("Hello World")
}