class Person{
    private readonly id:number;
    public name:string;
    protected age:number;


    constructor(id,name,age){
        this.id = id;
        this.name = name;
        this.age = age
    }
}


class Employee extends Person{
    constructor(id:number,name:string,age:number){
        super(id,name,age);
    }
}


class Circle{
    public static pi:number = 3.14;
}

console.log(Circle.pi)

let inf = new Person(1,"Kenan",23)