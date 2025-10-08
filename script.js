// Replace these with your actual EmailJS values
const SERVICE_ID = 'service_9x4jofw';
const TEMPLATE_ID = 'template_cs6wtf7';

document.getElementById('contact-form').addEventListener('submit', function(e) {
  e.preventDefault();

  // Collect form data
  const name = this.name.value;
  const email = this.email.value;
  const message = this.message.value;

  // Prepare email parameters
  const templateParams = {
    from_name: name,
    from_email: email,
    message: message,
    to_email: 'bijeesh.tv@christuniversity.in'
  };

  emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams)
    .then(function(response) {
      document.getElementById('form-message').textContent = 'Your message has been sent!';
    }, function(error) {
      document.getElementById('form-message').textContent = 'Oops! Something went wrong. Please try again later.';
      console.error('EmailJS Error:', error);
    });

  this.reset();
});