import "./main.scss";

import User, { printName as printUserName, printAge } from "./js-modules/User";
import addDateFunction from "./js-modules/DatePicker";
const user = new User("Iman Ali", 38);
printUserName(user); printAge(user);

addDateFunction();

document.getElementById("webpack-form")?.addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Submitted");
});