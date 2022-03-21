import "./main.scss";

import User, { printName as printUserName, printAge } from "./js-modules/User";
const user = new User("Iman Ali", 38);
printUserName(user); printAge(user);

document.getElementById("webpack-form").addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Submitted");
});