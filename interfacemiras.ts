// interface IPerson{
//     name:string;
//     gender:string
// }

// interface IEmployee extends IPerson{
//     empNo:number
// }

// let employeem:IEmployee = {
//     empNo:1,
//     gender:"Male",
//     name:"Kenan"
// }

// console.log(employeem)


interface IPerson{
    name:string;
    gender:string
}


class Employeee implements IPerson{
    //IPerson içindeki tümalanlar burada da tanımlı olmalı
    empNo:number
    name:string;
    gender:string


    constructor(empNo:number,name:string,gender:string){
        this.empNo = empNo;
        this.name = name;
        this.gender = gender
    }
}


let calisanim = new Employeee(1,"Kenan","Male")
