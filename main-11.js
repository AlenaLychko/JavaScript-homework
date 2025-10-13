// const BankAccount = {
//   ownerAccount: "Daria Bova",
//   accountNumber: "123456789",
//   balance: 1000,

//   deposit(amount) {
//     this.balance += amount;
//     prompt(
//       `You have topped up your account with: ${amount}$., Remainder: ${this.balance}$.`
//     );
//   },

//   withdraw(amount) {
//     if (amount > this.balance) {
//       prompt("There are not enough funds in the account!");
//     } else {
//       this.balance -= amount;
//       prompt(`You have withdrawn${amount}$. , reminder:${this.balance}$.`);
//     }
//   },
// };

// if (
//   confirm(
//     "Do you want to top up your account? (OK - Yes, Cancel - withdraw money)"
//   )
// ) {
//   const amount = Number(prompt("enter the amount to top up:"));
//   BankAccount.deposit(amount);
// } else {
//   const amount = Number(prompt("Enter the amount to withdraw:"));
// }
// BankAccount.withdraw(amount);

// //ex2

// const weather = {
//   temperature: 13,
//   humidity: 20,
//   windspeed: 8,

//   lowerTemperature() {
//     return this.temperature < 0;
//   },
// };
// weather.temperature = Number(prompt("enter the temperature (°C):"));

// if (weather.lowerTemperature()) {
//   console.log("the temperature is lower than 0°C COLD");
// } else {
//  console.log("the temparature is above equal to 0°C");
// }

//ex 3

const user = {
  name: "Daria",
  email: "daria.bova@gmail.com",
  password: "3424343",

  login() {
    const yourEmail = prompt("enter your email:");
    const yourPasssword = prompt("enter your password:");
    if (yourEmail === this.email && yourPassword === this.password) {
      console.log("login successful! ");
    } else {
      console.log("Incorrect email or password ");
    }
  },
};

//ex 4
const movie = {
  title: "Terrifier",
  director: "Damien Leone",
  year: "2016",
  rating: "5,5",

  highRating() {
     return this.rating > 8;
  },
};


console.log("title:", movie.title);
console.log("director:", movie.director);
console.log("year:", movie.year);
console.log("raeting:", movie.rating);

if (movie.highRating()) {
  console.log("The movie has a high rating ");
} else {
  console.log("Movie rating 8 or below");
}