import inputTypes from "./utils/inputType";
import ValidateInput from "./utils/validateInput";
import "./main.scss";
console.log(inputTypes);
console.log(ValidateInput());
console.log("hello world");
//console.log($("webpack-form"));

document.getElementById("webpack-form").addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Submitted");
});