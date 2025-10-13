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