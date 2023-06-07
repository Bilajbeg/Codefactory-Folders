class cars {
brand;
model;
power;

    constructor(brand, model, power) {
        this.brand = brand;
        this.model = model;
        this.speed = power;
    }

    info() {
    return `This car is a  ${this.brand}  and model  ${this.model} with ${this.power} ps!`
    }
}

const car_1= document.getElementById(`cars`).info()

car_1.innerHTML += new cars("Audi","A5", 240);