import inputTypes from "./utils/inputType";
import ValidateInput from "./utils/validateInput";
import "./main.scss";
console.log(inputTypes);
console.log(ValidateInput());

document.getElementById("webpack-form").addEventListener("click", function (e) {
    e.preventDefault();
    alert("Submitted");
});