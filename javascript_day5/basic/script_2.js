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
        return `This car is a <span>${this.brand}</span> and model  <span>${this.model}</span> with <span>${this.power}</span> ps!<br><br>`
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
            return `A <span>${this.race}</span> is living in <span>${this.location}</span> with  a weight of <span>${this.weight}<span> kg!<br><br>`
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
                return `<span>${this.name}</span> is from <span>${this.location}</span> and his age is <span>${this.age}</span> years!<br><br>`
                }
            }
            
            const person = document.getElementById("person")
            
            person.innerHTML += new persons("Heinz Fischer", "Austria", 68).person_info()
            person.innerHTML += new persons("Arslan Karaman", "Türkiye", 35).person_info()
            person.innerHTML += new persons("Zikri Malawi", "Malaysia", 18).person_info()