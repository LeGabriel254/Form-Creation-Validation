document.addEventListener('DOMContentLoaded', (event) => {
  // Your code here

  const form = document.getElementById('registration-form');
  const feedback = document.getElementById('form-feedback');

  form.addEventListener('submit', function(e) {
    e.preventDefault();
  })
})

// Retrieve user input and value trim
  const username = document.getElementById('username').value.trim();
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value.trim();
