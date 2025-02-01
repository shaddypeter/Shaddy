// Basic form submission handling
document.getElementById('contact-form').addEventListener('submit', function (e) {
  e.preventDefault();
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  // Here you can add code to send the form data to your server or email
  console.log(`Name: ${name}, Email: ${email}, Message: ${message}`);
  alert('Thank you for your message! We will get back to you soon.');
  document.getElementById('contact-form').reset();
});