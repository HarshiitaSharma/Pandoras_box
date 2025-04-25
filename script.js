window.onload = () => {
    const mainContent = document.getElementById('main-content');
    if (mainContent) mainContent.style.display = 'block'; // Show it, just in case it's hidden
    
    // 🌀 Carousel logic
    const slides = document.querySelectorAll('.slide');
    let current = 0;
  
    if (slides.length > 0) {
      setInterval(() => {
        slides[current].classList.remove('active');
        current = (current + 1) % slides.length;
        slides[current].classList.add('active');
        document.querySelector('.slides').style.transform = `translateX(-${current * 100}%)`;
      }, 4000);
    }

    // Check if the user is logged in
    if (localStorage.getItem("loggedIn") === 'true') {
        // Show profile button, hide login/signup buttons
        document.getElementById("profile-btn").style.display = "inline-block";
        document.getElementById("login-btn").style.display = "none";
        document.getElementById("signup-btn").style.display = "none";
    } else {
        // Show login/signup buttons, hide profile button
        document.getElementById("profile-btn").style.display = "none";
        document.getElementById("login-btn").style.display = "inline-block";
        document.getElementById("signup-btn").style.display = "inline-block";
    }
};
