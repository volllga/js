// Make the function handleResult() asynchronous.
// Within this function, use await to store the result of the Promise in a constant named resultOfThePromise.
// Use try..catch statements to handle errors.
// Use console.log() to print the constant resultOfThePromise.


async function findUserById(id) {
    return new Promise((resolve, reject) => {
        if (users[id]) {
            setTimeout(() => resolve(users[id]), 1000);
        }
        setTimeout(() => reject('No user with this id'), 1000);
    });
}

async function handleResult(number) {
    try {
        const resultOfThePromise = await findUserById(number);
        console.log(resultOfThePromise);
    } catch (err) {
        console.log('No user with this id');
    }
}

const users = ['Tom', 'Jerry', "Nick"];
console.log(handleResult(3));