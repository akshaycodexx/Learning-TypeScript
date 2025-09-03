
function totalPrice(item:number,price:number,txt?:String){
    if(txt){
        
        console.log(txt,price*item) 

    }else{

        console.log(price*item)

    }

}
totalPrice(50,100,"Total price is")