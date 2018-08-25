function dwarfRollCall(dwarves) {
  var nameIndexString = "";
  dwarves.forEach(function(name, index) {
  	nameIndexString += [index+1] + ". " + name + " ";
  });
  return nameIndexString;
}

function summonCaptainPlanet(planeteerCalls){
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
  
}
