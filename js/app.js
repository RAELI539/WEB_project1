document.addEventListener("DOMContentLoaded", () => {
    
    // ==========================================
    // FEATURE 1: LIGHT / DARK THEME CONTROLLER
    // ==========================================
    const themeToggleBtn = document.getElementById("themeToggle");
    const themeIcon = document.getElementById("themeIcon");

    // Check if user previously saved a theme preference
    const savedTheme = localStorage.getItem("apexHavenTheme");
    if (savedTheme === "dark") {
        document.body.classList.add("dark-mode");
        if (themeIcon) {
            themeIcon.className = "bi bi-sun-fill";
        }
    }

    if (themeToggleBtn && themeIcon) {
        themeToggleBtn.addEventListener("click", () => {
            document.body.classList.toggle("dark-mode");
            
            if (document.body.classList.contains("dark-mode")) {
                localStorage.setItem("apexHavenTheme", "dark");
                themeIcon.className = "bi bi-sun-fill";
            } else {
                localStorage.setItem("apexHavenTheme", "light");
                themeIcon.className = "bi bi-moon-stars-fill";
            }
        });
    }

    // ==========================================
    // FEATURE 2: CONTACT FORM VALIDATION ENGINE
    // ==========================================
    const contactForm = document.getElementById("rentalContactForm");

    if (contactForm) {
        contactForm.addEventListener("submit", (event) => {
            let formIsValid = true;
            
            const nameInput = document.getElementById("clientName");
            const emailInput = document.getElementById("clientEmail");

            // 1. Verify Full Legal Name Field Content
            if (nameInput.value.trim() === "") {
                formIsValid = false;
                nameInput.classList.add("is-invalid");
            } else {
                nameInput.classList.remove("is-invalid");
                nameInput.classList.add("is-valid");
            }

            // 2. Verify Email Communications Metric Structure
            const emailValue = emailInput.value.trim();
            if (emailValue === "" || !emailValue.includes("@") || !emailValue.includes(".")) {
                formIsValid = false;
                emailInput.classList.add("is-invalid");
            } else {
                emailInput.classList.remove("is-invalid");
                document.body.classList.contains("dark-mode");
                emailInput.classList.add("is-valid");
            }

            // Halt processing if any parameters fail validation checks
            if (!formIsValid) {
                event.preventDefault();
                event.stopPropagation();
            } else {
                // Form is fully valid. Alerting user (for demo purposes)
                alert("Thank you! Your property inquiry routing ticket has been submitted successfully.");
            }
        });
    }
});