// // //const data = [
// //     {
// //         name: 'Shrek',
// //         age: 106,
// //         offsprings: 3,
// //         city: 'the Swamp',
// //         hobbies: ['swamp', 'eating']
// //     },
// //
// //     {
// //         name: 'Fiona',
// //         age: 23,
// //         offsprings: 3,
// //         city: 'the Swamp',
// //         hobbies: ['singing', 'shrek']
// //     },
// //
// //     {
// //         name: 'Donkey',
// //         age: 22,
// //         offsprings: 5,
// //         city: 'Far Far Away',
// //         hobbies: ['dragons', 'shrek']
// //     },
// //     {
// //         name: 'Dragon',
// //         age: 1250,
// //         offsprings: 5,
// //         city: 'Far Far Away',
// //         hobbies: ['makeup', 'towers']
// //
// //     },
// //     {
// //         name: 'Lord Farquaad',
// //         age: 571,
// //         offsprings: 0,
// //         city: 'Duloc',
// //         hobbies: ['power', 'mirrors']
// //
// //     },
// //     {
// //         name: 'Puss in Boots',
// //         age: 20,
// //         offsprings: 3,
// //         city: 'Far Far Away',
// //         hobbies: ['gazpacho', 'working']
// //     }
// // ]
// //
// //
// // 1. Podaj imiona postaci z najwieksza liczba dzieci
// // 2. Podaj imie pradawnego najstarszego stworzenia
// // 3. Podaj imie kogos z unikatowym miastem zamieszkania
// // 4. Podaj imiona postaci, ktore kochaja Shreka [hobby]
//
// function hasMostOffspring(data) {
//
//     const sorted = data.sort((char1, char2) => char2.offsprings - char1.offsprings);
//
//     return sorted.filter(({offsprings})i => offsprings === sorted.at(0).offsprings).map(({name}) => name);
// }
//
// function whoseOldest(data) {
//
//     const sorted = data.sort((char1, char2) => char2.age - char1.age);
//     return sorted.at(0).name;
// }
//
// function whoLovesShrek(data) {
//
//     shrekLovers = data.filter(({hobbies}) => {
//         return hobbies
//             .map((hobby) => hobby.toLowerCase())
//             .includes('shrek')
//     })
//
//     return shrekLovers.map(({name})=> name);
//
//
// }
//
// // or
//
// function maxOffSprings(persons) {
//     let names = [];
//     let counter = persons[0];
//
//     for (let i = 0; i < persons.length; i++) {
//         if (persons[i].offsprings > counter.offsprings) {
//             counter = persons[i];
//             names = [persons[i].name]
//         } else if (persons[i].offsprings === counter.offsprings) {
//             names.push(persons[i].name)
//         }
//     }
//     return names;
// }
//
// function maxAgeCreature(data){
//     const maxAge = data.sort((a,b) =>
//         b.age - a.age);
//     return maxAge.at(0).name;
// }
//
// const getCreatureWhoLoveShrek = (elements) => elements
// .filter((element) => element.hobbies.includes('shrek'))
// .map((element) => element.name)
// .join(',')
// ;
//
// new data sets:
//
// const trucks = [
//     {
//         truck: "Scania",
//         hp: "560",
//         truck_driver: "Janusz",
//         weight: 40000,
//         favourite_meal: ["Pizza", "Burger", "Fries"]
//     },
//     {
//         truck: "Renault",
//         hp: "420",
//         truck_driver: "Jarek",
//         weight: 35000,
//         favourite_meal: ["Kebab", "Burger", "Fries"]
//     },
//     {
//         truck: "Volvo",
//         hp: "700",
//         truck_driver: "Zenek",
//         weight: 37000,
//         favourite_meal: ["Kebab", "Burger", "Chciken"]
//     },
//     {
//         truck: "Mercedes",
//         hp: "460",
//         truck_driver: "Jurek",
//         weight: 16000,
//         favourite_meal: ["Bigos", "Burger", "Fries"]
//     },
//     {
//         truck: "Man",
//         hp: "440",
//         truck_driver: "Donald",
//         weight: 20000,
//         favourite_meal: ["Pizza", "Steak", "Ice cream"]
//     },
//     {
//         truck: "Iveco",
//         hp: "380",
//         truck_driver: "Antoni",
//         weight: 25000,
//         favourite_meal: ["Pizza", "Steak", "Spaghetti"]
//     },
// ]
//
// // 1. Wyświetl nazwy ciężarówek posortowane według wagi od najmniejszej do najwiekszej.
// // 2. Wyświetl ciężarówki z mocą powyżej 450 hp  i imiona szoferów.
// // 3. Wyświetl szoferów na literę J oraz ich ulubione potrawy.
//
//
// // 1. Wyświetl nazwy ciężarówek posortowane według wagi od najmniejszej do najwiekszej.
// function trucksFromMinToMaxWeight(elements) {
//     const sorted = elements.sort((a, b) => a.weight - b.weight)
//
//     return sorted.map((element) => element.truck)
// }
//
// // 2. Wyświetl ciężarówki z mocą powyżej 450 hp i imiona szoferów.
// function trucksWithHpOver450(elements) {
//     const over450 = elements.filter(({hp}) => Number(hp) > 450)
//
//       return   over450.map(({truck, truck_driver}) => [truck, truck_driver]);
// }
//
// // 3. Wyświetl szoferów na literę J oraz ich ulubione potrawy.
// function nameStartingJAndFavouriteMeal(elements) {
//     const nameStartingJ = elements.filter((element) => element.truck_driver.includes('J'[0]))
//
//     return nameStartingJ.map(({truck_driver, favourite_meal}) => [truck_driver, ...favourite_meal] )
// }
//
// new data sets:
//
// const ksw = [
//     {
//         name: "Damian Janikowski",
//         height: "180.00cm",
//         arm_range: "180.00cm",
//         weight: "83,9KG",
//         win_streak: {
//             win: 7,
//             loss: 5,
//             draw: 0
//         },
//     },
//     {
//         name: "Borys Mańkowski",
//         height: "170.00cm",
//         arm_range: "178.00cm",
//         weight: "155lb",
//         win_streak: {
//             win: 7,
//             loss: 5,
//             draw: 0
//         },
//     },
//     {
//         name: "Mariusz Pudzianowski",
//         height: "6.1ft",
//         arm_range: "195.00cm",
//         weight: "120,2kg",
//         win_streak: {
//             win: 17,
//             loss: 7,
//             draw: 0
//         },
//     },
//     {
//         name: "Marcin Różalski",
//         height: "188.00cm",
//         arm_range: "181.00cm",
//         weight: "265lb",
//         win_streak: {
//             win: 7,
//             loss: 4,
//             draw: 0
//         },
//     },
//     {
//         name: "Akop Szostak",
//         height: "5.6ft",
//         arm_range: "186.00cm",
//         weight: "93kg",
//         win_streak: {
//             win: 0,
//             loss: 2,
//             draw: 0
//         },
//     },
//     {
//         name: "Michał Materla",
//         height: "183.00cm",
//         arm_range: "192.00cm",
//         weight: "185lb",
//         win_streak: {
//             win: 21,
//             loss: 7,
//             draw: 0
//         },
//     },
// ]
//
// // 1. Podaj imiona najcięższych zawodników.
// // 2. Podaj Imię zawodnika z najlepszym stosunkiem wygranych do przegranych starć.
// // 3. Podaj Imię zawodnika a najwyższym BMI(stosunek wzrostu do wagi).
// Dodałem utrudnienie w postaci różnych jednostek by trochę zamieszać (1 ft == 30.48 cm), (1 lb == 0.45 kg).
//
// function convertHeight(value) {
//     units = {cm: 1, ft: 30.48};
//
//     return parseInt(value) * (value.toLowerCase().endsWith('cm') ? units.cm : units.ft);
// }
//
// function convertWeight(value) {
//     units = {kg: 1, lb: 0.45};
//
//     return parseInt(value) * (value.toLowerCase().endsWith('kg') ? units.kg : units.lb);
// }
//
// function findHeaviest(people) {
//
//     const sorted = people
//         .sort((pers1, pers2) => convertWeight(pers2.weight) - convertWeight(pers1.weight));
//
//     return sorted
//         .filter(({weight}) => weight === sorted[0].weight)
//         .map(({name}) => name);
// }
//
// function bestRatio(people) {
//
//     const sorted = people
//         .sort((pers1, pers2) => pers2.win_streak.win / pers2.win_streak.loss - pers1.win_streak.win / pers1.win_streak.loss);
//
//     return sorted
//         .filter(({win_streak}) => win_streak.win / win_streak.loss === sorted[0].win_streak.win / sorted[0].win_streak.loss)
//         .map(({name}) => name);
// }
//
// function highestBMI(people) {
//
//     const sorted = people
//         .sort((pers1, pers2) => convertWeight(pers2.weight) / convertHeight(pers2.height) - convertWeight(pers1.weight) / convertHeight(pers1.height));
//
//     return sorted
//         .filter(({weight, height}) => convertWeight(weight) / convertHeight(height) === convertWeight(sorted[0].weight) / convertHeight(sorted[0].height))
//         .map(({name}) => name);
// }




const hipHopSongs1990s = [
    {
        artist: "Dr. Dre",
        recordLabel: "Death Row Records",
        song: "Nuthin' But a G Thang",
        peakChartPosition: "2",
        year: "1992"
    },
    {
        artist: "Snoop Doggy Dogg",
        recordLabel: "Death Row Records",
        song: "Gin and Juice",
        peakChartPosition: "8",
        year: "1993"
    },
    {
        artist: "Notorious B.I.G.",
        recordLabel: "Bad Boy Records",
        song: "Juicy",
        peakChartPosition: "27",
        year: "1994"
    },
    {
        artist: "Tupac Shakur",
        recordLabel: "Death Row Records",
        song: "Dear Mama",
        peakChartPosition: "9",
        year: "1995"
    },
    {
        artist: "The Fugees",
        recordLabel: "Ruffhouse/Columbia Records",
        song: "Killing Me Softly",
        peakChartPosition: "1",
        year: "1996"
    },
    {
        artist: "Puff Daddy",
        recordLabel: "Bad Boy Records",
        song: "I'll Be Missing You",
        peakChartPosition: "1",
        year: "1997"
    },
    {
        artist: "Jay-Z",
        recordLabel: "Roc-A-Fella Records",
        song: "Can't Knock The Hustle",
        peakChartPosition: "23",
        year: "1997"
    },
    {
        artist: "Lauryn Hill",
        recordLabel: "Ruffhouse/Columbia Records",
        song: "Doo Wop (That Thing)",
        peakChartPosition: "1",
        year: "1998"
    },
    {
        artist: "Outkast",
        recordLabel: "LaFace/Arista Records",
        song: "Rosa Parks",
        peakChartPosition: "55",
        year: "1998"
    },
    {
        artist: "Eminem",
        recordLabel: "Aftermath/Interscope Records",
        song: "My Name Is",
        peakChartPosition: "1",
        year: "1999"
    }
];