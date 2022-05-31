/**
 * ["foo","bar","baz","qux","echo"] 
 * 
 * 1) anexar al array result los items [bar,baz,qux]
 * 2) los 2 primeros items reescribir el caracter "a" por @
 * modificar el último item "quz" a mayúscula
 *  
 * 
 * output => ["b@r","b@z","QUX"]   
 */
let result = [];


let arr = ["foo","bar","baz","qux","echo"];

arr.pop()
arr.shift()

let len = arr.length

for (let i = 0; i < len; i++) {
    arr[i] = arr[i].split("a").join("@").replace("qux", "QUX")
    result.push(arr[i])  
}
  console.log(result)

//export result
module.exports = result;