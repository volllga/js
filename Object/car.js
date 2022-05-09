let car = {
    'color': 'black'
}

car.color = 'green';

car.power = (num) => {
    console.log('Engine power', num);
}

car.power(250);

console.log(car);
