/**
 * mediante el loop while agregar los números 7,5,3,1
 * dentro del array result 
 * 
 * 
 * output => [7,5,3,1]
 */
let result = [];

let i= 8
while(i>0){
    if(i%2 ===1){
        result.push(i)

    }
    i--
}
console.log(result)
//export result
module.exports = result;