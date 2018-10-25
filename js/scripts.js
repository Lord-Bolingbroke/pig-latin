
var vowels = ['a', 'e', 'i', 'o', 'u']

function returnWay(userInput) {
  var returnArray = [];

  if ((userInput.split("")[0] === "a") || (userInput.split("")[0] === "e") || (userInput.split("")[0] === "i") || (userInput.split("")[0] === "o") || (userInput.split("")[0] === "u")) {
      returnArray.push(userInput + "way");
    }
    return returnArray;
}

function shiftConsonant(userInput) {
  var returnArray = [];

  if ((userInput.split("")[0] !== "a") || (userInput.split("")[0] !== "e") || (userInput.split("")[0] !== "i") || (userInput.split("")[0] !== "o") || (userInput.split("")[0] !== "u")) {
      returnArray.push(userInput.slice(1) + userInput.split("")[0] + "ay");
    
    }
    return returnArray;
}
