// function checkBrackets(inputString) {
//     let stack = [];
//
//     for (let char of inputString) {
//         if (char === '{') {
//             stack.push(char);
//         } else if (char === '}') {
//             if (stack.length > 0 && stack[stack.length - 1] === '{') {
//                 stack.pop();
//             } else {
//                 return char;
//             }
//         }
//     }
//
//     if (stack.length === 0) {
//         return '{}';
//     } else {
//         return '{';
//     }
// }
//
// let inputStr = "{}{}{}{}{}}}}}}{{{{}}}}}}{{{{{{";
// let result = checkBrackets(inputStr);
// console.log(result);



// ...........A......................B...........
// ...A.....................................B.....
// есть два поезда, надо узнать в какой точке они встретятся и поставить С.
//
//     ответ в консоли '........A.............C.............B'

const way ='...A.....................................B.....'

let ATrain = 0
let BTrain = 0
function trainPath () {
    for (let i = 0; i < way.length; i++) {
        if  (way[i] === 'A') {
            ATrain = i
            console.log(ATrain)
        } else if (way[i] === 'B') {
            BTrain = i
            console.log(BTrain)
        }
    }

    let meetingPoint = (ATrain + BTrain) /2
    console.log(meetingPoint)

    let res = way.slice(0, meetingPoint) + 'C' + way.slice(meetingPoint + 1);
    console.log(res)

}

trainPath()