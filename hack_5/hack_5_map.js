/**
 * mediante el loop map agregar los números 7,5,3,1
 * dentro del array result 
 * 
 * 
 * output => [7,5,3,1]
 */
let result = [];

let arr = [1,2,3,4,5,6,7]

arr.reverse().map(function(impares){
    if(impares %2 ===1){
        result.push(impares)

    }
})
console.log(result)
//export result
module.exports = result;