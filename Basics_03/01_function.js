function loginUserMessage(username){
    return `${username}`
}
//to give the default value

function loginUserMessageDefault(username="sam") {
  return `${username}`;
}


console.log(loginUserMessage("sanket"))
console.log(loginUserMessageDefault())
console.log(calculateCartPrice(600,900,1000))

function calculateCartPrice (...num){
    let sum=0;
    for(let i=0;i<num.length;i++){
        sum=sum+num[i];
    }
    return sum
}