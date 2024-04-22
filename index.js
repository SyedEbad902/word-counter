import inquirer from 'inquirer';
const ans = await inquirer.prompt([{
        message: "Enter your sentence to count words",
        name: "Sentence",
        type: "input"
    }]);
const word = ans.Sentence.trim().split(" ");
console.log(`Your sentence word cout is ${word.length}`);
