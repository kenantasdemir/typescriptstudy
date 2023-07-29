function ekranaYaz(){
    console.log("Kenan Taşdemir")
    return 35
}

let degisken = ekranaYaz();
console.log(degisken)


function birlestir(ad:string,soyad:string = "Boz"):string{
    return ad + " " + soyad;
}

let variable = birlestir("Kenan")
console.log(variable)



function carp(a:number,b:number,c?:number){}
//optional parametre

let carpim = (a:number,b:number):number=>{
    return a*b
}