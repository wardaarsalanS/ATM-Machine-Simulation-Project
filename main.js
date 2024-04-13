import inquirer from "inquirer";
let mybalance = 10000; // Doller
let mypin = 3344;
let pinanswer = await inquirer.prompt([
    {
        name: "pin",
        message: "enter your pin",
        type: "number",
    }
]);
// 3344 == 3344 -false
if (pinanswer.pin === mypin) {
    console.log("correct pin code!!!");
}
let operationans = await inquirer.prompt([
    {
        name: "warda",
        message: "please select option",
        type: "list",
        choices: ["withdraw", "check blance"]
    }
]);
console.log(operationans);
if (operationans.operation == "withdraw") {
    let amountans = await inquirer.prompt([
        {
            name: "amount",
            message: "enter your amount",
            type: "number",
        }
    ]);
    // =, -=, +=
    mybalance -= amountans.amount;
    console.log("your remaining balance is: " + mybalance);
}
else if (operationans.operation === "check balance") {
    console.log("your blance is: " + mybalance);
}
