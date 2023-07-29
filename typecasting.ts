const data:unknown = "1"
console.log(typeof(data))

const veriler:number = <number>data
console.log(veriler)

const gelenVeri = data as number

let x :number = 25
let y :number = 27

x > y ? console.log("x y den büyüktür.") : console.log("x y den küçüktür.");