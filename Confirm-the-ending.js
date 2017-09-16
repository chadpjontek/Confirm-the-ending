//Check if a string ends with the target string
function confirmEnding(str, target) {
var start = (str.length - target.length);
  if (target === str.substr(start)){
      return true;
   } else {
      return false;
   }
}

//example
confirmEnding("Chad", "had");