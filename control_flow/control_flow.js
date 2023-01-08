// const temperature = 32;
//
// if (temperature >= 22) {
//     console.log ('ciepło');
// } else if (temperature < 22){
//     console.log('zimno')
//
// } else {
//     console.log('średnio');
// }

// switch (temperature) {
//     case true:
//         console.log("ciepło");
//         break;
//     case false:
//         console.log("zimno");
//         break;
//     default:
//         console.log ("średnio");
// }
//
// const grade = 4;
//
// switch (grade) {
//     case 1:
//         console.log("pala");
//         break;
//     case 2:
//         console.log("dopuszczający");
//         break;
//     case 3:
//         console.log("dostateczny");
//         break;
//     case 4:
//         console.log("dobry");
//         break;
//     case 5:
//         console.log("bardzo dobry");
//         break;
//     default:
//         console.log("niepoprawna ocena");
// }

const names = ["ala", "ola", "ela", "ula"];
const namesUpper = [];

for (let i = 0; i < names.length; i++) {
 namesUpper.push(names[i] [0].toUpperCase() + names[i].slice(1)); //konkatenacja - laczenie ciagow

}

console.log(namesUpper);