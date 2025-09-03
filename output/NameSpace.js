var UserNameSpace;
(function (UserNameSpace) {
    class UserAuth {
        login() {
            console.log("User login function");
        }
    }
    UserNameSpace.UserAuth = UserAuth;
    function getList() {
        console.log("List of users");
    }
    UserNameSpace.getList = getList;
})(UserNameSpace || (UserNameSpace = {}));
var AdminNameSpace;
(function (AdminNameSpace) {
    class UserAuth {
        login() {
            console.log("User login function");
        }
    }
    function getList() {
        console.log("List of users");
    }
})(AdminNameSpace || (AdminNameSpace = {}));
var user8 = new UserNameSpace.UserAuth();
export {};
