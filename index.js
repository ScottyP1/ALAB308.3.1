
// ------------------------------------------------------------------------- FizzBuzz
// const FizzBuzz = (num) => {
//     let count = 1;
//     while (count <= num) {
//         let result = '';
//         if (count % 5 === 0) result += 'Fizz';
//         if (count % 3 === 0) result += 'Buzz';
//         console.log(result || count);
//         count++;
//     };
// };

// FizzBuzz(100)

// ------------------------------------------------------------------------- Prime Time

// const PrimeTime = (num) => {
//     if (!num > 1) return;

//     for (let i = 2; i * i <= num; i++) {
//         if (num % i === 0) return 'False';
//     }
//     return 'True'
// }


// console.log(PrimeTime(5));



// ------------------------------------------------------------------------- Feeling Loopy

const CSVReader = (data) => {
    data
        .split('\n')
        .forEach(item => {
            console.log(item);
        });
}

CSVReader("Index,Mass (kg),Spring 1 (m),Spring 2 (m)\n1,0.00,0.050,0.050\n2,0.49,0.066,0.066\n3,0.98,0.087,0.080\n4,1.47,0.116,0.108\n5,1.96,0.142,0.138\n6,2.45,0.166,0.158\n7,2.94,0.193,0.174\n8,3.43,0.204,0.192\n9,3.92,0.226,0.205\n10,4.41,0.238,0.232");