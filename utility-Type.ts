interface CollegeType{
    name:string,
    location:string,
    students:number,
    branch:number
}
// let CollegeData3:Partial<CollegeType>={
//     name:"jis university",
//     location:"kolkata West-bangal",
//     students:650,

// }

getCollegeData({name:"jis university"})

function getCollegeData(data:Partial<CollegeType>){
return data;
}
// Without Partial tumko sara interface ka data pass karna hoga 

//    ? ka matlb optional banna matlb undefined



function getCollegeData2(data:Required<CollegeType>){
return data;
}
getCollegeData2({name:"jis university",location:"kolkata West-bangal",students:650,branch:3})

//  Agar ap chahte ho optional property v important ban jaye to "required bana do"


var CollegeData4:Readonly<CollegeType>={
    name:"jis university",
    location:"kolkata West-bangal",
    students:650,
    branch:4
}
// CollegeData4.name="nit "

// agar ap chahte ho isse koei change na kr paye to "Readonly laga do"


var CollegeData5:Pick<CollegeType , 'name'|'students'>={
    name:"jis university",
    students:650,
}

// Agar tumko selected item chaye to "Pick" property ka use kro





var CollegeData6:Omit<CollegeType,'branch'>={
    name:"jis university",
    location:"kolkata West-bangal",
    students:650,
}

//  omit dalkar ap kah sakte ho mujhe ye chize nhi chHYE






type APIStatus="loading" | "error" | "Pending" | "success";
var APICall:Exclude<APIStatus,'Pending'>="success"

// Exclude ka matble wo chiz kavi show nhi hoga
var APICall2:Extract<APIStatus,'success' | "error">="success"
// Extract ka mtlb kiya kiya hame chahye 

type RandomType=string | number | undefined | null | string[];

var randomData:NonNullable<RandomType>="Hellow"

// NonNullable - undefined or null ko hata deta hai means accpt mhi krta






type SiteRole="Admin" | "User" | "Guest"
var siteRoleOption:SiteRole="Admin"
var RoleName:Record<SiteRole,string>={
    Admin:"Anil",
    User:'sidhu',
    Guest:'peter'

}
// Record normal type se object type me le aaya

