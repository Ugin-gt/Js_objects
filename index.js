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
  getfullName() {
    return `${this.name} ${this.surname}`;
  }
  getisAdult() {
    return this.age >= 18;
  }
};
const user = new UserClass('Vlad', 'Test', 50);
const user2 = new UserClass("Masha", "Medved", 10);

console.log(user.getfullName());
console.log(user2.getisAdult());




// set fullName(newFullname)
// if (typeof newFullname !== 'string') {
//   throw new TypeError ('Name must be a string');
// }

// const nameArray = newFullname.split(' ');

// this.name = nameArray[0];
// this.surname nameArray [1];
// }

//   get isAdult() {
//     return this.age >= 18;
//   }
// }



//     class WorkerSalary {
//   constructor(nameW, surnameW, workingdays, salaryforday) {
//     this.nameW = nameW;
//     this.surnameW = surnameW;
//     this.workingdays = workingdays;
//     this.salaryforday = salaryforday;
//   }
//   getSalary() {
//     return this.salaryforday * this.workingdays;
//   }
// }
// const AdminSalary = new WorkerSalary("Masha", "Medvedeva", 10, 500);

// // Вес авто с топливом

// class Auto {
//   constructor(model, weight) {
//     this.model = model;
//     this.ownWeight = weight;
//   }
// }

// class Fuel {
//   constructor(fuel, volume, density) {
//     this.fuel = fuel;
//     this.volume = volume;
//     this.density = density;
//   }
//   getWeight() {
//     return this.volume * this.density;
//   }
// }
// return TotalAutoWeight = (this.weight) + Fuel(getWeight(this.volume * this.density));

// //const TotalAutoWeight = new AutoWeight(BMW, 1580, 0.81);


// class Friend {
//   constructor(name, appleAmount, friend) {
//     this.name = name;
//     this.appleAmount = appleAmount;
//     this.friend = friend;
//   }

//   getSumApple() {

//     return this.appleAmount + this.friend.appleAmount;
//   }
// };




// class fuel2 {
//   constructor(volume1, density1) {
//     this.volume1 = volume1;
//     this.density1 = density1;
//   }

//   set volume1(v) {
//     // setter
//     if (typeof v !== 'number') {
//       throw new TypeError('Data must be a numbers');

//     }
//   }
//   get volume1(v) {
//     // getter

//     return this._volume;
//   };
// }

// Пример наследования свойств объекта через  extends
class User {
  constructor(login, email, age, isBanned = false) {
    this.login = login;
    this.email = email;
    this.age = age;
    this._isBanned = isBanned;

  }
  get isBanned() {
    return this._isBanned;
  }

  set isBanned(v) {
    this._isBanned = v;
  }

  getFullinfo() {
    return `${this.login}:${this.email}:${this.age}`;
  }
};

class Admin extends User {
  constructor(email, age) {
    super('AdminLogin', email, age, false);

  }
  ban(user) {
    if (user instanceof User) {
      user.isBanned = true;
      return;
    }
    throw new TypeError('User Error');
  }
  unBan(user) {
    if (user instanceof User) {
      user.isBanned = false;
      return;
    }
    throw new TypeError('User Error');
  }
  toggleBan(user) {
    if (user instanceof User) {
      user.isBanned = !user.isBanned;
      return;
    }
    throw new TypeError('User Error');
  }
};

// Пример с Белками ))
class Squirrel {
  constructor(name, isMale) {
    this.name = name;
    this.isMale = isMale;

  }
  eat() {
    return `${this.name} is eating`;
  }
  climb() {
    return `${this.name} is climbing`;
  }
}

const chip = new Squirrel('Chip', true);


class FlyingSquirrel extends Squirrel {
  constructor(name, isMale, maxDistance) {

    super(name, isMale);
    this.maxDistance = maxDistance;
  }
  fly() {
    return `${this.name} is flying`;
  }
};
const tip = new FlyingSquirrel('Tip', true, 120);

class FableSquirrel extends FlyingSquirrel {
  constructor(name, isMale, maxDistance, songs) {

    super(name, isMale, maxDistance);
    this.songs = songs;
  }
  dance() {

    return `${this.name} is dancing`;
  }

  sing() {

    // this.songs.forEach((song) => console.log(song));
    return `Белка ${this.name} поет такие песни ${this.songs.join(', ')}`
  }

  climb() { // переопределение заимствованного метода climb

    // throw new Error ('Сказочные белки не лазают по деревьям');
    return `Сказочая белка ${this.name} не лазает по деревьям`;
  }

};

const dail = new FableSquirrel('Dail', true, 300,
  ['song1', 'song2', 'song3']);


// Пример с площадью фигур
class Figure {
  constructor(nameFig) {
    this._nameFig = nameFig;
  }
  getArea() { }
};
class Triangle extends Figure {
  constructor(a, b, angle) {
    super('Triangle');
    this._a = a;
    this._b = b;
    this._angle = angle;
  }
  getArea() {
    return this._a / 2 * this._b * Math.sin(this._angle);
  }
};
class Quadrat extends Figure {
  constructor(a) {
    super('Quadrat');
    this._a = a;
  }

  getArea() {
    return this._a * this._a;
  }
};
class Circle extends Figure {
  constructor(radius) {
    super('Circle');
    this._radius = radius;
  }
  getArea() {
    return Math.PI * (this._radius ** 2);
  }
};
const t = new Triangle(7, 5, 35);
const q = new Quadrat(8);
const c = new Circle(10);