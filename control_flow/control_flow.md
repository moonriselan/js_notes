# Control Flow

Domyślnie program jest wykonywany od gory do dolu, instrukcja po instrukcji, od lewej do prawej. 

---

## Conditions (if, switch)

- wykonywanie zbioru instrukcji badz nie.
````js
if (condition) {
// condition -> true
}
if (condition){
    //true
} else if (condition2) {
    // condition --> false
    // condition --> true
}
if (condition) {
    //condition --> true
} else {
    //condition --> false
}

switch (condition) {
    case "a":
        //condition === "a"
        break; // jesli nie ma breaka to warunki sprawdza, to nic innego jak if else;
    case "b":
        //condition === "b"
        break;
        
    default: 
        //condition !== "a" and condition !== "b"
}


````


## Loops (for, for in, for of, while, do while)
- wykonanie zbioru instrukcji zero lub więcej razy.
- for — kiedy wiemy ile iteracji (najczęściej iterujemy po kolekcjach)
- while — kiedy nie wiemy ile razy (oparte o warunek)

````js
for (let i = 0; condition; i++) {
    //dopoki condition jest true

}

const  obj = { a: 1, b: 2; c:3}
for ( const property in obj) {
// dopoki sa wartosci w obiekcie
}

const array = ["a", "b", "c"];
for (const element of array) {
// dopoki sa wartosci w tablicy - jesli wiadomo ile ma sie powtorzyc
}

while (condition) {
// dopoki condition jest true
}

do {
//minimum raz, dopoki condition jest true

} while (condition);

````