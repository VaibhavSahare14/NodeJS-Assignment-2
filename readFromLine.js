const readLine = require("readline");

const rl = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Please enter your name : ", (greetName) => {
    console.log("Hello", greetName);
    rl.close();
})