interface info {
    name:String,
    age:Number,
    college:String,
}




var studentObj:info={
    name:"Anil",
    age:30,
    college:"IET alwar"
}


interface TeacherType extends info{
    subject:String
}


var TeacherObj:TeacherType={
    name:"Anish",
    age:30,
    college:"iit patna",
    subject:"Math"
}