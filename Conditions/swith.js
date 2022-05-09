const cityTo = "Paris";

switch (cityTo) {
    case "Berlin":
        console.log("The price is $100");
        break;
    case "Paris":
        console.log("The price is $120");
        break;
    case "London":
    case "Rome":
        console.log("The price is $150");
        break;
}

switch (cityTo) {
    case "Berlin":
        console.log("The price is $100");
        break;
    case "Paris":
        console.log("The price is $120");
        break;
    case "London":
        console.log("The price is $150");
        break;
    default:
        console.log("The price is $90");
        break;
}