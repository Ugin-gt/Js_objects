'use strict';

// Даны числа 4, -2, 5, 19, -130, 0, 10. Найдите минимальное и максимальное число.
// минимальное значение
function showMinValue() {
  let min = arguments[0];
  for (let i = 0; i < arguments.length; i++) {
    if (arguments[i] < min) {
      min = arguments[i];
    }
  }
  return min;
}
// максимальное значение
function showMaxValue() {
  let max = arguments[0];
  for (let i = 0; i < arguments.length; i++) {
    if (arguments[i] > max) {
      max = arguments[i];
    }
  }
  return max;
}

// Дан массив arr. Найдите среднее арифметическое его элементов.
// Проверьте задачу на массиве с элементами 12, 15, 20, 25, 59, 79.
const newArray = [12, 15, 20, 25, 59, 79];
function showMiddleValue(arr) {
  let result = 0;
  for (let i = 0; i < arr.length; i++) {
    result += arr[i];
  }
  return result /= arr.length;
}

// =========(Math.random)==========
// Выведите на экран случайное целое число от 1 до 100.

const randomValue = function randomValue() {

  return Math.ceil((Math.random() * 100) + 1);
}
console.log(randomValue());

// Заполните массив 10-ю случайными целыми числами. 
const randomArray = [];
for (let i = 0; i < 10; i++) {
  randomArray.push(randomValue());
}
console.log(randomArray);


// 1.Даны два массива: [1, 2, 3] и [4, 5, 6]. Объедините их вместе. 
// Метод concat() возвращает новый массив, состоящий из массива,
// на котором он был вызван, соединённого с другими массивами 
// и/или значениями, переданными в качестве аргументов.
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = arr1.concat(arr2);
console.log(arr3);

// 2.Дан массив [1, 2, 3]. Сделайте из него массив [3, 2, 1]. 
// Метод reverse() на месте переставляет элементы массива,
// на котором он был вызван, изменяет массив и возвращает ссылку на него.
const arr4 = [1, 2, 3];
console.log(arr4.reverse());

// 3. Дан массив [1, 2, 3]. Добавьте ему в конец элементы 4, 5, 6. 
// Метод push() добавляет один или более элементов в конец массива
// и возвращает новую длину массива.
const arr5 = [1, 2, 3];
arr5.push(4);
arr5.push(5);
arr5.push(6);
console.log(arr5);

// 4. Дан массив [1, 2, 3]. Добавьте ему в начало элементы 4, 5, 6.
// Метод unshift() добавляет один или более элементов в начало массива 
// и возвращает новую длину массива.
const arr6 = [1, 2, 3];
arr6.unshift(4, 5, 6);
console.log(arr6);

// 5. Дан массив ['js', 'css', 'jq']. Выведите на экран первый элемент и удалите его.
// Метод shift() удаляет первый элемент из массива
// и возвращает его значение. Этот метод изменяет длину массива.
const arr7 = ['js', 'css', 'jq'];
console.log(arr7[0]);
arr7.shift();
console.log(arr7);

// 6. Дан массив ['js', 'css', 'jq']. Выведите на экран последний элемент.
// Метод pop() удаляет последний элемент из массива и возвращает удалённое значение.
const arr71 = ['js', 'css', 'jq'];
console.log(arr71[2])
arr7.pop();
console.log(arr71);

// Метод slice() возвращает новый массив, содержащий копию части исходного массива.
// arr.slice([begin[, end]]),включая начальный указанный индекс массива и исключая конечный(необязательный)
// метод slice() копирует ссылки на объекты в новый массив. И оригинал, и новый массив
// ссылаются на один и тот же объект. То есть, если объект по ссылке будет изменён, 
// изменения будут видны и в новом, и в исходном массивах.
// 7. Дан массив [1, 2, 3, 4, 5]. С помощью метода slice запишите в новый элементы [1, 2, 3].
const arr8 = [1, 2, 3, 4, 5];
const slice1 = arr8.slice(0, 3);
console.log(slice1);

// 8. Дан массив [1, 2, 3, 4, 5]. С помощью метода slice запишите в новый элементы [4, 5].
const slice2 = arr8.slice(3);
console.log(slice2);


// Метод splice() изменяет содержимое массива, удаляя существующие элементы и/или добавляя новые.
// const myFish = ['angel', 'clown', 'trumpet', 'sturgeon'];
// const removed = myFish.splice(0, 2, 'parrot', 'anemone', 'blue');
// Удаляет 2 элемента начиная(включая)с индекса 0 и вставляет "parrot", "anemone" и "blue"
// 9. Дан массив [1, 2, 3, 4, 5]. С помощью метода splice преобразуйте массив в [1, 4, 5].
const arr9 = [1, 2, 3, 4, 5];
arr9.splice(1, 2);
console.log(arr9);

// 10. Дан массив [1, 2, 3, 4, 5]. С помощью метода splice запишите в новый массив элементы [2, 3, 4].
const arr10 = [1, 2, 3, 4, 5];
const splice = arr10.splice(1, 3);
console.log(splice);

// 11. Дан массив [1, 2, 3, 4, 5]. С помощью метода splice сделайте из него массив [1, 2, 3, 'a', 'b', 'c', 4, 5].
const arr11 = [1, 2, 3, 4, 5];
arr11.splice(3, 0, "a", "b", "c")
console.log(arr11);

// 12. Дан массив [1, 2, 3, 4, 5]. С помощью метода splice сделайте из него массив [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e'].
const arr12 = [1, 2, 3, 4, 5];
arr12.splice(1, 0, 'a', 'b');
arr12.splice(-2, 0, 'c');
arr12.splice(-1, 0, 'e');
console.log(arr12);

// Метод sort() на месте сортирует элементы массива и возвращает отсортированный массив.
// Сортировка не обязательно устойчива. Порядок cортировки по умолчанию соответствует
// порядку кодовых точек Unicode. Для корректного вывода использовать function compareNumbers(a, b) {
//   return a - b;}
// 13. Дан массив [3, 4, 1, 2, 7]. Отсортируйте его.
const unSortArr = [3, 4, 1, 2, 10, 7, 200, 400];
unSortArr.sort(function (a, b) {
  return a - b;
});
console.log(unSortArr);

// Метод Object.keys возвращает массив строковых элементов, соответствующих
// именам перечисляемых свойств, найденных непосредственно в самом объекте.
// Порядок свойств такой же, как и при ручном перечислении свойств в объекте через цикл.
// 14. Дан объект {js:'test', jq: 'hello', css: 'world'}. Получите массив его ключей.
const obj = { js: 'test', jq: 'hello', css: 'world' };
console.log(Object.keys(obj));

// 15. Необходимо создать функцию hasElem, которая параметрами будет принимать массив и строку, 
// и возвращать true, если строка есть в массиве, и false - если нет
function hasElem(array, string) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === string) {
      return true;
    }
  }
  return false;
}
const Array = [7, 4, 3, 5, 'hello'];
const test = 'hello';
console.log(hasElem(Array, test));//true

// 16. Дан массив с числами. Проверьте, что в этом массиве есть указанное число. 
// Если есть - вернуть true, а если нет - вернуть false.
// Метод indexOf() возвращает индекс первого вхождения указанного значения
// в строковый объект String, на котором он был вызван, начиная с индекса fromIndex.
// Возвращает - 1, если значение не найдено.
const myArray = [2, 3, 5, 1, 53, 0];
console.log(myArray.indexOf(7) != -1);//false 
console.log(myArray.indexOf(53) != -1);//true 

// 17. Дан массив с числами. Проверьте, есть ли в нем два одинаковых числа подряд. 
// Если есть -  вернуть true, а если нет - вернуть false.
function checkEqualNeighbors(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === array[i + 1]) {
      return true;
    }
  }
  return false;
}
const myArrNum = [1, 4, 3, 78, 78];
console.log(checkEqualNeighbors(myArrNum));