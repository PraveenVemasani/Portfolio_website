document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll(".experience-card");

    const revealCards = () => {
        const triggerBottom = window.innerHeight * 0.8;
        cards.forEach(card => {
            const cardTop = card.getBoundingClientRect().top;
            if (cardTop < triggerBottom) {
                card.classList.add("revealed");
            }
        });
    };

    window.addEventListener("scroll", revealCards);
    revealCards(); // Trigger on load in case cards are in view
});





function sendMail(){
    let parms={
      name : document.getElementById("name").value,
      email : document.getElementById("email").value,
      subject : document.getElementById("subject").value,
      message : document.getElementById("message").value,
    }
  
    emailjs.send("service_4v9wkza","template_644acnk",parms)
    .then(function(response) {
      alert("Email Sent!!");
      // Clear the form fields after successful email submission
      document.getElementById("name").value = "";
      document.getElementById("email").value = "";
      document.getElementById("subject").value = "";
      document.getElementById("message").value = "";
    })
    .catch(function(error) {
      // Handle errors, e.g., display an error message
      alert("Error sending email. Please try again later.");
    });
  }