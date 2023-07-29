function sayHello():void{}


function throwError(errorMsg:string):never{
    throw new Error(errorMsg)
    //geriye hiçbir değer dönmediğinde
    //yani hata fırlatılacağı zaman kullanılır.
}

throwError("Hata meydana geldi.")


//tipi void olan bir değişkene null atanabilir.
//tipi never olan bir değişkene null atanamaz.

//tipi void olan değişkene undefined atanabilir
//tipi never olan değişkene undefined atanamaz.