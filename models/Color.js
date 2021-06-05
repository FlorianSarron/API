const Color = class {
    constructor(red, green, blue) {
        this.red = red;
        this.green = green;
        this.blue = blue;
    }

    setRed(red) {
        this.red = red;
    }

    setGreen(green) {
        this.green = green
    }

    setBlue(blue) {
        this.blue = blue;
    }
}

module.exports = Color;