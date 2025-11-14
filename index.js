function signup(userName) {
  let usernames = ["ram", "sita", "john"];

  if (usernames.includes(userName)) {
    return "User Already Resgistered, Please Login";
  } else {
    usernames.push(userName);
    return "Signup Successfull, Please Login";
  }
}

console.log(signup("ram"));
console.log(signup("harry"));