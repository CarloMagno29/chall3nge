/**
 * mediante el map for agregar los números 1,3,5,7
 * dentro del array result 
 * 
 * 
 * output => [1,3,5,7]
 */
let result = [];

let arr = [1,2,3,4,5,6,7]

arr.map(function(impares){
    if(impares %2 ===1){
        result.push(impares)

    }
})
console.log(result)
//export result
module.exports = result;