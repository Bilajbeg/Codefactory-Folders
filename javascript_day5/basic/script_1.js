class cars {
brand;
model;
power;

    constructor(brand, model, power) {
        this.brand = brand;
        this.model = model;
        this.power = power;
    }

    car_info() {
    return `This car is a ${this.brand} and model  ${this.model} with ${this.power} ps!<br><br>`
    }
}

const car = document.getElementById("cars")

car.innerHTML += new cars("Audi", "A6", 300).car_info()
car.innerHTML += new cars("BMW", "530d", 150).car_info()
car.innerHTML += new cars("Volkswagen", "Passat", 200).car_info()

class animals {
    race;
    location;
    weight;
    
        constructor(race, location, weight) {
            this.race = race;
            this.location = location;
            this.weight = weight;
        }
    
        animal_info() {
        return `A ${this.race} is living in ${this.location} with  a weight of ${this.weight} kg!<br><br>`
        }
    }
    
    const animal = document.getElementById("animal")
    
    animal.innerHTML += new animals("Lion", "Africa", 190).animal_info()
    animal.innerHTML += new animals("Tiger", "Asia", 300).animal_info()
    animal.innerHTML += new animals("Icebear", "North Pole", 450).animal_info()

    class persons {
        name;
        location;
        age;
        
            constructor(name, location, age) {
                this.name = name;
                this.location = location;
                this.age = age;
            }
        
            person_info() {
            return `${this.name} is from ${this.location} and his age is ${this.age} years!<br><br>`
            }
        }
        
        const person = document.getElementById("person")
        
        person.innerHTML += new persons("Heinz Fischer", "Austria", 68).person_info()
        person.innerHTML += new persons("Arslan Karaman", "Türkiye", 35).person_info()
        person.innerHTML += new persons("Zikri Malawi", "Malaysia", 18).person_info()