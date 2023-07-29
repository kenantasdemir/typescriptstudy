type customType =string | number

function add(a:customType,b:customType){

}



class Musteri {
    isCreditAllowed(): boolean {
        // ...
        return true;
    }
}

class Supplier {
    isInShortList(): boolean {
        // ...
        return true;
    }
}

type IsOrtagi = Musteri | Supplier;

function signContract(partner: IsOrtagi): string {
    let mesajim!: string;
    if (partner instanceof Musteri) {
        mesajim = partner.isCreditAllowed() ? 'Sign a new contract with the customer' : 'Credit issue';
    }

    if (partner instanceof Supplier) {
        mesajim = partner.isInShortList() ? 'Sign a new contract the supplier' : 'Need to evaluate further';
    }

    return mesajim;
}
