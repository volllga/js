function checkTheDate(value){
    if(typeof value === "number" && value > 0
                                && value < 8
                                && Number.isInteger(value)) {
        switch (value) {
            case 6:
            case 7:
                console.log('No, this is your well-deserved weekend!');
                break;
            default:
                console.log('Yes, you should go to work');
                break;
        }
    } else {
        console.log('Please, print integer between 1 - 7');
    }
}

checkTheDate('5.5');
