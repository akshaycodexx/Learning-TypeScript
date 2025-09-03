
class Auth{
login(name:String,password:String){
    if(name && password){
        return "Student Login"
    }else{
        return "not login"
    }
}

}

class Student extends Auth{

result(marks:number){
    if(marks > 33){
        return "pass"
    }else{
        return "fail"
    }
    
}

}

class Teacher extends Auth{

subject(subject:number){
    return 'he is teach '+ subject;
}

}

var s1= new Student();
console.log(s1.result(60))