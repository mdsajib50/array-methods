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
// console.log(lastFoods)
// 09: Clone an Array(Shallow cloning);
let favFoodsCopy = [...favFoods];
// console.log(favFoodsCopy)

// 10: Empty an array using its length property
// console.log(favFoodsCopy.length = 0)
// console.log(favFoodsCopy)

// 11: Create an array of 10 elements(number 1 to 10). Resize the array to length 6 once you find the number 5 in that array. Hint: Use for-loop.
let numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let index = 0; index < numArr.length; index++) {
     const element = numArr[index];
     if (element === 5) {
          numArr.length = 6;
          // console.log(numArr.length);
          // console.log(numArr)
          break
          
     }
     
     
}

// 12: Create an Array of 10 elements. Use the splice() method to empty the array.
numArr.splice(0, numArr.length);
// console.log(numArr);

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
     // console.log(hasPartialMatch);

const findWithMan = fruits.find((value) => value.includes(searchTerm));

// console.log(findWithMan);

const filterWithMan = fruits.filter((value) => value.includes(searchTerm));
// console.log(filterWithMan);
// 16: What is the difference between the slice() and splice() methods?
     // slice(): Does not alter the original array; returns a new array.
     // splice(): Modifies the original array by adding or removing elements.
     // slice(): Returns a new array containing the extracted elements.
     // splice(): Returns an array of the removed elements.

// 17: Create an Array of alphanumeric strings. Sort the elements in both ascending and descending orders. You must be doing this in an immutable way such that the source array never gets modified.

const alphanumericArray = ["A1B2C3", "X9Y8Z7", "M4N5O6", "P7Q8R9", "D3E2F1"];
// function compare(a, b) {
//      if (a > b) return 1;
//      if (a == b) return 0;
//      if (a < b) return -1;
     
// };
// let sortedArrAsc = alphanumericArray.toSorted();
// let sortedArrDsc = alphanumericArray.toSorted().reverse();
// console.log(sortedArrDsc, sortedArrAsc);

const sortedByNumAsc = alphanumericArray.toSorted((a, b) => {
     const numA = parseInt(a.match(/\d+/g || ["0"]).join(''));
     const numB = parseInt(b.match(/\d+/g || ["0"]).join(''));
     // console.log(parseInt(a.match(/\d+/g || ["0"]).join('')));
     // console.log(numA, numB);
     return numA - numB;
});
const sortedByNumDsc = alphanumericArray.toSorted((a, b) => {
     const numA = parseInt(a.match(/\d+/g).join(''));
     const numB = parseInt(b.match(/\d+/g).join(''));
     return numB - numA;
});
// console.log(sortedByNumAsc, sortedByNumDsc);

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
// console.log(typeof strArr);

const employees = [
     { id: 1, name: "Alice", departmentId: 1, salary: 5000, projects: ["Project A", "Project B"] },
     { id: 2, name: "Bob", departmentId: 2, salary: 7000, projects: ["Project B", "Project C"] },
     { id: 3, name: "Charlie", departmentId: 3, salary: 4500, projects: ["Project A"] },
     { id: 4, name: "Diana", departmentId: 1, salary: 5500, projects: ["Project D", "Project E"] },
     { id: 5, name: "Edward", departmentId: 2, salary: 8000, projects: ["Project C", "Project F"] },
     { id: 6, name: "Fiona", departmentId: 4, salary: 6000, projects: ["Project G"] },
     { id: 7, name: "George", departmentId: 3, salary: 5200, projects: ["Project A", "Project H"] },
     { id: 8, name: "Helen", departmentId: 4, salary: 7200, projects: ["Project G", "Project I"] },
     { id: 9, name: "Ian", departmentId: 2, salary: 4800, projects: ["Project F", "Project J"] },
     { id: 10, name: "Jane", departmentId: 1, salary: 5100, projects: ["Project E", "Project J"] },
 ];
 

   
const departments = [
     { id: 1, name: "HR" },
     { id: 2, name: "Engineering" },
     { id: 3, name: "Marketing" },
     { id: 4, name: "Sales" },
];
   
// 21: Can you filter employees who work in the "Engineering" department?
const findDepId = departments.find((crValue, index) =>crValue.name === 'Engineering');
// console.log(findDepId);

const filterName = employees.filter(value => value.departmentId === findDepId.id);
// console.log(filterName.map(name=>name.name));

//  T-022: Create a new array that combines employee names and department names in the format: "Alice (HR)".
const findDepAll = departments.find((crValue) => crValue);
// console.log(findDepAll)
// const newArr = [...employees, ...departments];
// console.log(newArr);

const depName = departments.map(department => `(${department.name})`);
// console.log(depName)

// const empName = employees.map(employee => {
//      if (findDepAll.id === employee.departmentId) {
          
//           return `${employee.name} (${findDepAll.name})`
//      }
// });

const empName = employees.map(employee => {
     const department = departments.find(dep => dep.id === employee.departmentId && dep.name === 'Sales');
     return department ? `${employee.name} (${department.name})` : undefined;
 });
// console.log(empName.find(v =>v));
// console.log(empName)

//  T-023: Find the highest salary among employees.
// const maxSalary = employees.toSorted((objA, objB) => objB.salary - objA.salary);

// const highSalary = maxSalary.find(v =>v);
// const highSalary = employees.reduce((max, emp) => emp.salary > max ? emp.salary : max, 0);
const highSalary = Math.max(...employees.map(emp => emp.salary));

// console.log(highSalary);



//  T-024: Check if there is at least one employee in the "Sales" department.

const empNameSales = employees.map(employee => {
     const department = departments.find(dep => dep.id === employee.departmentId && dep.name === 'Sales');
     return department ? `${employee.name}` : undefined;
 });
// console.log(empNameSales.find(v =>v));

//  T-025: Write a function to filter employees earning more than 6000.

const nameEmp = employees.filter(employee => employee.salary > 6000);
// console.log(nameEmp)

//  T-026: Create an array of employee names only.
const nameEmpOnly = employees.map(employee => employee.name);
// console.log(nameEmpOnly);

//  T-027: Calculate the total salary of all employees using
const totalSalary = employees.map(employee => employee.salary).reduce((acc, currValue) => {
     acc = acc+ currValue;
     return acc
}, 0);
     
console.log(totalSalary)

//  T-028: Is there any employee earning less than 5000?
const minimumEarningEmp = employees.filter(employee => employee.salary < 5000);
console.log(minimumEarningEmp);

//  T-029: Find the first employee who earns exactly 5100.
const firstEmp = employees.find(employee => employee.salary === 5100);
console.log(firstEmp);

//  T-030: Find the last employee in the "HR" department.

// const findLastHr = employees.map(employee => employee);
// const lastEmp = departments.findLast(dep => {
//      dep.id === findLastHr.departmentId && dep.name === "HR"
//      return findLastHr
// });
// console.log(lastEmp);
const lastHrEmployee = employees.findLast(emp => {
     const department = departments.find(dep => dep.id === emp.departmentId);
     return department && department.name === "HR";
   });
   console.log(lastHrEmployee);
   

//  T-031: Find the first employee in the "Marketing" department.
const firstMarketingEmployee = employees.find(emp => {
     const department = departments.find(dep => dep.id === emp.departmentId);
     return department && department.name === "Marketing";
});

   console.log(firstMarketingEmployee);

//  T-032: Check if all employees earn more than 4000.
const allEmp = employees.filter(employee => employee.salary > 4000);
console.log(allEmp);

//  T-033: Find the first employee in the "HR" department.
const firstHrEmployee = employees.find(emp => {
     const department = departments.find(dep => dep.id === emp.departmentId);
     return department && department.name === "HR";
});
console.log(firstHrEmployee);

//  T-034: Verify if all employees belong to a department listed in the departments array.
const allEmpBelongToDep = employees.every(emp => {
     const department = departments.find(dep => dep.id === emp.departmentId);
     return department !== undefined;
});

const allEmpBelongToDep2 = employees.every(employee => employee.departmentId && employee.departmentId !== 0)
console.log(allEmpBelongToDep);

//  T-035: Log each employee's name and department name to the console.
const empNameWitDepName = employees.forEach(employee=>{
     const depName = departments.find(dep => dep.id === employee.departmentId);
     
})
console.log(empNameWitDepName);

//  T-036: Extract all employee skill names into a single array.
const allSkills = employees.flatMap(employee => employee.skills);
console.log(allSkills);

//  T-037: Increment each employee's salary by 10%
const incrementSalary = employees.map(employee => employee.salary * 0.10 + employee.salary);
console.log(incrementSalary);

//  T-038: Assume each employee can have multiple skills. Create an array of employee skills and flatten them. Example: [{name: "Alice", skills: ["Excel", "Management"]}, ...].
const empSkills=[
     "Communication",
     "Recruitment",
     "JavaScript",
     "React",
     "SEO",
     "Content Writing",
     "Recruitment",
     "HR Policies",
     "Node.js",
     "Database Management",
     "Negotiation",
     "Sales Strategies",
     "Marketing Research",
     "Social Media",
     "Customer Relationship",
     "Product Presentation",
     "Python",
     "Machine Learning",
     "Interviewing",
     "Employee Engagement"
]
const addSkillsPro = employees.forEach(employee => {
     arraySplice = empSkills.splice(0, 2);
     employee.skills = arraySplice
});
// console.log(employees)
//  T-039: Find the total salary of all employees working in the "Engineering" department.

const engineeringDept = departments.find(dept => dept.name === "Engineering");
const engineeringDeptId = engineeringDept.id;

const totalSalaryEngDep = employees
    .filter(emp => emp.departmentId === engineeringDeptId)
    .reduce((sum, emp) => sum + emp.salary, 0);

console.log(totalSalaryEngDep);



//  T-040: Check if there is any department where all employees earn more than 5000.

const departmentsWithHighSalaries = departments.filter(dept => {
     const employeesInDept = employees.filter(emp => emp.departmentId === dept.id);
     return employeesInDept.length > 0 && employeesInDept.every(emp => emp.salary > 5000);
 });
 
console.log(departmentsWithHighSalaries.map(dept => dept.name));
 
// T-041: Assume each employee has a projects array (e.g., { id: 1, name: "Alice", projects: ["Project A", "Project B"] }). Find the total number of unique projects being handled across all employees.
const projects = employees.map(employee => employee.projects).flat();
const uniqueProject=new Set(projects)
console.log(uniqueProject.size);

//  T-042: For each employee, find their department name and return an array of employee names with their department names.
const newArray = employees.map(employee => {
     const department = departments.find(dep => dep.id === employee.departmentId);
     return department ? { name: employee.name, department: department.name } : [];
});
console.log(newArray)

//  T-043: Get a list of names of employees earning more than 6000.
const empNames = employees.filter(employee => employee.salary>6000 );
console.log(empNames.map(emp=>emp.name));

//  T-044: Write a for-of loop to print the names of all employees from the employees array.
let allEmpName = '';
for (const emp of employees) {
     allEmpName += ' ' + emp.name;
};
console.log(allEmpName)

//  T-045: Using a for-of loop, print the names of employees earning more than 5000.
let employeeName = '';
for (const emp of employees) {
     emp.salary > 5000 ? employeeName += ' ' + emp.name : '';
     
}
console.log(employeeName);

//  T-046: Modify the for-of loop to destructure each employee object and log their name and salary.
let nameAndSalary = '';
for (const employee of employees) {
     let { name, salary } = employee ;
     nameAndSalary = `${name} and ${salary}`;
     
     console.log(nameAndSalary)
}

for (const { name, salary } of employees) {
     console.log(`Name: ${name}, Salary: ${salary}`);
 }
 
//  T-047: Write a for-of loop to match employees with their departments and print the results.
for (const employee of employees) {
     let department = departments.find(dep => dep.id === employee.departmentId);
     console.log(department? employee.name +' in '+ department.name:'')
     
}

//  T-048: Use Array.prototype.entries() with a for-of loop to print the index and name of each employee.

for (const [index, value] of employees.entries()) {
     console.log(index, value.name)
     
}

//  T-049: Given the array-like object below, access the second element and log it:

const arrayLike = { 0: "First", 1: "Second", length: 2 };
const conArray = Array.from(arrayLike);
console.log(conArray);
console.log(conArray.at(1));
//  T-050: Write a function that takes a variable number of arguments and converts the arguments object into a real array using Array.from.

function convertArray() {
     console.log(Array.from(arguments))
}
convertArray(1, 2, 3, 4);

//  T-051: Write a snippet to select all div elements on a webpage (using document.querySelectorAll) and convert the resulting NodeList into an array.
const divElm = document.querySelectorAll("div");
console.log(divElm)
console.log(Array.from(divElm));

//  T-052: Merge these two arrays into a single array:

const arr1 = [1, 2];
const arr2 = [3, 4];
const singleArray = arr1.concat(arr2);
console.log(singleArray);
//  T-053: Create an array of n duplicate values using Array.from. Input: Create an array with 5 "A" values. Output: ["A", "A", "A", "A", "A"]

console.log(Array.from({ length: 5 }, v =>"A"));

//  T-054: Use Array.from to convert a string like "Hello" into an array of characters.
console.log(Array.from('Hello'));
