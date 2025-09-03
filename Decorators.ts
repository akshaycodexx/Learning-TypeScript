function classLogger(constructor:Function){
    console.log(constructor.name)
}

@classLogger
class CustomMaths{
    value1:number;
    value2:number;
    constructor(x:number,y:number){
        this.value1=x;
        this.value2=y
    }
}

var cm1= new CustomMaths(12,15);
