"use strict";
// For header 

let navbar = document.querySelector('.navbar');

// for window scroll 

window.onscroll = () =>{
    if(window.scrollY > 0){
        document.querySelector('.header').classList.add('active');
    }else{
        document.querySelector('.header').classList.remove('active');
    }

}
window.onload = () =>{
  if(window.scrollY > 0){
      document.querySelector('.header').classList.add('active');
  }else{
      document.querySelector('.header').classList.remove('active');
  }
}
// for logo swap

// BROKEN JS CODE FOR MODAL

// modal script


// const openBtn = document.querySelector("openModal");

// const closeBtn = document.querySelector("closeModal");

// const modal = document.querySelector("modal");

// openBtn.addEventListener("click",() => {
//   modal.classList.add("open");
// });

// closeBtn.addEventListener("click",() => {
//   modal.classList.remove("open");
// });




// Get the modal
var modal = document.getElementById("mainModal");

var successModal = document.getElementById("successModal")

// When the user clicks on the link, open the modal
window.onload = function() {
  var params = new URLSearchParams(window.location.search);
  if (params.has('openMembershipModal')) {
    modal.style.display = "flex";

    // Select the radio button with id="option2"
    //var planRadio = document.getElementById("2");
    //planRadio.checked = true;
  }
}

// Get the button that opens the modal
var btn = document.getElementById("openMembershipModal");

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "flex";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
  if (event.target == successModal) {
    successModal.style.display = "none";
  }
}


document.getElementById("calculateForm").addEventListener("submit", function(event) {
  event.preventDefault();
})

//calculate bmr code

function calculateBMR() {
  const age = document.getElementById("age").value;
  const weight = document.getElementById("weight").value;
  const heightFeet = document.getElementById("height-feet").value;
  const heightInches = document.getElementById("height-inches").value;
  const gender = document.getElementById("gender").value;

  const heightCm = (heightFeet * 30.48) + (heightInches * 2.54);
  const weightKg = weight * 0.453592;

  let bmr;
  if (gender === "male") {
      bmr = 66 + (6.23 * weightKg) + (12.7 * heightCm) - (6.8 * age);
  } else {
      bmr = 655 + (4.35 * weightKg) + (4.7 * heightCm) - (4.7 * age);
  }

  document.getElementById("result").innerHTML = `Your Basal Metabolic Rate (BMR) is: <strong>${bmr.toFixed(2)} calories per day</strong>`;
}

//end of bmr code

let subButton = document.getElementById("subButton");

function validateForm() {
  var fullNameInput = document.getElementById("fullName");
  var phoneInput = document.getElementById("phone");
  var emailInput = document.getElementById("email");

  // Validate Full Name
  let isValidName = false;
  const fullName = fullNameInput.value.trimStart().trimEnd();

  

  if (false) {
    fullNameInput.setCustomValidity("Full Name must contain two strings separated by a space.");
  } else {
    fullNameInput.setCustomValidity("");
  }

  // Validate Email
  console.log(emailInput.value.split)
  if (!emailInput.value.includes("@") ) {
    emailInput.setCustomValidity("Enter a valid email address.");
  } else {
    emailInput.setCustomValidity("");
  }

  // Validate Phone Number
  if (phoneInput.value.length != 10) {
    phoneInput.setCustomValidity("Phone must contain 10 digits.");
  } else {
    phoneInput.setCustomValidity("");
  }

  // Returning true allows form submission if all fields are valid
  return fullNameInput.validity.valid && emailInput.validity.valid && phoneInput.validity.valid;
}

function validateCalcForm() {
    const ageInput = document.getElementById("age");
    const weightInput = document.getElementById("weight");
    const heightFeetInput = document.getElementById("height-feet");
    const heightInchesInput = document.getElementById("height-inches");
  
    // Clear previous error messages
    document.getElementById("ageError").textContent = "";
    document.getElementById("weightError").textContent = "";
    document.getElementById("heightFeetError").textContent = "";
    document.getElementById("heightInchesError").textContent = "";
  
    // Validate age
    if (ageInput.value < 0 || isNaN(ageInput.value)) {
      document.getElementById("ageError").textContent = "Please enter a valid age.";
      return false;
    }
  
    // Validate weight
    if (weightInput.value < 0 || isNaN(weightInput.value)) {
      document.getElementById("weightError").textContent = "Please enter a valid weight.";
      return false;
    }
  
    // Validate height (feet)
    if (heightFeetInput.value < 0 || isNaN(heightFeetInput.value)) {
      document.getElementById("heightFeetError").textContent = "Please enter a valid height (feet).";
      return false;
    }
  
    // Validate height (inches)
    if (heightInchesInput.value < 0 || heightInchesInput.value > 11 || isNaN(heightInchesInput.value)) {
      document.getElementById("heightInchesError").textContent = "Please enter a valid height (inches).";
      return false;
    }
  
    // If all fields are valid, return true to allow form submission
    return true;
  }
  