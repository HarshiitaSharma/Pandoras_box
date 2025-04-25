// autho.js

// Hardcoded default user (admin) - update later to real backend
const defaultUser = {
  username: "admin",
  password: "1234"
};

// Login form
document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById('loginForm');
  const signupForm = document.getElementById('signupForm');

  if (loginForm) {
    loginForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const username = document.getElementById('username').value;
      const password = document.getElementById('password').value;

      if (
        (username === defaultUser.username && password === defaultUser.password) ||
        (localStorage.getItem('user_' + username) === password)
      ) {
        localStorage.setItem('loggedIn', 'true');
        localStorage.setItem('username', username);
        window.location.href = 'index.html';
      } else {
        alert("Wrong credentials 💀");
      }
    });
  }

  if (signupForm) {
    signupForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const username = document.getElementById('newUsername').value;
      const email = document.getElementById('newEmail').value;
      const password = document.getElementById('newPassword').value;

      if (localStorage.getItem('user_' + username)) {
        alert("Username already exists 🛑");
      } else {
        localStorage.setItem('user_' + username, password);
        localStorage.setItem('email_' + username, email);
        alert("Signup successful ✅ Redirecting to login...");
        setTimeout(() => {
          window.location.href = 'login.html';
        }, 1000);
      }
    });
  }
});
