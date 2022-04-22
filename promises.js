let promise = new Promise(function(resolve, reject) {
    // code to be executed
});

const myFriendHasApprovedMyPosition = true;

let promise2 = new Promise(function(resolve, reject) {
    if (myFriendHasApprovedMyPosition){
        resolve("Hooray! Now I'm a true programmer!");
    } else {
        reject(new Error("Whoops! Have to study more =("));
    }
});

//Now, in this situation, the browser has launched the promise function immediately,
// but the resolve function will be called only in 5 seconds.
// This is particularly helpful when we need to load data from a remote source.
let promise = new Promise(function(resolve, reject) {
    setTimeout(() => resolve("I have completed"), 5000);
});

// Promise states
//pending: the initial state when a promise has launched but hasn't settled;
// fulfilled: the promise has completed successfully, the resolve function is called;
// rejected: the promise has failed, the reject function is called.

let passingExam = myPoints => {
    return new Promise((resolve, reject) => myPoints >= 90 ?
        resolve("You are enrolled!") :
        reject("Sorry, you haven't passed the Math exam"));
};

//"then", "catch" and "finally" methods
let checkingText = new Promise((resolve, reject) => isCorrectText ?
    resolve(success) :
    reject(err)
);
console.log(checkingText);

checkingText
    .then(function successStatus(response) {
        console.log(response);
        return response;
    })
    .catch(function failStatus(error) {
        console.log(error);
        return error;
    })
    .finally(function stopLoader() {
        console.log("The loader has stopped");
    });

loadData("https://mywebsite.com/loadRoles")
    .then(function() {
        return loadData("https://mywebsite.com/loadUserInfo");
    })
    .then(function(user) {
        return loadData(`https://mywebsite.com/loadBanner_${user.id}`);
    })
    .catch(function(error) {
        console.log("Oops! An error occured!")
    });


//
function hasDownloaded (value) {
    const promise = new Promise(function(resolve, reject){
        if (value === "true"){
            resolve("Now you can watch the video!");
        } else {
            reject("Oops! An error occurs");
        }
    });
    promise
        .then(function successStatus(response) {
            console.log(response);
            return response;
        })
        .catch(function failStatus(error) {
            console.log(error);
            return error;
        });
    return promise;
}