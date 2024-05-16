/*
 * Modify the contents of the function below, such that:
 *
 * If we're not hungry, we want to tell ourselves to get back to work.
 * Otherwise, we want to pick something up and eat it in the lab when
 * we've got less than 20 minutes or to try a place nearby if we've
 * got between 20 and 30 minutes. If we have any more time than that,
 * we want to remind ourselves that we're in a bootcamp and that we
 * should reconsider how much time we actually have to spare.
 *
 * hungry is a Boolean, representing if you're hungry or not.
 * availableTime is a Number representing the time you have for lunch,
 * in minutes.
 */

//CONDITIONALS

// - have to be hungry to execute 3 things
// - less than 20 minutes, grab a snack
// - 20-30 minutes, deserve a break and cook a meal
// - more than 30 minutes, intense program and you should reconsider

//STATEMENTS


const whatToDoForLunch = function(hungry, availableTime) {
  if (hungry) {
    if (availableTime <= 20) {
      console.log("You have less than 20 minutes, grab a snack");
    } else if (availableTime > 20 && availableTime <= 30) {
      console.log("You have between 20 and 30 minutes, take a break and cook a meal");
    } else if (availableTime > 30) {
      console.log("You have more than 30 minutes, you should use your time wisely");
    }
  } else {
    console.log("You don't need food right now");
  }
};


/*
 * This is some test runner code that's simply calling our whatToDoForLunch function
 * defined above to verify we're making the right decisions. Do not modify it!
 */

console.log("I'm hungry and I have 20 minutes for lunch.");
whatToDoForLunch(true, 20);
console.log("---");

console.log("I'm hungry and I have 50 minutes for lunch.");
whatToDoForLunch(true, 50);
console.log("---");

console.log("I'm not hungry and I have 30 minutes for lunch.");
whatToDoForLunch(false, 30);
console.log("---");

console.log("I'm hungry and I have 15 minutes for lunch.");
whatToDoForLunch(true, 15);