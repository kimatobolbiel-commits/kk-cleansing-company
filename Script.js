// ==================================================
// KK CLEANSING COMPANY
// WhatsApp Configuration
// ==================================================


// IMPORTANT:
// Replace the number below with KK Cleansing Company's
// real WhatsApp number.
//
// Use the international format WITHOUT:
// + sign
// spaces
// brackets
//
// Example:
// const WHATSAPP_NUMBER = "2119XXXXXXXX";


const WHATSAPP_NUMBER = "211928634398";



// ==================================================
// CURRENT YEAR
// ==================================================

document.getElementById("year").textContent =
  new Date().getFullYear();



// ==================================================
// MOBILE MENU
// ==================================================

document
  .querySelector(".menu")
  .addEventListener("click", () => {

    const nav =
      document.querySelector(".nav nav");


    if (nav.style.display === "flex") {

      nav.style.display = "none";

    } else {

      nav.style.display = "flex";

      nav.style.flexDirection = "column";

      nav.style.position = "absolute";

      nav.style.top = "74px";

      nav.style.right = "6%";

      nav.style.padding = "18px";

      nav.style.background = "#ffffff";

      nav.style.border =
        "1px solid #e8eef5";

      nav.style.borderRadius =
        "14px";

    }

  });



// ==================================================
// BOOKING FORM
// ==================================================

document
  .getElementById("bookingForm")
  .addEventListener("submit", (event) => {

    event.preventDefault();


    // Collect form information

    const data =
      new FormData(event.target);


    const name =
      data.get("name");


    const location =
      data.get("location");


    const service =
      data.get("service");


    const date =
      data.get("date");


    const notes =
      data.get("notes") ||
      "None";



    // ==================================================
    // CREATE WHATSAPP MESSAGE
    // ==================================================

    const message =

`Hello KK Cleansing Company 👋

I'd like to book a cleaning.

Name: ${name}

Location: ${location}

Service: ${service}

Preferred date: ${date}

Details: ${notes}

Please let me know the price and available time.

Thank you.`;



    // ==================================================
    // CHECK WHETHER NUMBER HAS BEEN ADDED
    // ==================================================

    if (
      WHATSAPP_NUMBER.includes("+211928634398")
    ) {

      alert(
        "The website is ready. Please add KK Cleansing Company's real WhatsApp number inside script.js."
      );

      return;
    }



    // ==================================================
    // OPEN WHATSAPP
    // ==================================================

    const whatsappURL =
      `https://wa.me/${+211928634398}?text=${encodeURIComponent(message)}`;


    window.open(
      whatsappURL,
      "_blank"
    );

  });