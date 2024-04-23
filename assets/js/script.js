let landingPagePackagesContainer = document.getElementById(
  "landing-page-packages"
);
let fullWebsitePackagesContainer = document.getElementById(
  "full-website-packages"
);
let ecommerceWebsitePackagesContainer = document.getElementById(
  "ecommerce-website-packages"
);

const showPackages = (button) => {
  let card = button.closest(".card");
  let choosenService = card.querySelector("h4");
  console.log(button);
  let serviceNameInput = document.getElementById("service-name-input");

  if (choosenService.textContent === "Landing Page Creation") {
    landingPagePackagesContainer.style.display = "block";
    button.href = "#landing-page-packages";

    fullWebsitePackagesContainer.style.display = "none";
    ecommerceWebsitePackagesContainer.style.display = "none";

    // Change the modal form input name based on the choosen service
    serviceNameInput.setAttribute("name", "Landing Page");
  } else if (choosenService.textContent === "Full Website Frontend") {
    fullWebsitePackagesContainer.style.display = "block";
    button.href = "#full-website-packages";

    landingPagePackagesContainer.style.display = "none";
    ecommerceWebsitePackagesContainer.style.display = "none";

    // Change the modal form input name based on the choosen service
    serviceNameInput.setAttribute("name", "Full Frontend Website");
  } else if (choosenService.textContent === "Ecommerce Frontend") {
    ecommerceWebsitePackagesContainer.style.display = "block";
    button.href = "#ecommerce-website-packages";

    landingPagePackagesContainer.style.display = "none";
    fullWebsitePackagesContainer.style.display = "none";

    // Change the modal form input name based on the choosen service
    serviceNameInput.setAttribute("name", "Ecommerce Website Frontend");
  }
};

const showModal = (button) => {
  let packageDiv = button.closest(".package");
  let choosenPackage = packageDiv.querySelector("h3");
  console.log(choosenPackage.textContent);

  let landingBasicPackageRadio = document.getElementById(
    "radio-landing-basic-package"
  );
  let landingStandardPackageRadio = document.getElementById(
    "radio-landing-standard-package"
  );
  let landingPremiumPackageRadio = document.getElementById(
    "radio-landing-premium-package"
  );
  if (choosenPackage.textContent === "Basic Package") {
    landingStandardPackageRadio.removeAttribute("checked");
    landingPremiumPackageRadio.removeAttribute("checked");
    landingStandardPackageRadio.setAttribute("disabled", "true");
    landingPremiumPackageRadio.setAttribute("disabled", "true");

    landingBasicPackageRadio.removeAttribute("disabled");
    landingBasicPackageRadio.setAttribute("checked", "true");
  }
  if (choosenPackage.textContent === "Standard Package") {
    landingBasicPackageRadio.removeAttribute("checked");
    landingPremiumPackageRadio.removeAttribute("checked");
    landingBasicPackageRadio.setAttribute("disabled", "true");
    landingPremiumPackageRadio.setAttribute("disabled", "true");

    landingStandardPackageRadio.removeAttribute("disabled");
    landingStandardPackageRadio.setAttribute("checked", "true");
  } else if (choosenPackage.textContent === "Premium Package") {
    landingBasicPackageRadio.removeAttribute("checked");
    landingStandardPackageRadio.removeAttribute("checked");
    landingBasicPackageRadio.setAttribute("disabled", "true");
    landingStandardPackageRadio.setAttribute("disabled", "true");

    landingPremiumPackageRadio.removeAttribute("disabled");
    landingPremiumPackageRadio.setAttribute("checked", "true");
  }
};

const handleFormSubmit = () => {
  const nameInput = document.getElementById('name-4c18');
  const emailInput = document.getElementById('email-4c18');
  const messageInput = document.getElementById('message-4c18');

  if (nameInput.value && emailInput.value && messageInput.value) {
    alert("Thank you 🫱🏻‍🫲🏻, I will get in touch with you soon!");
    // nameInput.value = '';
    // emailInput.value = '';
    // messageInput.value = '';
  } else {
    alert("Please fill all the required fields")
  }
}

// const moreText = document.getElementById("more");
// const moreBtn = document.getElementById("more-button");

// moreBtn.addEventListener("click", () => {
//   moreText.style.display = "block";
// });

// Function to toggle visibility of description
function toggleDescription(classname) {
  const descriptionElements = document.querySelectorAll("." + classname);

  for (const element of descriptionElements) {
    const button = element.nextElementSibling; // Assumes button is the next sibling
    button.addEventListener("click", function () {
      if (element.style.display === "none" || element.style.display === "") {
        element.style.display = "block";
        button.textContent = "Less";
      } else {
        element.style.display = "none";
        button.textContent = "More";
      }
    });
  }
}

// Call the function for each class
toggleDescription("premium-description");
toggleDescription("other-description");
