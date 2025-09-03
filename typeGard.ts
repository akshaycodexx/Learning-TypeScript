let uaerData20:number | string | boolean ="AKSAY";
uaerData20=true

// if(typeof uaerData20 == "boolean"){
//     console.log("This is a bool data type")
// }
// if(typeof uaerData20 == "string"){
//     console.log("This is a string data type")
// }
// if(typeof uaerData20 == "number"){
//     console.log("This is a number data type")
// }

function checkDatatype(data:string | number){
 if (typeof data == "number"){
    console.log("This is a number")
 }
 if (typeof data == "string"){
    console.log("This is a string")
 }
}
checkDatatype(20) 