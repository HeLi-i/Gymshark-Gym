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

// Get the close button element
var closeBtn = document.querySelector(".modal-content .close");

// When the user clicks on the button, close the modal
closeBtn.onclick = function() {
  modal.style.display = "none";
}

// JS code to place radio buttons in the modal!

const plans = [
  {
    name: "Standard Plan",
    price: "19.99"
  },
  {
    name: "Plus Plan",
    price: "39.99"
  },
  {
    name: "Elite Plan",
    price: "99.99"
  }
]

const container = document.getElementById("planBox")

plans.forEach((plan, i) => {
  const label = document.createElement("label")
  label.classList.add("radioContainer");
  
  const input = document.createElement("input")
  input.type = "radio";
  input.value = i;
  input.name = "plan";

  const span = document.createElement("span");
  span.classList.add("radioCheckmark");
  
  const text = document.createElement("p");
  text.innerHTML = plan.name + "-" + plan.price;

  label.appendChild(input);
  label.appendChild(span);
  label.appendChild(text);

  container.appendChild(label);
})

// End of radio button code

//Success Modal code

document.getElementById("membershipForm").addEventListener("submit", function(event) {
  event.preventDefault();
  const selected = document.querySelector("input[name='plan']:checked")
  const plan = plans[selected.value];


  modal.style.display = "none"; // hide membership form modal
  successModal.style.display = "flex"; // show success modal

  const msg = document.getElementById("successMsg");
  msg.innerHTML = `Successfully signed up for the ${plan.name} at a rate of ${plan.price}/month.`

  document.getElementById("membershipForm").reset() // clear form after successful submission
})

//End of success modal code

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

