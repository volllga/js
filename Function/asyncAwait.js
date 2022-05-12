// The async keyword has two main applications.
// It makes a function always return a Promise and allows us to use
// await to pause a function and resume it when the Promise is fulfilled.
//
//The await keyword makes a function wait until a Promise is fulfilled.
// Like the ordinary .then() method, await makes the function
// wait for the Promise to be fulfilled.
// It always has to be used within an asynchronous function.

async function foo() {
    return 'bar';
}

console.log(foo()); // Promise { 'bar' }

async function searchEngine(engine) {
    return new Promise((resolve, reject) => {
        if (engine === 'Google') {
            setTimeout(() => resolve('You can start googling!'), 2000);
        } else {
            reject('Sorry! Only Google is allowed.');
        }
    });
}

async function handlePromiseResult() {
    const resultOfThePromise = await searchEngine('Google'); // Wait until the promise resolves.

    console.log(resultOfThePromise); // You can start googling!
}

async function handlePromiseResult_2() {
    try {
        const resultOfThePromise = await searchEngine('Bing');
        console.log(resultOfThePromise);
    } catch(err) {
        console.log(err); // Sorry! Only Google is allowed.
    }
}


handlePromiseResult();
handlePromiseResult_2();