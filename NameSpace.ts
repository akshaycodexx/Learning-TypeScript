namespace UserNameSpace{
    export class UserAuth{
    login(){
        console.log("User login function")
    }
}
   export function getList(){
    console.log("List of users")
}
}
namespace AdminNameSpace{
    class UserAuth{
    login(){
        console.log("User login function")
    }
}
function getList(){
    console.log("List of users")
}
}

var user8=new UserNameSpace.UserAuth()


export{}