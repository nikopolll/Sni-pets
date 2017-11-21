function pyramid() {
 var number = 10;
 var result = "";
 for (var i = 1; i <= number; i++) {
  var star = "";
  for (var j = 0; j < number - i; j++) {
   star = star + ' ';
  }
  for (var k = 0; k < 2 * i - 1; k++) {
   star = star + "*";
  }
  result += '\n' + star;
 }
 console.log(result);

}
pyramid();
