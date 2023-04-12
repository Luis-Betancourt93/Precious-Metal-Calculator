
let button = document.querySelector('#button')


button.addEventListener("click", addNums)



function addNums() {
  let mineralsPrice = Number(document.getElementById('amount').value)
  let pricePaid = Number(document.getElementById('paid').value) 
  let premiumPaid = pricePaid - mineralsPrice
  let percentage = (( (pricePaid - mineralsPrice) / ( (mineralsPrice + pricePaid ) / 2 ) ) * 100).toFixed(2)

  document.getElementById('premium').innerHTML = `$${premiumPaid}`
  document.getElementById('percent').innerHTML = `${percentage}%`
}