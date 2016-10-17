var sentence = prompt("Enter a sentence please: ");

var encrypt = function (visitorSentence) {
  //find th first letter of the sentence
  var firstLetter = visitorSentence.charAt(0).toUpperCase();
  var lastLetter = visitorSentence.charAt(visitorSentence.length-1).toUpperCase();
  return firstLetter + lastLetter;
}

//alert(encrypt (sentence));

var reverseOrder = function () {

  var letters = encrypt (sentence);
  return (letters.charAt(1)+letters.charAt(0));
}
//alert(reverseOrder());

var thirdFunction = function(sentence) {
  return sentence + reverseOrder();
}

var fourthFunction = function (sentence) {
  var letterCount = parseInt(sentence.length / 2);
  return sentence.charAt(letterCount).concat(thirdFunction(sentence));
}

//alert(fourthFunction(sentence));

var reverseFourth = function(sentence) {
  return fourthFunction(sentence).split("").reverse().join("");
}
//alert(reverseFourth(sentence));

jQuery("p.p1").click(function() {
  alert(sentence);
});

jQuery("p.p2").click(function() {
  alert(reverseFourth(sentence));
});
