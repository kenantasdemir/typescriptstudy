
function birlestir<U,V>(obj1:U,obj2:V){
    return {
        ...obj1,
        ...obj2
    }
}


let person = birlestir(
    {name:"Kenan"},
    {yas:23}
)



function merge<U extends object, V extends object>(obj1: U, obj2: V) {
    return {
        ...obj1,
        ...obj2
    }
}

let kisi = birlestir(
    { name: "Can" },
    // { age: 29 }
    29
)

console.log(kisi);