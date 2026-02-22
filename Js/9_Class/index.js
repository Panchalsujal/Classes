let password = "Harsh";
// Condition

vs

for (let i = 1; i <= 3; i++) {
let   user = prompt("Enter Password");

  if (user === password) {
    console.log("Login Successful");
    break;
  }else{
    if(i === 3){
      console.error("Account Block");
    }else{
      console.error(`${i} Attemp Wrong`);
    }
  }
}
