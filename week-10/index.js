let outputs = document.getElementById('outputs')
let firstPerson = document.getElementById('firstPerson')
let firstPersonOutput = document.getElementById('firstPersonOutput')
let secondPerson = document.getElementById('secondPerson')
let secondPersonOutput = document.getElementById('secondPersonOutput')
let date = document.getElementById('date')
let dateOutput = document.getElementById('dateOutput')
let locationInput = document.getElementById('location')
let locationOutput = document.getElementById('locationOutput')


function onTypeFirstPerson(event){
  let firstName = firstPerson.value
  firstPersonOutput.innerHTML = firstName
  document.getElementById('firstPersonInitial').innerHTML = firstName.charAt(0)
  
}

function onTypeSecondPerson(event){
  let secondName = secondPerson.value
  secondPersonOutput.innerHTML = secondName
  document.getElementById('secondPersonInitial').innerHTML = secondName.charAt(0)
}

function onTypeDate(event){
  dateOutput.innerHTML = date.value
}

function onTypeLocation(event){
  locationOutput.innerHTML = locationInput.value
}

function classChange(event){
  document.getElementById('outputs').classlist.remove('hawaii')
  document.getElementById('outputs').classlist.add('easter')
}



firstPerson.addEventListener('keyup', onTypeFirstPerson)
secondPerson.addEventListener('keyup', onTypeSecondPerson)
date.addEventListener('keyup', onTypeDate)
locationInput.addEventListener('keyup', onTypeLocation)


// let inviteName = document.createElement('div')
//   outputs.appendChild(inviteName)
//   inviteName.innerHTML = event.key