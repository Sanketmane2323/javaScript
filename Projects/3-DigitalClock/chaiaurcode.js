const clock = document.getElementById("clock");



//above one will not show the time in second moving continously

//hence we use the setInterval method

setInterval(function () {
  let date = new Date();
//   console.log(date.toLocaleTimeString());
    clock.innerHTML = date.toLocaleTimeString()
}, 1000);
