class EmpInfo{
    _name:String="Anil";
    _email:String="anil@gmail.com"
    get name():string{
        return "Mr. "+this._name
    }
    set email(val:string){
        this._email="emp"+val
    }
}
var emp1= new EmpInfo();
emp1.email="akshay@gmail.com";
console.log(emp1.name)
console.log(emp1._email)