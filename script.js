const form = document.querySelector('form');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const seatDisplay = document.getElementById('seat');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const username = usernameInput.value;
  const password = passwordInput.value;

  // Construct the URL
  const url = `/${username}/${password}`;

  // Redirect to the new URL
  window.location.href = url;
});