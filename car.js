

/*filter Cars */ 
document.querySelectorAll(".filter-buttons button").forEach(button => {
  button.addEventListener("click", function () {
    let filter = this.dataset.filter;

    document.querySelectorAll(".filter-buttons button")
      .forEach(btn => btn.classList.remove("active"));
    this.classList.add("active");

    document.querySelectorAll(".car-card").forEach(card => {
      if (filter === "all") {
        card.style.display = "block";
      } else {
        card.style.display = card.querySelector("." + filter)
          ? "block"
          : "none";
      }
    });
  });
});

/*Hover Effect*/
document.querySelectorAll(".car-card").forEach(card => {
  let btn = card.querySelector(".btn.small");

  card.addEventListener("mouseenter", () => {
    btn.style.display = "block";
  });

  card.addEventListener("mouseleave", () => {
    btn.style.display = "none";
  });
});

/*Request Modal*/
document.addEventListener("click", function (e) {

  // Open modal
  if (e.target.classList.contains("request-btn")) {
    e.preventDefault();

    let carName = e.target.closest(".car-card")
      .querySelector("h3").textContent;

    document.getElementById("carName").value = carName;
    document.getElementById("requestModal").style.display = "flex";
  }

  // Close modal
  if (e.target.classList.contains("close") ||
      e.target.id === "requestModal") {
    document.getElementById("requestModal").style.display = "none";
  }
});

/*Form Validation*/
const form = document.getElementById("carForm");

const nameRegex  = /^[A-Za-z\s]{3,}$/;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phoneRegex = /^\d{2}\d{6}$/;

form.addEventListener("submit", function (e) {
  e.preventDefault();
  let valid = true;

  const name  = document.getElementById("name");
  const email = document.getElementById("email");
  const phone = document.getElementById("phone");

  // Name
  if (!nameRegex.test(name.value)) {
    name.nextElementSibling.textContent = "Enter a valid name";
    valid = false;
  } else name.nextElementSibling.textContent = "";

  // Email
  if (!emailRegex.test(email.value)) {
    email.nextElementSibling.textContent = "Enter a valid email";
    valid = false;
  } else email.nextElementSibling.textContent = "";

  // Phone
  if (!phoneRegex.test(phone.value)) {
    phone.nextElementSibling.textContent = "Enter a valid phone number";
    valid = false;
  } else phone.nextElementSibling.textContent = "";

  // Success
 
if(valid){
  $('#carForm').css('min-height','auto');
  $('.success-message').fadeIn();

  setTimeout(function(){
    $('.success-message').fadeOut(function(){
      $('#carForm')[0].reset();
      $('#requestModal').fadeOut();
    });
  }, 2000);
}

})
if(valid){
  $('#carForm').css('min-height','auto');
  $('.success-message').fadeIn();

  setTimeout(function(){
    $('.success-message').fadeOut(function(){
      $('#carForm')[0].reset();
      $('#requestModal').fadeOut();
    });
  }, 2000);
}
