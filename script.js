"use strict";

let submitForm = document.querySelector("#submitForm");
submitForm.addEventListener("click", function(){
  validate(true);
});

const resetFn = () => {
  document.querySelector(
    "#firstNameValidation"
  ).value = "";
  document.querySelector("#lastNameValidation").value = "";
  document.querySelector("#mailValidation").value = "";
  document.querySelector("#cityValidation").value = "";
  document.querySelector("#zipValidation").value = "";
  document.querySelector(
    "#checkboxValidation"
  ).checked = false;
  document.querySelector('#stateValidation').value = "";

  document.getElementById("firstNameValid").style.display = "none";
  document.querySelector("#lastNameValid").style.display = "none";
  document.querySelector("#mailValid").style.display = "none";
  document.querySelector("#cityValid").style.display = "none";
  document.querySelector("#zipValid").style.display = "none";
  document.querySelector("#stateValid").style.display = "none";
  submitted = false;
}

let submitted = false;

function validate(isSubmitted) {
  if(isSubmitted){
    submitted = true;
  }
  let firstNameValidation = document.querySelector(
    "#firstNameValidation"
  ).value;
  let lastNameValidation = document.querySelector("#lastNameValidation").value;
  let mailValidation = document.querySelector("#mailValidation").value;
  let cityValidation = document.querySelector("#cityValidation").value;
  let zipValidation = document.querySelector("#zipValidation").value;
  let checkboxValidation = document.querySelector(
    "#checkboxValidation"
  ).checked;
  let stateValidation = document.querySelector('#stateValidation').value;
  console.log(stateValidation);
  let error = false;
  if(submitted){
  if (firstNameValidation.length >= 3) {
    document.getElementById("firstNameValid").style.display = "block";
    document.querySelector("#firstNameInvalid").style.display = "none";
  } else {
    document.querySelector("#firstNameInvalid").style.display = "block";
    document.getElementById("firstNameValid").style.display = "none";
    error = true;
  }
  if (lastNameValidation.length >= 3) {
    document.querySelector("#lastNameValid").style.display = "block";
    document.querySelector("#lastNameInvalid").style.display = "none";
  } else {
    document.querySelector("#lastNameInvalid").style.display = "block";
    document.querySelector("#lastNameValid").style.display = "none";
    error = true;
  }
  if (
    mailValidation.includes("@") &&
    mailValidation.includes(".") &&
    !mailValidation.startsWith("@") &&
    mailValidation.length - (mailValidation.lastIndexOf(".") + 1) >= 2
  ) {
    document.querySelector("#mailValid").style.display = "block";
    document.querySelector("#mailInvalid").style.display = "none";
  } else {
    document.querySelector("#mailInvalid").style.display = "block";
    document.querySelector("#mailValid").style.display = "none";
    error = true;
  }
  if(cityValidation.length >= 3){
    document.querySelector("#cityValid").style.display = "block";
    document.querySelector("#cityInValid").style.display = "none";
  } else {
    document.querySelector("#cityValid").style.display = "none";
    document.querySelector("#cityInValid").style.display = "block";
    error = true;
  }
  // const zip = parseInt(zipValidation);
  // const zipValue = ''+zip;
  // if(zipValue.length === 6 && !isNaN(zip)){
  if(zipValidation.length === 6 && [...zipValidation].every(char => '0123456789'.includes(char))){ 
    document.querySelector("#zipValid").style.display = "block";
    document.querySelector("#zipInValid").style.display = "none";
  } else {
    document.querySelector("#zipValid").style.display = "none";
    document.querySelector("#zipInValid").style.display = "block";
    error = true;
  }
  if(checkboxValidation){
    document.querySelector("#tcInValid").style.display = "none";
  } else {
    document.querySelector("#tcInValid").style.display = "block";
    error = true;
  }
  if(stateValidation !== ''){
    document.querySelector("#stateValid").style.display = "block";
    document.querySelector("#stateInValid").style.display = "none";
  } else {
    document.querySelector("#stateValid").style.display = "none";
    document.querySelector("#stateInValid").style.display = "block";
    error = true;
  } 
  if(error === false && isSubmitted === true){
    alert('Registration successfully submitted');
    resetFn();
  } 
} 
}