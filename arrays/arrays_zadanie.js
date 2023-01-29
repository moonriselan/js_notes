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

const firstSong = hipHopSongs1990s
    .filter((entry) => parseInt(entry.peakChartPosition) <= 10 && parseInt(entry.year) >= 1993 && parseInt(entry.year) <= 1997 && entry.song.split(' ').length >= 2 && entry.song.split(' ').length <= 4)
    .map((entry) => entry.artist)

// console.log(firstSong)

const secondSong = hipHopSongs1990s
    .filter((entry) => parseInt(entry.peakChartPosition) === 1 && parseInt(entry.year) >= 1995 && parseInt(entry.year) <= 1999)
    .map((entry) => entry.song)

// console.log(secondSong)


const thridSong = hipHopSongs1990s
    .filter((entry) => entry.recordLabel === 'Death Row Records' && parseInt(entry.year) >= 1990 && parseInt(entry.year) <= 1995).length

console.log(thridSong)

const football = [
    {
        team: "Real Madrid",
        foundingYear: 1902,
        nationality: "Spain",
        coach: {
            name: "Carlo Ancelotti",
            age: 63,
            nationality: "Italy"
        },
        titles: {
            ChampionsLeague: 13,
            LeagueTitles: 34,
        }
    },
    {
        team: "Barcelona",
        foundingYear: 1899,
        nationality: "Spain",
        coach: {
            name: "Xavier Hernández",
            age: 42,
            nationality: "Spain"
        },
        titles: {
            ChampionsLeague: 5,
            LeagueTitles: 26,
        }
    },
    {
        team: "Bayern Munich",
        foundingYear: 1900,
        nationality: "Germany",
        coach: {
            name: "Hansi Flick",
            age: 55,
            nationality: "Germany"
        },
        titles: {
            ChampionsLeague: 6,
            LeagueTitles: 31,
        }
    },
    {
        team: "Manchester United",
        foundingYear: 1878,
        nationality: "England",
        coach: {
            name: "Ole Gunnar Solskjaer",
            age: 46,
            nationality: "Norway"
        },
        titles: {
            ChampionsLeague: 3,
            LeagueTitles: 20,
        }
    },
    {
        team: "Paris Saint-Germain",
        foundingYear: 1970,
        nationality: "France",
        coach: {
            name: "Mauricio Pochettino",
            age: 49,
            nationality: "Argentina"
        },
        titles: {
            ChampionsLeague: 0,
            LeagueTitles: 8,
        }
    }
];

const firstFootball = football.filter((team) => team.titles.ChampionsLeague === 0).flatMap((team) => [team.team, 2022 - team.foundingYear])
console.log(firstFootball)

const secondFootball = football.sort((team1, team2) => team2.coach.age - team1.coach.age)
    .map((team) => team.coach.nationality === team.nationality ? team.team.toUpperCase() : team.team)
console.log(secondFootball)

const thirdFootball = football.filter((team) => team.nationality.toLowerCase() === 'spain').reduce((acc, ce) => acc + ce.titles.ChampionsLeague + ce.titles.LeagueTitles, 0)
console.log(thirdFootball)

const jazz = [
    {
        name: 'Miles Dewey Davis',
        city: 'Stany Zjednoczone',
        musical_instrument: 'Trębacz',
        most_popular_song: 'Blue in Green',
        listeners: '6.808.384'

    },
    {
        name: 'Krzysztof Komeda',
        city: 'Poznan',
        musical_instrument: ['pianista', 'kompozytor'],
        most_popular_song: 'Sleep Save And Warm',
        listeners: '3.578.794'
    },
    {
        name: 'Bill Evans',
        city: 'Stany Zjednoczone',
        musical_instrument: 'Saksofonista',
        most_popular_song: 'Sunday at the Village Vanguard',
        listeners: '836.860'

    },
    {
        name: 'Zbigniew Seifert',
        city: 'Krakow',
        musical_instrument: ['skrzypek', 'saksofonista'],
        most_popular_song: 'East Of The Sun',
        listeners: '6.350.825'
    },
    {
        name: 'Louis Armstrong',
        city: 'Stany Zjednoczone',
        musical_instrument: ['trębacz', 'wokalista', 'kompozytor'],
        most_popular_song: 'What a Wonderful World',
        listeners: '2.180.922'
    },
    {
        name: 'Zbigniew Namysłowski',
        city: 'Warszawa',
        musical_instrument: ['saksofonista', 'kompozytor', 'aranżer'],
        most_popular_song: 'Astigmatic',
        listeners: '2.470.357'
    }

]

//1. Wyświetl imiona wykonawców, które się urodzili w Stanach Zjednoczonych i są kompozytorami, posortuj ich w zależności od ilości słuchaczy.
//2. Wyświetl imię i najpopularniejszy utwór, który ma najwięcej słuchaczy ze wszystkich.
//3. Wyświetl imiona polskich wykonawców, posortuj według popularności i większej nazwy popularnego utworu.

const kompotyztorUSA = (jazz) => jazz
    .filter((artist) => artist.city.toLowerCase() === 'stany zjednoczone' && artist.musical_instrument.includes('kompozytor'))
    .sort((artist1, artist2) => parseInt(artist2.listeners.split('.').join('')) - parseInt(artist1.listeners.split('.').join('')))
    .map((artist) => artist.name)
    .join(', ')

console.log(kompotyztorUSA(jazz))

const mostPopularSong = (jazz) => jazz
    .sort((artist1, artist2) => parseInt(artist2.listeners.split('.').join('')) - parseInt(artist1.listeners.split('.').join('')))
    .map((artist) => ({
        name: artist.name,
        song: artist.most_popular_song
    }))[0]

console.log(mostPopularSong(jazz))

const artistsFromPoland = (jazz) => jazz
    .filter((artist) => artist.city.toLowerCase() !== 'stany zjednoczone')
    .sort((artist1, artist2) => parseInt(artist2.listeners.split('.').join('')) - parseInt(artist1.listeners.split('.').join('')) && artist2.most_popular_song.split(' ').length - artist1.most_popular_song.split(' ').length)
    .map((artist) => artist.name)
    .join(', ')

console.log(artistsFromPoland(jazz))