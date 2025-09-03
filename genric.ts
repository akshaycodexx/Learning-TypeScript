// function fruits(name:string | number | boolean):string | number | boolean{
//     return name;
// }
function fruitss<T>(name:T):T{
    return name;
}
let onlyfruits=fruitss("apple")
let onlyNum=fruitss(10)
let onlyBool=fruitss(true)