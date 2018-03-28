var scores = {}; // va a llevar el registro de los jugadores y sus puntos

// Creando
function createPlayer(object, name){
  object[name.toLowerCase()] = 0;
  console.log(object);
}

function addPoints(name, points){
  scores[name.toLowerCase()] += points;
  console.log(scores);
}

function printAllPoints(){
  var arrayPlayers = Object.keys(scores);
  var resultados = "";
  for( var k = 0; k < arrayPlayers.length; k++){
    if(k == arrayPlayers.length -1){
      resultados += arrayPlayers[k] + ': ' + scores[arrayPlayers[k]];
    } else {
      resultados += arrayPlayers[k] + ': ' + scores[arrayPlayers[k]] + ', ';
    }
  }

  return resultados;
}

createPlayer(scores, "Ana");
addPoints("Ana", 20);
addPoints("ana",46);
createPlayer(scores,'paco');
addPoints('paco', 39);
addPoints('paco',21);

createPlayer(scores,'maria');
addPoints('maria',50);

console.log(printAllPoints());
