interface CollegeDataType{
    name:string;
    displayTeachersName():void;
    getStudentList():string[];

}

class CollegeData implements CollegeDataType{
    name:string;
    constructor(Cname:string){
        this.name=Cname;
    }
    displayTeachersName():void {
        console.log("Anil","sam");
    }

    getStudentList(): string[]{
        return ["anil","akshay","sam"]
    }
}

var College1= new CollegeData("jis university");
