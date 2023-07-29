let kod:any = 123;
let employeeCode = <number>kod;
console.log(typeof(employeeCode));


let calisan1 = {};
console.log(typeof(calisan1))

interface Employee{
    name:string,
    code:number
}
let employee1 = <Employee>{};
console.log(typeof(employee1))
employee1.name = "Kenan"
console.log(employee1)