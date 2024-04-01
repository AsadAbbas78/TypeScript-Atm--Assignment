import inquirer from "inquirer";
const answers = await inquirer.prompt([
    {
        type: "input",
        name: "userId",
        message: "kindly Enter your Id: "
    },
    {
        type: "number",
        name: "userPin",
        message: "kindly enter your PIN"
    },
    {
        type: "list",
        name: "AccountType",
        choices: ["Current", "Saving"],
        message: "select your account type:"
    },
    {
        type: "list",
        name: "transactionType",
        choices: ["Fast Cash", "Withdraw"],
        message: "select your transaction",
        when(answers) {
            return answers.AccountType;
        },
    },
    {
        type: "list",
        name: "amount",
        choices: [1000, 2000, 10000, 20000],
        message: "select your amount",
        when(answers) {
            return answers.transactionType == "Fast Cash";
        },
    },
    {
        type: "number",
        name: "amount",
        message: "Enter your amount",
        when(answers) {
            return answers.transactionType == "withdraw";
        },
    },
]);
if (answers.userId && answers.userPIN) {
    const balance = (Math.random() * 10000000);
    console.log(balance);
    const EnteredAmount = answers.amount;
    if (balance >= EnteredAmount) {
        const remaining = balance - EnteredAmount;
        console.log("your remaining balance is ", remaining);
    }
    else {
        console.log("Insufficient Balance");
    }
}
console.log(answers);
