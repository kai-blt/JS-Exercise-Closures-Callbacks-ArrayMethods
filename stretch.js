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