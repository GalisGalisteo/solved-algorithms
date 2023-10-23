/**
 *
 * Reading a Book. Kyu 7
 *
 * https://www.codewars.com/kata/570ca6a520c69f39dd0016d4/
 *
 *
 */

function sc(words) {
  return 0;
}

// Ambos console.log deben dar lo mismo

console.log(sc("Hello World!"), 10);
console.log(sc("black cat and white cat all are cat"), 24);
console.log(sc("black cat and white cat all are CAT"), 24);
var words1 =
  "Related Articles: Ruby Environment, CoffeeScript Environment, JavaScript Environment, Python Environment, Haskell Environment, Java Environment, Clojure Environment, .NET Environment.";
console.log(sc(words1), 86);
var words2 =
  "Related Articles: Ruby Environment, Coffee Script Environment, Java Script Environment, Python Environment, Haskell Environment, Java Environment, Clojure Environment, .NET Environment.";
console.log(sc(words2), 78);
console.log(sc("Don't ask me. I don't know."), 15);
