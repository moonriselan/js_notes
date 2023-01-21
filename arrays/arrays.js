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

// function avgAge(persons){
//     let totalAge = 0;
//
//     for (const person of persons) {
//         totalAge += person.age;
//     }
//     return totalAge/ person.length
// }



// OPTIMAL!! - usage of reduce
//function avgAge(persons) {
 //   return persons.reduce((acc,ce) => acc.age + ce.age, 0) / persons.length;
//}
//function avgAge(persons) {
  //  const ages = persons.map((person) => person.age);

   // return persons.reduce((acc, ce) => acc + ce) / persons.length;
//}




//
// function avgAgePeopleFromKrakow(persons){
//     let totalAge = 0;
//     let counter = 0;
//
//     for (let i =0; i < persons.length; i++){
//         if (items[i].city.toLowerCase() === 'krakow'){
//             counter++;
//             totalAge += persons[i].age;
//         }
//     }
//     return totalAge / counter;
// }

//console.log(avgAge(data));
//console.log(avgAgeKrakow(data));

//function avgAgeKrakow(persons) {
   // const personsKrakow = persons.filter((person) => person.city.toLowerCase() === 'krakow');

  //  return personsKrakow.reduce((acc, ce) => acc + ce.age, 0) / personsKrakow.length;
//}

//function avgAgeKrakow(persons) {
    //return persons
      //  .filter((person) => person.city.toLowerCase() === 'krakow')  // chaining - w nieskonczonosc mozna, jesli jakis typ danych to mozna metode zwracac
      //  .reduce((acc, ce) => acc + ce.age, 0) /
      //  persons.filter((person) => person.city.toLowerCase() === 'krakow').length;
//}


// function getAllNames(elements){
//     const names = [];
//     let index = 0
//
//     while (index < elements.length){
//         table.push(elements[index].name)
//         index++;
//     }
//     return names
// }

//function getAllNames(persons) {
  //  return persons.map((person) => person.name )
//}

//const getAllNames = (persons) => persons.map((person) => person.name)
//const getAllNames = (persons) => persons.map((person) => person.name[0].toUpperCase() + person.name.slice(1))
//const getAllNames = (persons) => persons.map((person) => capitalize(person.name))



 //function capitalize(name){
//     return name[0].toUpperCase() + name.slice(1);
//
// }
//capitalize('jaroslaw')
//

//arrow function and function expression:
//const capitalize = (name) => name[0].toUpperCase() + name.slice(1)



// function getPeoplesWhoLovesJS(elements){
//     const names = []
//
//     for (const element of elements){
//         if (element.hobbies.includes('js')){
//             names.push(capitalize(element.name))
//         }
//     }
//return names.join(', ')
// }
//
//
//
// console.log(getPeoplesWhoLovesJS(data))

//const getPeopleWhoLovesJS = (elements) => {
  //  const peopleWhoLovesJs = elements.filter((element) => element.hobbies.includes('js'))
   // return peopleWhoLovesJs.map((element) => capitalize(element.name)).join(',')
//}

//const getPeopleWhoLovesJs = (elements) => elements
  //  .filter((element) => element.hobbies.includes('js'))
    //.map((element) => capitalize(element.name))
   // .join(',')


//const getPeopleWhoLovesJs = (elements) => elements
   // .reduce((acc, ce) => ce.hobbies.includes("js") ? acc + capitalize(ce.name) + ",": acc, "")
    //.slice(0,-2)


//function getAgeOfPeopleWithNameLengthGreaterThan5(persons){
    //const ageArray = [];

  //  for (const person of persons){
  //      if (5 < person.name.length){
  //          ageArray.push(person.age)
   //     }
  //  }
 //   return ageArray
//}

//const getAgeOfPeopleWithNameLengthGreaterThan5 = (persons) => persons
 //   .filter((person) => person.name.length > 5)
  //  .map((person) => person.age )

//console.log(getAgeOfPeopleWithNameLengthGreaterThan5(data))



// Czesciowo imperatywna - krok po kroku
//const checkDataIncludesName = (items, name) => {
    //for (const item of items) {
      //  if (item.name.toLowerCase() === name.toLowerCase()) {
       // return true
      //  }

       // }
//    return false
  //  }



//Deklaratywna - definicje
//const checkDataIncludesName = (items, names) => items
   // .filter((item) => item.name.toLowerCase() === name.toLowerCase())
   // .length > 0 - mniej wydajne rozwiazanie

//const checkDataIncludesName = (items, name) => items
//.some((item) => item.name.toLowerCase() === name.toLowerCase())

//const checkAdult = (items) => {
    //for (const item of items) {
  //      if (item.age <= 18) {
   //     return false
 //       }
 //   }
  //  return true
//}

//const checkAdult = (items) => items
//.every((item) => item.age >= 18)

//const checkAdult = (items) => !items
 //   .some((item) => item.age <= 18)


//Imperative
//const getAllHobbies = (items) =>  {
// allHobbies = []

   // for (const item of items) {
      //  for (const hobby of item.hobbies) {
     //       allHobbies.push(hobby)
     //   }

   // }
 //   return allHobbies
//}

//const getAllHobbies = (items) => items
   // .map((item) => item.hobbies)
    //.flat()

//const getAllHobbies = (items) => items
 //   .flatMap((item) => item.hobbies)


//const getAllHobbies = (items) => items
//    .reduce((acc, ce) => [...acc,...ce.hobbies], [] )  //----- spread operator



//const getAllUniqueHobbies = (items) => new Set(items.flatMap((item) => item.hobbies))


//const getAllUniqueHobbies = (items) => items
//.reduce((acc, ce) => new Set([...acc, ...ce.hobbies]), new Set())

//const x = [{pawel:20}, {filip:15}]

//const GetCustomObject = (items) => {
 //   const result = []

   // for (const item of items) {
 ///       let counter = 0
     //   for (const hobby of item.hobbies) {
      //      counter += hobby.length
     //   }
      //  result.push({[item.name]:counter})
  //  }
  //  return result
//
//}


//const getCustomObject = (items) => items
 //   .map((item) => ({
  //      [item.name]: item.hobbies.join('').length
 //   }))
