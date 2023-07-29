function toplam(...numbers:number[]):number{
    let total = 0;
    numbers.forEach((num)=>total+=num)
    return total
}

//rest parametre her zaman sonda olmalıdır.

console.log(toplam(10,20,30,40,50))