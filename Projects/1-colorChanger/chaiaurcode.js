const btn=document.querySelectorAll(".button")
const body=document.body


btn.forEach(function (button) {
    console.log(button)
    button.addEventListener('click',function(event){
        const value= event.target.id
        document.body.style.backgroundColor=value
    })
})