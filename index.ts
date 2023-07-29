let age:number = 29
let firstname:string = "Kenan"
let lastname:string = "Taşdemir"
let isUpdated:boolean = true


function display(id:any,name:string,hobbies:any){}

let employeeInfos = "adı " + firstname + "soyadı " + lastname + "yası " + age
let employeeInfos2 = `adı ${firstname} soyadı ${lastname} yası ${age}`


let firstNames:string[] = ["Kenan","Ahmet","Mehmet"]
let lastNames:Array<string> = ["Yılmaz","Kaya","Dağ"]

let user:[number,string] = [1,"Kenan"]
let user2:[number,string,boolean,number,string]
user2 = [1,"Kenan",true,13000,"Hayır"]


let calisan :[number,string][]
calisan = [[1,"Ahmet"],[2,"Mehmet"],[3,"Hasan"]]


type Personel={
    name:"Kenan",
    age:25,
    jobTitle:"Full-Stack Developer"
}

let calisanlar:Personel;
calisanlar={
    name:"Kenan",
    age:25,
    jobTitle:"Full-Stack Developer"
}
console.log(calisanlar.name)


let employee:Personel