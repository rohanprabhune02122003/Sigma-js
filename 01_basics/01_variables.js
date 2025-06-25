/* 
variables are the values which can be changed.
These values are stored in memory.
let,var are two ways to define variables.
semicolon is not compulsory in js.
*/

const accountId = 1238748 //constant is defined i.e. value can't be changed
// accountId = 2 
let accountEmail = "abc@xyz.com"
var accountPassword = "india@11" // prefer not to use var beacause of issue in block scope and functional scope
accountCity = "Pune" //we can define variables without using any keyword but it's not a good practice 
let accountState; // returns undefined beacause no value is given.
console.log(accountId);

accountEmail = "rohanprabhune31@gmail.com"
accountPassword = "password"
accountCity = "Bengaluru"


console.table([accountId, accountEmail, accountPassword, accountCity,accountState])