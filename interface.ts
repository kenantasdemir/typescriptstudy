// interface Persons{
//     readonly fname:string,
//     lname:string,
//     middlename?:string //optional
// }


// function getFullName(person:Persons){
//     return `${person.fname} ${person.lname}`
// }

// let personel:Persons = {
//         fname:"Kenan",
//         lname:"Taşdemir",
// }




interface StringFormat{
    (str:string,isUpper:boolean):string
}

let format:StringFormat

format = function(str:string,isUpper:boolean){
    return isUpper ? str.toLocaleUpperCase():str.toLocaleLowerCase()
}

console.log(format("Kenan Taşdemir",false))