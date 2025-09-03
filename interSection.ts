interface personTA {
    name:String
}
interface personTB{
    age:number
}
type personTC= personTA & personTB

var personDataA:personTA={name:"Akshay"}
var personDataB:personTB={age:21}

var personDataC:personTC={
    name:"Akshay",
    age:21
}