function fruitts():number{
    return 10
}

function simple():boolean{
return true
}

function complex():number | string{
    let data=10;
    let type="age";
    let name="Akshay";
    if(type=="age"){
        return data;
    }else{
        return name;
    }
}

function anything():any{
    return
}