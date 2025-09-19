

emailjs.init(""); // Dashboard se public key use karo
document.getElementById('contact-form').addEventListener('submit', function(event) {
  event.preventDefault();
  emailjs.sendForm('', '', this)
    .then(function() {
      alert('Message sent successfully!');
      document.getElementById('contact-form').reset();
    }, function(error) {
      alert('Failed to send message, please try again.');
      console.error('EmailJS error:', error);
    });
});





function downloadResume() {
    // Resume का सही relative path (ध्यान दें: 'assets' folder का सही नाम)
    const resumeUrl = "assets/udit resume.jpg"; // "asets" में typo था, इसे "assets" करें

    // Anchor tag create करना
    const link = document.createElement("a");
    link.href = resumeUrl;
    link.download = "udit resume.jpg"; // फ़ाइल नाम सही रखें (extension सहित)

    // Link को body में add करना, click करना, और remove करना
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

const menuIcon = document.getElementById("menu-icon");
const navbar = document.querySelector(".navbar");
let sections = document.querySelectorAll("section"); // सभी सेक्शन चुनना ठीक है
let navLinks = document.querySelectorAll("header nav a"); // सभी navbar links चुनना ठीक है

window.onscroll = () => {
    let top = window.scrollY;
    sections.forEach((sec) => { 
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute("id");

        if (top >= offset && top < offset + height) {
            navLinks.forEach((link) => {
                link.classList.remove("active");
            });
            let activeLink = document.querySelector(`header nav a[href="#${id}"]`);
            if (activeLink) {
                activeLink.classList.add("active");
            }
        }
    });
};

menuIcon.addEventListener("click", () => {
    navbar.classList.toggle("active"); 
});
