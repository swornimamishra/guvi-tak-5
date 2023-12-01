//3. write a "person" class to hold all the details in javascript

class Person {
    constructor(name, age, address, email, phone) {
      this.name = name;
      this.age = age;
      this.address = address;
    }
    displayDetails() {
      console.log(`Name: ${this.name}`);
      console.log(`Age: ${this.age}`);
      console.log(`Address: ${this.address}`);
    }
    get fullName() {
      return this.name;
    }
    set fullName(newName) {
      this.name = newName;
    }
  }
  const person = new Person("sushant mishra", 27, "Kakori,Luckhnow,Uttar Pradesh");
  person.displayDetails();
  
  console.log("Full Name:", person.fullName);
  person.fullName = "sushant vipin mishra";
  console.log("Updated Full Name:", person.fullName);
  
  //4. write a class to calculate uber price in javascript
  
  class UberCalculator {
    constructor(baseFare, costPerKilometer, costPerMinute) {
      this.baseFare = baseFare;
      this.costPerKilometer = costPerKilometer;
      this.costPerMinute = costPerMinute;
    }
    calculateFare(distance, duration) {
      const distanceCost = distance * this.costPerKilometer;
      const durationCost = duration * this.costPerMinute;
      const totalFare = this.baseFare + distanceCost + durationCost;
      return totalFare;
    }
  }
  const uberX = new UberCalculator(5, 1.5, 0.5);
  
  const distance = 10;
  const duration = 20;
  
  const totalFare = uberX.calculateFare(distance, duration);
  
  console.log(`Uber Fare: $${totalFare.toFixed(2)}`);