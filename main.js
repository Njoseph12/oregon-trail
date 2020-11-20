class Traveler {
  constructor(name) {
    this.name = name;
    this.food = 1;
    this.isHealthy = true;
  }
  hunt() {
    this.food += 2;
  }
  eat() {
    if (this.food === 0) {
      this.isHealthy = false;
    } else {
      this.food--;
    }
  }
}
const billy = new Traveler("billy");
console.log(billy);
billy.hunt();
console.log(billy);
billy.eat();
console.log(billy);
billy.eat();
console.log(billy);

class Wagon {
  constructor(capacity) {
    this.capacity = capacity;
    this.passengers = [];
  }
  getAvailableSeatCount() {
    let numOfEmptySeats = this.capacity - this.passengers.length;
    return numOfEmptySeats;
  }
  join(traveler) {
    if (this.getAvailableSeatCount() > 0) {
      this.passengers.push(traveler);
    }
  }
  shouldQuarantine() {
    for (let index = 0; index < this.passengers.length; index++) {
      this.passengers[index].isHealthy;
      if (this.passengers[index].isHealthy === false) {
        return true;
      }
    }
    return false;
  }
  totalFood() {
    let sum = 0;
    for (let i = 0; i < this.passengers.length; i++) {
      this.passengers[i].food;
      sum = sum + this.passengers[i].food;
    }
    return sum;
  }
}
const bus = new Wagon(5);
console.log(bus.getAvailableSeatCount());
bus.join(billy);
console.log(bus);
console.log(bus.getAvailableSeatCount());
