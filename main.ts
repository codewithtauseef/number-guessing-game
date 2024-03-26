import inquirer from "inquirer";

async function startFunc() {
    
    let systemNum = Math.floor(Math.random() * 10+1);
    const userNum = await inquirer.prompt([
        {
            type: "input",
            name: "userGuess",
            message: "Enter your number between 1 - 10 : "
        }
    ])

    const { userGuess } = userNum;
    console.log("Your Guess : ", userGuess,"\nsystem Guess: ", systemNum);
    if (userGuess == systemNum) {
        console.log("Hurray ! YOU WIN!")
    }
    else {
        console.log("Better luck next time");

    }
}

async function startAgain() {
    do {
        await startFunc();
        var again = await inquirer.prompt({
            type: "input",
            name: "restart",
            message: "Do you want continue? (y/n) "
        })
    }
    while(again.restart === "y")
}
startAgain();

