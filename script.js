
const menuBtn = document.querySelector('.menu-btn');
const navLinks = document.querySelector('.nav-links');

menuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});



const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Thank you for your message! We will get back to you soon.');
        contactForm.reset();
    });
}


document.addEventListener("DOMContentLoaded", function () {
    const modal = document.createElement("div");
    modal.classList.add("modal");
    modal.innerHTML = `
        <div class="modal-content">
            <span class="close-btn">&times;</span>
            <h2>Register for the Event</h2>
            <form id="registerForm">
                <label for="name">Full Name:</label>
                <input type="text" id="name" required>

                <label for="email">Email:</label>
                <input type="email" id="email" required>

                <label for="phone">Phone Number:</label>
                <input type="text" id="phone" required>

                <button type="submit" class="btn">Submit</button>
            </form>
        </div>
    `;

    document.body.appendChild(modal); 

    const registerButtons = document.querySelectorAll(".register-btn");

   
    registerButtons.forEach(button => {
        button.addEventListener("click", function (event) {
            event.preventDefault();
            modal.style.display = "flex";
        });
    });

    
    modal.querySelector(".close-btn").addEventListener("click", function () {
        modal.style.display = "none";
    });

    
    modal.querySelector("#registerForm").addEventListener("submit", function (event) {
        event.preventDefault();
        alert("You have successfully registered for the event!");
        modal.style.display = "none";
        this.reset(); 
    });
});
