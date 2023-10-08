let fetchBtn = document.getElementById("fetchBtn");

fetchBtn.addEventListener("click", buttonClickHandler);

function buttonClickHandler() {
    console.log("your cliked the fetchBtn");
  //Instantiate the object
  const xhr = new XMLHttpRequest();

  //open the object
  xhr.open("GET", "https://jsonplaceholder.typicode.com/todos/1", true);

  xhr.onload = function(){
    if(this.status === 200){

        console.log(this.responseText )
    }
    else{
        console.log("Some error occured")
    }
  }

  //send the requesst

  xhr.send()
}
