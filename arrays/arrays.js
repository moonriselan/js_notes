const data = [
    {
        name: 'pawel',
        age: 37,
        city: 'krakow',
        hobbies: ['js', 'python', 'drugs']
    },
    {
        name: 'Filip',
        age: 20,
        city: 'krakow',
        hobbies: ['js', 'sleep', 'eat']
    },
    {
        name: 'andrzej',
        age: 32,
        city: 'krakow',
        hobbies: ['programming','banjo','guitar']
    },
    {
        name: 'maciek',
        age: 35,
        city: 'katowice',
        hobbies: ['alcohol', 'programing', 'cars']
    },
    {
        name: 'bartek',
        age: 21,
        city: 'Drogomyśl',
        hobbies: ['strusie', 'js']
    },
    {
        name: 'oliver',
        age: 20,
        city: 'krakow',
        hobbies: ['technology', 'music production', 'bajking 🚴🏻']
    },
    {
        name: 'jakub',
        age: 20,
        city: 'krakow',
        hobbies: ['gaming', 'alcohol', 'sleeping']
    },
    {
        name: 'maria',
        age: 24,
        city: 'warsaw',
        hobbies: ['books', 'volleyball', 'programming']
    }
]

// function avgAge(items){
//     let totalAge = 0;
//
//     for (const item of items) {
//         totalAge += item.age;
//     }
//     return totalAge/ items.length
// }
//
// function avgAgePeopleFromKrakow(items){
//     let totalAge = 0;
//     let counter = 0;
//
//     for (let i =0; i < items.length; i++){
//         if (items[i].city.toLowerCase() === 'krakow'){
//             counter++;
//             totalAge += items[i].age;
//         }
//     }
//     return totalAge / counter;
// }

// function getAllNames(elements){
//     const table = [];
//     let index = 0
//
//     while (index < elements.length){
//         table.push(elements[index].name)
//         index++;
//     }
//     return table
// }
// function capitalize(name){
//     return name[0].toUpperCase() + name.slice(1);
// }
//
// function getPeoplesWhoLovesJS(elements){
//     const names = []
//
//     for (const element of elements){
//         if (element.hobbies.includes('js')){
//             names.push(capitalize(element.name))
//         }
//     }
//     return names.join(', ')
// }
//
//
//
// console.log(getPeoplesWhoLovesJS(data))

function getAgeOfPeopleWithNameLengthGreaterThan5(persons){
    const ageArray = [];

    for (const person of persons){
        if (5 < person.name.length){
            ageArray.push(person.age)
        }
    }
    return ageArray
}

console.log(getAgeOfPeopleWithNameLengthGreaterThan5(data))