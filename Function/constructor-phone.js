function Phone(name, height, width, screenSize, resolution) {
    this.name = name;
    this.height = height;
    this.width = width;
    this.screenSize = screenSize;
    this.resolution = resolution;
}

const iPhone11ProMax  = new Phone('iPhone11ProMax',
                                    '158',
                                    '77.8',
                                '5.8',
                                '12');
console.log(iPhone11ProMax)