/**
 * [1,2,3,4,5]
 * ["foo","bar","baz","qux","echo"]
 * 
 * 1) incluir los 2 array en 1 solo array
 * 2) los items del number array 1,3,5 se reescriben one,three,five
 * del string array todos sus items mutan de acuerdo a lo siguiente:
 * foo => f00
 * bar => Bar
 * baz => b@z   
 * qux => quX
 * echo => 3ch0
 * 3) anexar al inicio, al final y entre la unión de los array el string "h@ck"
 * 
 * 
 * output => ["h@ck","one",2,"three",4,"five","h@ck","f00","Bar","b@z","quX","3ch0","h@ck"]   
 */
let numberArray = [1,2,3,4,5];
let stringArray = ["foo","bar","baz","qux","echo"]
let result = [...numberArray, ...stringArray];



result.unshift("h@ck")
result.push("h@ck")

for(let i = 0; i< result.length; i++){
    result.splice(1,1,"one")
    result.splice(3,1,"three")
    result.splice(5,1,"five")
    result.splice(6, 0,"h@ck")
    result.splice(7,1,"f00")
    result.splice(8,1,"Bar")
    result.splice(9,1,"b@z")
    result.splice(10,1,"quX")
    result.splice(11,1,"3ch0")
   
    break;
}

console.log(result)




//export result
module.exports = result;