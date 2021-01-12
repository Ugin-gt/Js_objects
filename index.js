"use strict";

// function countVowels(str) {

//   const arrayVowels = ["a", "e", "i", "o", "u"];

//   return str
//   .split(' ');
//   .filter((char)) => arrayVowels.includes

class UserClass {
  constructor(name, surname, age) {
    this.name = name;
    this.surname = surname;
    this.age = age;
  }
  get fullName() {
    return `${this.name} ${this.surname}`;
  }
set fullName(newFullname)
if (typeof newFullname !== 'string') {
  throw new TypeError ('Name must be a string');
}

const nameArray = newFullname.split(' ');
this.name = nameArray[0];
this.surname nameArray

  isAdult() {
    return this.age >= 18;
  }
}
const user = new UserClass("Vlad", "Test", 50);
const user2 = new UserClass("Masha", "Medved", 10);

class WorkerSalary {
  constructor(nameW, surnameW, workingdays, salaryforday) {
    this.nameW = nameW;
    this.surnameW = surnameW;
    this.workingdays = workingdays;
    this.salaryforday = salaryforday;
  }
  getSalary() {
    return this.salaryforday * this.workingdays;
  }
}
const AdminSalary = new WorkerSalary("Masha", "Medvedeva", 10, 500);

// Вес авто с топливом

class Auto {
  constructor(model, weight) {
    this.model = model;
    this.ownWeight = weight;
  }
}

class Fuel {
  constructor(fuel, volume, density) {
    this.fuel = fuel;
    this.volume = volume;
    this.density = density;
  }
  getWeight() {
    return this.volume * this.density;
  }
}
return TotalAutoWeight =(this.weight)+ Fuel(getWeight(this.volume*this.density));

//const TotalAutoWeight = new AutoWeight(BMW, 1580, 0.81);


class Friend {
  constructor (name,appleAmount,friend) {
this.name = name;
this.appleAmount = appleAmount;
this.friend = friend;
  }

getSumApple() {

  return this.appleAmount + this.friend.appleAmount ;
  } 
};




class fuel2 { 
constructor(volume1, density1) {
  this.volume1 = volume1;
  this.density1 = density1;
    }

    set volume1 (v) {
      // setter
      if (typeof v !== 'number') {
        throw new TypeError ('Data must be a numbers');

      }
    }
  get volume1 (v) {
    // getter
    
    return this._volume;
      };
    }