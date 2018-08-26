function dwarfRollCall(dwarves) {
  var nameIndexString = "";
  dwarves.forEach(function(name, index) {
  	nameIndexString += [index+1] + ". " + name + " ";
  });
  return nameIndexString;
}

function summonCaptainPlanet(planeteerCalls) {
  //using arrow function syntax 
  let newPlanet = planeteerCalls.map(planet => planet.toUpperCase() + '!');
  return newPlanet;
}

function longPlaneteerCalls(words) {
  for (let wordsIndex = 0; wordsIndex < words.length; wordsIndex++) {
    if (words[wordsIndex].length > 4) {
      return true;
    } else {
      return false;
    }
  }
}

function findTheCheese (foods) {
  var cheese = ['cheddar', 'gouda', 'camembert'];
  for (let foodsIndex = 0; foodsIndex < foods.length; foodsIndex++) {
    let cheeseIndex = cheese.indexOf(foods[foodsIndex]);
    if (cheeseIndex !== -1) {
      return foods[foodsIndex];
    }
  }
  return 'no cheese!';
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