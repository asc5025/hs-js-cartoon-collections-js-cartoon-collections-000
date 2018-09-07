function dwarfRollCall(dwarves) {
  var nameIndexString = "";
  dwarves.forEach(function(name, index) {
  	nameIndexString += [index+1] + ". " + name + " ";
  });
  return nameIndexString;
}

function summonCaptainPlanet(planeteerCalls) {
  let newPlanet = planeteerCalls.map(planet => planet.toUpperCase() + '!');
  //using arrow function expression 
  //.map() returns a new array with elements that have been modified
<<<<<<< HEAD
  return newPlanet;
=======
  return newPlanent;
>>>>>>> ea226b0fdc211822dc8879bb00ed5feaa295065a
}

function longPlaneteerCalls(array) {
  for (let arrayIndex = 0; arrayIndex < array.length; arrayIndex++) {
    if (array[arrayIndex].length > 4) {
      return true;
    } else {
      return false;
    }
  }
}
// possible .forEach ?

function findTheCheese (foods) {
  var cheese = ['cheddar', 'gouda', 'camembert'];
  for (let foodsIndex = 0; foodsIndex < foods.length; foodsIndex++) {
    let cheeseIndex = cheese.indexOf(foods[foodsIndex]);
    if (cheeseIndex !== -1) {
    //The indexOf() method returns the first index
    //at which a given element can be found in the
    //array, or -1 if it is not present.
      return foods[foodsIndex];
    } 
  } return 'no cheese!'
}


/* Possible Nested for loops?
function findTheCheese (foods) {
  var cheese = ['cheddar', 'gouda', 'camembert'];
  for (let foodsIndex = 0; foodsIndex < foods.length; foodsIndex++) {
    for (let cheeseIndex = 0; cheeseIndex < cheese.length; cheeseIndex++) {
      if (foods[foodsIndex] === cheese[cheeseIndex]) {
        return foods[foodsIndex];
      } else {
        return 'no cheese!';
      }
    }
  }
}
*/