async function rockBand(band) {
    return new Promise(() => {
        if(band === 'Linkin Park') {
            console.log('Chester, we miss you!');
        } else {
            console.log('No matter the band we miss him anyway!');
        }
    });
}
// NOT WORK
// let rockBand_2 = async str => new Promise((resolve, reject) =>
//     str === "Linkin Park" ?
//         resolve("Chester, we miss you!") :
//         reject("No matter the band we miss him anyway!")
// );

rockBand('Linkin Park');

// console.log(rockBand_2('ddLinkin Park')); // NOT WORK

