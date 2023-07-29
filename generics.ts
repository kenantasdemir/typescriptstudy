function getRandomNumber(items: number[]): number {
    let randomIndex = Math.floor(Math.random() * items.length);
    return items[randomIndex];
}

let numbers = [1, 54, 65, 7, 8];
// console.log(getRandomNumber(numbers));

function getRandomString(items: string[]): string {
    let randomIndex = Math.floor(Math.random() * items.length);
    return items[randomIndex];
}

let adlarim = ["Can", "Tuba", "Merve"];
// console.log(getRandomString(adlarim));


// function getRandomElement(items: any[]): any {
//     let randomIndex = Math.floor(Math.random() * items.length);
//     return items[randomIndex];
// }


let degiskenlerim = [true, false, true];
function getRandomElement<T>(items: T[]): T {
    let randomIndex = Math.floor(Math.random() * items.length);
    return items[randomIndex];
}
console.log(getRandomElement<number>(numbers));
console.log(getRandomElement<string>(adlarim));
console.log(getRandomElement(degiskenlerim));