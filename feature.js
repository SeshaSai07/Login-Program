function login(userName, password) {
  let usernames = ["ram", "sita", "john"];
  let correctPassword = "Emp@123";

  if (!usernames.includes(userName)) {
    return "User Not Found, Please Signup";
  }

  if (password === correctPassword) {
    return "Login Successfull...";
  } else {
    return "Wrong Password....";
  }
}

console.log(login("ram", "Emp@123"));
function login(userName, password) {
  let usernames = ["ram", "sita", "john"];
  let correctPassword = "Emp@123";

  if (!usernames.includes(userName)) {
    return "User Not Found, Please Signup";
  }

  if (password === correctPassword) {
    return "Login Successfull...";
  } else {
    return "Wrong Password....";
  }
}

console.log(login("ram", "Emp@123"));
console.log(login("ram", "wrongpass"));
console.log(login("krish", "Emp@123"));