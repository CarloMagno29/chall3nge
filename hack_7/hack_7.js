/**
 * ["foo","bar","baz","qux","echo"] 
 * 
 * modificar a mayúscula el primer caracter de cada item string del array
 *  
 * 
 * output => ["Foo","Bar","Baz","Qux","Echo"]   
 */
let arr = ["foo","bar","baz","qux","echo"];
let result = [];
let len = arr.length

for (let i = 0; i < len; i++) {
    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    result.push(arr[i])
}
console.log(result)

//export result
module.exports = result;