interface BusinessPartner {
    name: string;
    credit: number;
}

interface Identity {
    name: string;
    id: number;
}


interface Contact {
    email: string;
    phone: string;
}

type Calisan = Identity & Contact;

let kisim: Calisan = {
    id: 54,
    name: "Can Boz",
    email: "sdasd@hotmail.com",
    phone: "345435345324"
}

console.log(kisim);

type Customer = BusinessPartner & Contact;

let musterim: Customer = {
    credit: 2121,
    email: "asdas@hotmail.com",
    name: "Can Boz",
    phone: "3423423324"
}

console.log(musterim);