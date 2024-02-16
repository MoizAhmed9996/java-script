


let balance = 1000; 


function displayMenu() {
    console.log("Welcome to the ATM Machine");
    console.log("1. Check Balance");
    console.log("2. Withdraw Money");
    console.log("3. Deposit Money");
    console.log("4. Exit");
}

function checkBalance() {
    console.log("Your balance is: $" + balance);
}


function withdrawMoney(amount) {
    if (amount > balance) {
        console.log("Insufficient funds");
    } else {
        balance -= amount;
        console.log("Withdrawal successful. Remaining balance:" + balance);
    }
}
function depositMoney(amount) {
    balance += amount;
    console.log("Deposit successful. New balance: $" + balance);
}

function runATM() {
    displayMenu();

    let option = parseInt(prompt("Enter your choice:"));

    switch (option) {
        case 1:
            checkBalance();
            break;
        case 2:
            let withdrawAmount = parseFloat(prompt("Enter amount to withdraw:"));
            withdrawMoney(withdrawAmount);
            break;
        case 3:
            let depositAmount = parseFloat(prompt("Enter amount to deposit:"));
            depositMoney(depositAmount);
            break;
        case 4:
            console.log("Thank you for using the ATM. Goodbye!");
            return;
        default:
            console.log("Invalid choice. Please try again.");
    }
   
}

runATM();
document.write("Thankyou for using the ATM,")
document,write("Good Bye")