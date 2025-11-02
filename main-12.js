//ex 1
const user = {
  name: "Alisa",
  age: "12",
  hobby: "drawing",
  premium: true,
};
 user.mood ="happy";
 user.hobby = "skydiving";
 user.premium = false;

 const keys = Object.keys(user);
 for(const key of keys){
    console.log(`${keys}: ${user[key]}`)
 }

 //ex 2
 //ex 3
 function findBestEmployee(employees) {
   let bestEmployee = "";
   let maxTasks = 0;

   for (const [name, tasks] of Object.entries(employees)) {
     if (tasks > maxTasks) {
       maxTasks = tasks;
       bestEmployee = name;
     }
   }

   return bestEmployee;
 }

 //ex4
 function countTotalSalary(employees) {
  return Object.values(employees).reduce((total, salary) => total + salary, 0);
}

const employees = {
  Daria: 6700,
  Jose: 5500,
  Danielle: 4589,
};

console.log(countTotalSalary(employees)); 

//ex5
//ex6
function calculateTotalPrice(allProducts, productName) {
  let total = 0;

  for (const product of allProducts) {
    if (product.name === productName) {
      total = product.price * product.quantity;
      break;
    }
  }

  return total;
}


console.log(calculateTotalPrice(products, "cat")); 
console.log(calculateTotalPrice(products, "dog")); 
console.log(calculateTotalPrice(products, "horse"));  