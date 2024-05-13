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
let subButton = document.getElementById("subButton");

subButton.addEventListener("click", validateFirstName);
subButton.addEventListener("click", validateLastName);
subButton.addEventListener("click", validateEmail);
subButton.addEventListener("click", validatePhone);

subButton.addEventListener("click", validatePlan);

// Validate first name
function validateFirstName() {
  var firstName = document.getElementById("firstName");
  if(firstName.value === "") {
    firstName.setCustomValidity("First name cannot be left blank");
  }
    else if(firstName.value.length < 2 || firstName.value.length > 9) {
    firstName.setCustomValidity("First name must be between 2 and 9 letters");
  } else {
    firstName.setCustomValidity("");
  }
}

// Validate last name
function validateLastName() {
  var lastName = document.getElementById("lastName");
  if(lastName.value === "") {
    lastName.setCustomValidity("Last name cannot be left blank");
  }
    else if(lastName.value.length < 2 || lastName.value.length > 9) {
    lastName.setCustomValidity("Last name must be between 2 and 9 letters");
  } else {
    lastName.setCustomValidity("");
  }
}

// Validate email
function validateEmail() {
  var email = document.getElementById("email");
  if(email.value === "") {
    email.setCustomValidity("email cannot be left blank");
  }
    else if(!/@/.test(email.value) || !/\.com$/.test(email.value)) {
    email.setCustomValidity("Email must contain '@' and end with '.com'");
  } else {
    email.setCustomValidity("");
  }
}

// Validate phone number
function validatePhone() {
  var phone = document.getElementById("phone");
  if(phone.value === "") {
    phone.setCustomValidity("Phone number cannot be left blank");
  } else if(/[^0-9]/.test(phone.value)) {
    phone.setCustomValidity("Phone number must not contain any letters");
  } else if(phone.value.length < 10) {
    phone.setCustomValidity("Phone number have a valid 10 digits");
  } else {
    phone.setCustomValidity("");
  }
}
// Validate plan selection
function validatePlan() {
  var radios = document.getElementsByName("plan");
  var formValid = false;
  var i = 0;
  while (!formValid && i < radios.length) {
    if (radios[i].checked) formValid = true;
    i++;        
  }

  if (!formValid) {
    alert("Must select a plan");
    return false;
  }
  return true;
}

document.getElementById("membershipForm").addEventListener("submit", function(event) {
  event.preventDefault();
  // If the form is valid, proceed with the form submission
  const selected = document.querySelector("input[name='plan']:checked")
  const plan = plans[selected.value];

  modal.style.display = "none"; // hide membership form modal
  successModal.style.display = "flex"; // show success modal
  
  const msg = document.getElementById("successMsg");
  msg.innerHTML = `Successfully signed up for the <b>${plan.name}</b> at a rate of <b>${plan.price}</b>/month.`

  document.getElementById("membershipForm").reset() // clear form after successful submission
});
