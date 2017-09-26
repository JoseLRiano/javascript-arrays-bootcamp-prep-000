var chocolateBars = new Array();
var chocolateBars = ["snickers", "hundred grand","kitkat","skittles"];
function addElementToBeginningOfArray(arr, a){
  arr.unshift(a);
  return arr;
}
function destructivelyAddElementToBeginningOfArray(arr,a){
  arr = [a,...arr];
  return arr;

}
function addElementToEndOfArray(arr, a){
  arr.push(a);
  return arr;
}
function destructivelyAddElementToEndOfArray(arr, a){
  arr =[...arr, a];
  return arr;
}
