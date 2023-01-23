// //const data = [
//     {
//         name: 'Shrek',
//         age: 106,
//         offsprings: 3,
//         city: 'the Swamp',
//         hobbies: ['swamp', 'eating']
//     },
//
//     {
//         name: 'Fiona',
//         age: 23,
//         offsprings: 3,
//         city: 'the Swamp',
//         hobbies: ['singing', 'shrek']
//     },
//
//     {
//         name: 'Donkey',
//         age: 22,
//         offsprings: 5,
//         city: 'Far Far Away',
//         hobbies: ['dragons', 'shrek']
//     },
//     {
//         name: 'Dragon',
//         age: 1250,
//         offsprings: 5,
//         city: 'Far Far Away',
//         hobbies: ['makeup', 'towers']
//
//     },
//     {
//         name: 'Lord Farquaad',
//         age: 571,
//         offsprings: 0,
//         city: 'Duloc',
//         hobbies: ['power', 'mirrors']
//
//     },
//     {
//         name: 'Puss in Boots',
//         age: 20,
//         offsprings: 3,
//         city: 'Far Far Away',
//         hobbies: ['gazpacho', 'working']
//     }
// ]
//
//
// 1. Podaj imiona postaci z najwieksza liczba dzieci
// 2. Podaj imie pradawnego najstarszego stworzenia
// 3. Podaj imie kogos z unikatowym miastem zamieszkania
// 4. Podaj imiona postaci, ktore kochaja Shreka [hobby]

function hasMostOffspring(data) {

    const sorted = data.sort((char1, char2) => char2.offsprings - char1.offsprings);

    return sorted.filter(({offsprings}) => offsprings === sorted.at(0).offsprings).map(({name}) => name);
}

function whoseOldest(data) {

    const sorted = data.sort((char1, char2) => char2.age - char1.age);
    return sorted.at(0).name;
}

function whoLovesShrek(data) {

    shrekLovers = data.filter(({hobbies}) => {
        return hobbies
            .map((hobby) => hobby.toLowerCase())
            .includes('shrek')
    })

    return shrekLovers.map(({name})=> name);
}
