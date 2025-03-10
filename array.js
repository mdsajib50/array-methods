// const numArr = [1, 2, 3, 4, 5, 7, [89, 0, 9, [8, 40, 3]]];

// const newArr = [num1, num2, num3, , , , [num4, num5, num6, [num7, num8, num9]]] = [1, 2, 3, 4, 5, 7, [89, 0, 9, [8, 40, 3]]];

// console.log(num7);
// console.log(newArr[6][3][0]);

//01. Create an array of 5 elements using the Array Constructor.

// const arrConstructor = new Array(1, 2, 3, 4, 5);
// console.log(arrConstructor);

// 02 Create an array of 3 empty slots.

// const emptyArr = new Array(3);
// console.log(emptyArr);

// 03 Create an array of 6 elements using the Array literals and access the fourth element in the array using its length property.
const arrLiteral = [1, 2, 3, 10, 5, 6]
const len = arrLiteral.length - 3;
// console.log(len);

// 04 Use the for loop on the above array to print elements in the odd index.
// for (let index = 0; index < arrLiteral.length; index++) {

//      // console.log(arrLiteral[ele])
//      if ( Number(index % 2 === 1)) {
//           console.log(arrLiteral[index])
//      }
// }
// 05 Add one element at the front and the end of an array.
// let addFirstEle = arrLiteral.unshift(0);
// console.log(addFirstEle, arrLiteral);
// let addLastEle = arrLiteral.push(7);
// console.log(arrLiteral);

// 06: Remove an element from the front and the end of an array.

// let numArr = [1, 2, 3, 4, 5]
// console.log(numArr.shift())
// console.log(numArr.pop())

// 07: Create an array containing the name of your favourite foods(10 foods). Destructure the 6th food element from the array using destructuring.
let favFoods = ["rice", 'egg', "fish", "meat", "banana", "orange", "nodolles", "shorma","apple","guava"];

// let [, , , , , orange] = favFoods;
// console.log(orange)

// 08: Take out the last 8 food items from the above array using the Array destructuring. Hint: rest parameter.

let [, , ...lastFoods] = favFoods;
console.log(lastFoods)
// 09: Clone an Array(Shallow cloning);
let favFoodsCopy = [...favFoods];
console.log(favFoodsCopy)

// 10: Empty an array using its length property
console.log(favFoodsCopy.length = 0)
console.log(favFoodsCopy)

// 11: Create an array of 10 elements(number 1 to 10). Resize the array to length 6 once you find the number 5 in that array. Hint: Use for-loop.
let numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let index = 0; index < numArr.length; index++) {
     const element = numArr[index];
     if (element === 5) {
          numArr.length = 6;
          console.log(numArr.length);
          console.log(numArr)
          break
          
     }
     
     
}

// 12: Create an Array of 10 elements. Use the splice() method to empty the array.
numArr.splice(0, numArr.length);
console.log(numArr);

     // 13: Create an Array of 10 elements. You can empty the array in multiple ways: using the length property, using the pop() method, using the shift() method, setting the array with [], or the splice() method. Which among these methods are most efficient and why?
     
// ` The length property is very efficient, because for optimal performance and simplicity, setting the array's length property to 0 is generally the most efficient method to empty an array, as it directly modifies the existing array and ensures all references are updated.

// `

     // 14: What happens when you concatenate two empty arrays?
     
//      ` ​In JavaScript, using the + operator to concatenate two empty arrays ([] + []) results in an empty string (""). This occurs because the + operator, when applied to arrays, first converts them to strings. An empty array converts to an empty string, so concatenating two empty arrays yields an empty string. To concatenate arrays properly in JavaScript, use the concat() method,its provide empty [] array.
// `
// 15: How can you check if a value is partially matching with any of the elements of an Array?

//      `To determine if a value partially matches any element in an array, you can utilize JavaScript's array iteration methods in combination with the String.prototype.includes() method. This approach checks if a substring exists within any of the array's elements.

// `
const fruits = ["Banana", "Orange", "Apple", "Mango"];
const searchTerm = "Man";

// const hasPartialMatch = fruits.some(fruit => {
//      return fruit.includes(searchTerm);
// });
const hasPartialMatch = fruits.some(fruit => fruit.includes(searchTerm));
     console.log(hasPartialMatch);

const findWithMan = fruits.find((value) => value.includes(searchTerm));

console.log(findWithMan);

const filterWithMan = fruits.filter((value) => value.includes(searchTerm));
console.log(filterWithMan);
// 16: What is the difference between the slice() and splice() methods?
     // slice(): Does not alter the original array; returns a new array.
     // splice(): Modifies the original array by adding or removing elements.
     // slice(): Returns a new array containing the extracted elements.
     // splice(): Returns an array of the removed elements.

// 17: Create an Array of alphanumeric strings. Sort the elements in both ascending and descending orders. You must be doing this in an immutable way such that the source array never gets modified.

const alphanumericArray = ["A1B2C3", "X9Y8Z7", "M4N5O6", "P7Q8R9", "D3E2F1"];
function compare(a, b) {
     if (a > b) return 1;
     if (a == b) return 0;
     if (a < b) return -1;
     
};
// let sortedArrAsc = alphanumericArray.toSorted();
// let sortedArrDsc = alphanumericArray.toSorted().reverse();
// console.log(sortedArrDsc, sortedArrAsc);

const sortedByNumAsc = alphanumericArray.toSorted((a, b) => {
     const numA = parseInt(a.match(/\d+/g || ["0"]).join(''));
     const numB = parseInt(b.match(/\d+/g || ["0"]).join(''));
     // console.log(parseInt(a.match(/\d+/g || ["0"]).join('')));
     console.log(numA, numB);
     return numA - numB;
});
const sortedByNumDsc = alphanumericArray.toSorted((a, b) => {
     const numA = parseInt(a.match(/\d+/g).join(''));
     const numB = parseInt(b.match(/\d+/g).join(''));
     return numB - numA;
});
console.log(sortedByNumAsc, sortedByNumDsc);

// 18: Can you give examples of sparse and dense arrays?

// A dense array is an array where every index between 0 and length - 1 has a defined value (no missing or empty slots).

const denseArray = [1, 2, 3, 4, 5];

// A sparse array has empty or missing slots because some indexes are unassigned.
const sparseArray = new Array(5);

// 19: Give a practical usages of the .fill() method

// 1. Initializing arrays with default values.

// 2. Resetting or clearing array values.

// 3. Preparing arrays for further processing (e.g., before mapping).

// 4. Creating buffers or repeated values for data processing.

// 5. Partially updating sections of an array.

// 6. Generating test data or repeated strings.

// 7. Security by overwriting sensitive data.

// 8. Algorithmic needs (e.g., dynamic programming initializations).

// 20: How to convert an array to a string?
let strArr = denseArray.toString();
console.log(typeof strArr);

const employees = [
     { id: 1, name: "Alice", departmentId: 1, salary: 5000 },
     { id: 2, name: "Bob", departmentId: 2, salary: 7000 },
     { id: 3, name: "Charlie", departmentId: 3, salary: 4500 },
     { id: 4, name: "Diana", departmentId: 1, salary: 5500 },
     { id: 5, name: "Edward", departmentId: 2, salary: 8000 },
     { id: 6, name: "Fiona", departmentId: 4, salary: 6000 },
     { id: 7, name: "George", departmentId: 3, salary: 5200 },
     { id: 8, name: "Helen", departmentId: 4, salary: 7200 },
     { id: 9, name: "Ian", departmentId: 2, salary: 4800 },
     { id: 10, name: "Jane", departmentId: 1, salary: 5100 },
];
   
const departments = [
     { id: 1, name: "HR" },
     { id: 2, name: "Engineering" },
     { id: 3, name: "Marketing" },
     { id: 4, name: "Sales" },
];
   
// 21: Can you filter employees who work in the "Engineering" department?
const findDepId = departments.find((crValue, index) =>crValue.name === 'Engineering');
console.log(findDepId);

const filterName = employees.filter(value => value.departmentId === findDepId.id);
console.log(filterName.map(name=>name.name));

//  T-022: Create a new array that combines employee names and department names in the format: "Alice (HR)".
const empName = employees.map(employee => { return (employee.name, employee.departmentId) });
// console.log(empName)
const depName = departments.map(department => {return department.id,`(${department.name})`});
const newArr = (empName, depName) => {
     if (empName) {
          
     }
}
console.log(empName)
console.log(newArr);
console.log(depName)

//  T-023: Find the highest salary among employees.

//  T-024: Check if there is at least one employee in the "Sales" department.

//  T-025: Write a function to filter employees earning more than 6000.

//  T-026: Create an array of employee names only.

//  T-027: Calculate the total salary of all employees using

//  T-028: Is there any employee earning less than 5000?

//  T-029: Find the first employee who earns exactly 5100.

//  T-030: Find the last employee in the "HR" department.

//  T-031: Find the first employee in the "Marketing" department.

//  T-032: Check if all employees earn more than 4000.

//  T-033: Find the last employee in the "HR" department.

//  T-034: Verify if all employees belong to a department listed in the departments array.

//  T-035: Log each employee's name and department name to the console.

//  T-036: Extract all employee skill names into a single array.

//  T-037: Increment each employee's salary by 10%

//  T-038: Assume each employee can have multiple skills. Create an array of employee skills and flatten them. Example: [{name: "Alice", skills: ["Excel", "Management"]}, ...].

//  T-039: Find the total salary of all employees working in the "Engineering" department.

//  T-040: Check if there is any department where all employees earn more than 5000.

