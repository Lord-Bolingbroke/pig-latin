
var vowels = ['a', 'e', 'i', 'o', 'u']

var userInput = "app"

function returnWay(userInput) {
  var returnArray = [];

  if ((userInput.split("")[0] === "a") || (userInput.split("")[0] === "e") || (userInput.split("")[0] === "i") || (userInput.split("")[0] === "o") || (userInput.split("")[0] === "u")) {
      returnArray.push(userInput + "way");
    }
    return returnArray;
}

// function consonantShift(userInput) {
//   var returnArray = [];
//
//   if (userInput !== "a" || "e" || "i" || "o" || "u") {
//     returnArray.push(userInput.splice(0, 1, ))
//   }
//
//
//
//
// }
//
// if (userInput === "a") || (userInput === "e") || (userInput === "i")
