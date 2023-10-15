if (true) {
  let a = 10;
  const b = 20;
  var c = 30;
}

console.log(c); //only c will get print and these is the problem as it can be outside the if statement

// the basic idea of scope is it must not present outside the {} ,
// example variable inside the for loop

function one() {
  const website = "youtube";

  function two() {
    const username = " Sanket";

  }

  console.log(username); //these will give us the error
}


// basically the scope is like a child can take ice-cream from the elders but parent can take it from
// child