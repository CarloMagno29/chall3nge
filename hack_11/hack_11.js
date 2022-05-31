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
    if(result[1] === 1 ){
        result.splice(1,1,"one")
      
    if(result[3] === 3 )
        result.splice(3,1,"three")
      

    if(result[5] === 5 )
        result.splice(5,1,"five")
        
    if(result[6]== "foo")    
        result.splice(6,1,"f00")
        

    if(result[7][0] === "b" )
        result[7] =result[7].charAt(0).toUpperCase() + result[7].slice(1)
    
    if(result[8] === "baz" )
        result[8] = result[8].split("a").join("@")
    
    if(result[9] === "qux" )
        result[9] = result[9].split("x").join("X")
    
    if(result[10] === "echo" )
        result.splice(10,1,"3ch0")
    
        result.splice(6,0,"h@ck")

    console.log(result)
}

}





//export result
module.exports = result;