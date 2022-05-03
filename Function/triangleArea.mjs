//Через сторону и прилежащие к ней углы
// В формуле в синусы передаются градусы, но синус в js принимает на вход радианы

const radians = (degrees) => degrees * (Math.PI / 180); //переводим градусы в радианы

export default function triangleArea(side, angle1, angle2) {
    const sin1 = Math.sin(radians(angle1));
    const sin2 = Math.sin(radians(angle2));
    const sin3 = Math.sin(Math.PI - radians(angle1 + angle2));

    return (1 / 2) * side * side * ((sin1 * sin2) / sin3);
};

console.log(triangleArea(3, 60, 60)) //3.8971143170299736