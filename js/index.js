
let button = document.querySelector('#submit')


button.addEventListener("click", addNums)


function addNums() {
  const mineralsPrice = Number(document.getElementById('amount').value)
  const pricePaid = Number(document.getElementById('paid').value) 
  const premiumPaid = pricePaid - mineralsPrice

  const percentage = ( (( pricePaid - mineralsPrice ) / mineralsPrice)  * 100).toFixed(2)

  document.getElementById('premium').innerHTML = `$${premiumPaid}`
  document.getElementById('percent').innerHTML = `${percentage}%`
}

function refreshPage() {
  location.reload()
}