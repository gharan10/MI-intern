let balance=100000;
function onDisplayBalance(){
    console.log("Withdrawl");
    console.log("Deposit");
    console.log("Balance");
    console.log("Exit");
}
function Withdrawl(){
    amount=parseFloat(prompt("Enter the amount to withdrawl"));
    if( amount>0 && amount<=balance){
        balance=balance-amount;
        alert("Withdrawl successfull! " +"Current balance is "+balance);
    }
    else if(amount=cancelIdleCallback){
        alert("Your transaction has been cancelled!");
    }
    else{
        alert("Insufficient Balance");
        alert("Your balance is "+balance);   
    }
  
}
function Deposit(){
    amount=parseFloat(prompt("Enter the amount to deposit"));
    if(amount<20000){
    balance=balance+amount;
    alert("Deposit successfull");
    alert("Your balance is "+balance);
    }
    else if(amount=cancelIdleCallback){
        alert("Your transaction has been cancelled!");
    }
    else{
        alert("Max amount exist");
    }
}

function Balance(){
    alert("Your balance is "+balance);
}
function Exit(){
    alert("Thank you for using our service");
}
