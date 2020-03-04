var player1 = prompt("Player 1, please enter your name: ");
var player2 = prompt("Player 2, please enter your name: ");

var myheader = $('h1');

var columns = [$('.column-one'),
               $('.column-two'),
               $('.column-three'),
               $('.column-four'),
               $('.column-five'),
               $('.column-six'),
               $('.column-seven'),
             ];
var currentLocation = [5,5,5,5,5,5,5];
var current_marker = '#81d4e3'; //blue
var number_of_matches = 0;

function generateRandomColor(){
  letters="123456789ABCDEF";
  var color = '#';
  for (var i=0; i < 6; i++){
    color += letters[Math.floor(Math.random() * letters.length)];
  }

  return color;
}

function changeHeaderColor(){
  myheader.css('color', generateRandomColor());
}

function changeMarker(){
  if (current_marker === '#e8776f'){
    current_marker = '#81d4e3';
  } else {
    current_marker = '#e8776f';
  }
  return current_marker;
}

function changeMessage(){
  if (current_marker === '#81d4e3'){
    $('h3').text(player2 + ", It is your turn, please pick a column to drop your blue chip")
  }
  else {
    $('h3').text(player1 + ", It is your turn, please pick a column to drop your red chip")

  }
}

//Winning Condition
function checkVertical(x, y, color){

  if (hexc(columns[x].eq(y).css('background-color')) === color) {
    number_of_matches++;
    if (number_of_matches === 4){
      number_of_matches = 0;
      if (color === "'#81d4e3'"){
        alert(player2 + " WINS");
      } else {
        alert(player1 + " WINS")
      }
      return;
    }

    if (y === 5){
      number_of_matches = 0;
      return;
    }

  } else {
    number_of_matches = 0;
    return;
  }

  checkVertical(x, y+1, color);
}
function checkHorizontalLeft(x, y, color){
  if (hexc(columns[x].eq(y).css('background-color')) === color) {
    number_of_matches++;
    if (number_of_matches === 4){
      number_of_matches = 0;
      if (color === "'#81d4e3'"){
        alert(player2 + " WINS");
      } else {
        alert(player1 + " WINS")
      }
      return;
    }
    if (x === 0){
      number_of_matches = 0;
      checkHorizontalRight(x, y, color);
      return;
    }
  } else {
    number_of_matches = 0;
    checkHorizontalRight(x+1, y, color);
    return;
  }
  checkHorizontalLeft(x-1, y, color);
}
function checkHorizontalRight(x, y, color){
  if (hexc(columns[x].eq(y).css('background-color')) === color) {
    number_of_matches++;
    if (number_of_matches === 4){
      number_of_matches = 0;
      if (color === "'#81d4e3'"){
        alert(player2 + " WINS");
      } else {
        alert(player1 + " WINS")
      }
      return;
    }
    if (x === 6){
      number_of_matches = 0;
      return;
    }
  } else {
    number_of_matches = 0;
    return;
  }
  checkHorizontalRight(x+1, y, color);
}

function checkNorthEast(x, y, color){
  if (hexc(columns[x].eq(y).css('background-color')) === color) {
    number_of_matches++;
    if (number_of_matches === 4){
      number_of_matches = 0;
      if (color === "'#81d4e3'"){
        alert(player2 + " WINS");
      } else {
        alert(player1 + " WINS")
      }
      return;
    }
    if (x === 6 || y === 0){
      number_of_matches = 0;
      checkSouthWest(x, y, color);
      return;
    }
  } else {
    number_of_matches = 0;
    checkSouthWest(x-1, y+1, color);
    return;
  }
  checkNorthEast(x+1, y-1, color);
}

function checkSouthWest(x, y, color){
  if (hexc(columns[x].eq(y).css('background-color')) === color) {
    number_of_matches++;
    if (number_of_matches === 4){
      number_of_matches = 0;
      if (color === "'#81d4e3'"){
        alert(player2 + " WINS");
      } else {
        alert(player1 + " WINS")
      }
      return;
    }
    if (x === 0 || y === 5){
      number_of_matches = 0;
      return;
    }
  } else {
    number_of_matches = 0;
    return;
  }
  checkSouthWest(x-1, y+1, color);
}

function checkNorthWest(x, y, color){
  if (hexc(columns[x].eq(y).css('background-color')) === color) {
    number_of_matches++;
    if (number_of_matches === 4){
      number_of_matches = 0;
      if (color === "'#81d4e3'"){
        alert(player2 + " WINS");
      } else {
        alert(player1 + " WINS")
      }
      return;
    }
    if (x === 0 || y === 0){
      number_of_matches = 0;
      checkSouthEast(x, y, color);
      return;
    }
  } else {
    number_of_matches = 0;
    checkSouthEast(x+1, y+1, color);
    return;
  }
  checkNorthWest(x-1, y-1, color);
}

function checkSouthEast(x, y, color){
  if (hexc(columns[x].eq(y).css('background-color')) === color) {
    number_of_matches++;
    if (number_of_matches === 4){
      number_of_matches = 0;
      if (color === "'#81d4e3'"){
        alert(player2 + " WINS");
      } else {
        alert(player1 + " WINS")
      }
      return;
    }
    if (x === 6 || y === 5){
      number_of_matches = 0;
      return;
    }
  } else {
    number_of_matches = 0;
    return;
  }
  checkSouthEast(x+1, y+1, color);
}

//Change rgb to hex
function hexc(colorval) {
  var color;
  var parts = colorval.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
  delete(parts[0]);
  for (var i = 1; i <= 3; ++i) {
      parts[i] = parseInt(parts[i]).toString(16);
      if (parts[i].length == 1) parts[i] = '0' + parts[i];
  }
  color = '#' + parts.join('');
  return color;
}

//GAMEPLAY
columns[0].click(function(){

  changeMessage();
  columns[0].eq(currentLocation[0]).css('background-color', changeMarker());
  checkVertical(0, currentLocation[0], current_marker);
  checkHorizontalLeft(0, currentLocation[0], current_marker);
  checkNorthEast(0, currentLocation[0], current_marker);
  checkNorthWest(0, currentLocation[0], current_marker);
  currentLocation[0]--;
})
columns[1].click(function(){
  changeMessage();
  columns[1].eq(currentLocation[1]).css('background-color', changeMarker());
  checkVertical(1, currentLocation[1], current_marker);
  checkHorizontalLeft(1, currentLocation[1], current_marker);
  checkNorthEast(1, currentLocation[1], current_marker);
  checkNorthWest(1, currentLocation[1], current_marker);
  currentLocation[1]--;
})
columns[2].click(function(){
  changeMessage();
  columns[2].eq(currentLocation[2]).css('background-color', changeMarker());
  checkVertical(2, currentLocation[2], current_marker);
  checkHorizontalLeft(2, currentLocation[2], current_marker);
  checkNorthEast(2, currentLocation[2], current_marker);
  checkNorthWest(2, currentLocation[2], current_marker);
  currentLocation[2]--;
})
columns[3].click(function(){
  changeMessage();
  columns[3].eq(currentLocation[3]).css('background-color', changeMarker());
  checkVertical(3, currentLocation[3], current_marker);
  checkHorizontalLeft(3, currentLocation[3], current_marker);
  checkNorthEast(3, currentLocation[3], current_marker);
  checkNorthWest(3, currentLocation[3], current_marker);
  currentLocation[3]--;
})
columns[4].click(function(){
  changeMessage();
  columns[4].eq(currentLocation[4]).css('background-color', changeMarker());
  checkVertical(4, currentLocation[4], current_marker);
  checkHorizontalLeft(4, currentLocation[4], current_marker);
  checkNorthEast(4, currentLocation[4], current_marker);
  checkNorthWest(4, currentLocation[4], current_marker);
  currentLocation[4]--;
})
columns[5].click(function(){
  changeMessage();
  columns[5].eq(currentLocation[5]).css('background-color', changeMarker());
  checkVertical(5, currentLocation[5], current_marker);
  checkHorizontalLeft(5, currentLocation[5], current_marker);
  checkNorthEast(5, currentLocation[5], current_marker);
  checkNorthWest(5, currentLocation[5], current_marker);
  currentLocation[5]--;
})
columns[6].click(function(){
  changeMessage();
  columns[6].eq(currentLocation[6]).css('background-color', changeMarker());
  checkVertical(6, currentLocation[6], current_marker);
  checkHorizontalLeft(6, currentLocation[6], current_marker);
  checkNorthEast(6, currentLocation[6], current_marker);
  checkNorthWest(6, currentLocation[6], current_marker);
  currentLocation[6]--;
})

//H3 message
$('h3').text(player1+ ", It is your turn, please pick a column to drop your red chip");



console.log(hexc(columns[0].eq(0).css('background-color')));

setInterval(changeHeaderColor, 500);
