type PersonT={
    name:string,
    age:number,
    isEmp:boolean,

}

let personData:PersonT={
name:"Akshay Kumar",
age:20,
isEmp:true
}

type PersonX= keyof PersonT;
let personDataX:PersonX;
personDataX="name"
personDataX="age"
personDataX="isEmp"

let UserX:keyof typeof personData="name";