const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question("How many balls in the bag? ", function (balls) {
    const numberOfBalls = parseInt(balls, 10);
    if (!Number.isInteger(numberOfBalls)) {
        console.log("Please enter a number instead.");
        rl.close();
    } else {
        console.log(`There are ${numberOfBalls} balls in the bag.`);
        console.log(`There are ${calculate(numberOfBalls)} different ways to remove them.`);
        rl.close();
    }
});

const calculate = (balls) => {
    switch (balls) {
        case 0:
            return 0;
        case 1:
            return 1;
        case 2:
            return 2;
        default:
            return calculate(balls - 1) + calculate(balls - 2);
    }
};
