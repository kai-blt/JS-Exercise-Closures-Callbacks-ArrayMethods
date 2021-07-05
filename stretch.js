(function(){
    var a = b = 3;
  })();

console.log("a defined? " + (typeof a !== 'undefined'));
console.log("b defined? " + (typeof b !== 'undefined'));


/* STRETCH 2 */
function incrementBySix(num) {
    let total = 0;
    function addSix() {
        total = num + 6;
    }
    addSix();
    return total;
}

//Adds 6 to a provided counter total
console.log(incrementBySix(10));
console.log(incrementBySix(21));




/* MORE CLOSURE / HIGHER ORDER TESTS */

function sentenceGenerator(word1, word2) {
    let sentence = "";
    return function() {
        return sentence += `${word1}, ${word2}. `;
    }
}


let makeSentence = sentenceGenerator('dog', 'cat');
let makeSentence2 = sentenceGenerator('bird', 'fish');
console.log(makeSentence());
console.log(makeSentence());
console.log(makeSentence());
console.log(makeSentence());
console.log(makeSentence2());
console.log(makeSentence2());
console.log(makeSentence2());
console.log(makeSentence2());