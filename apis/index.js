fetch('http://api.open-notify.org/astros.json')
.then((data) => {return data.json()})
.then((json) => {console.log(json)})


console.log('hi')
//function onFetch(data)

//synchronous vs asynchronous 
//synchronous = one at a time in order
//asynchronous = multiple things at once and react to them as they finish rather than waiting