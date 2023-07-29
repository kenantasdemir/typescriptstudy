abstract class Department{

    constructor(public name:string){

    }

    abstract printMeeting():void

}

class AccountingDepartment extends Department{
    printMeeting(): void {
        throw new Error("Method not implemented.");
    }
    constructor(){
        super("Accounting and auditing");
    }
}