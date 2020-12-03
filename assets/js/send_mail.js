document.getElementById('activation_form')
  .addEventListener('submit', function(event) {
  event.preventDefault();

  const serviceID = 'service_exj2yuq';
  const templateID = 'template_activate';

  emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      alert('Envoyé avec succès!');
      document.getElementById('activation_form').reset();
      document.location.reload();
    }, (err) => {
      alert(JSON.stringify(err));
    });
})
document.getElementById('contact_form')
  .addEventListener('submit', function(event) {
    event.preventDefault();
  
    const serviceID = 'service_exj2yuq';
    const templateID = 'template_contact';
  
    emailjs.sendForm(serviceID, templateID, this)
      .then(() => {
        alert('Envoyé avec succès!');
        document.getElementById('contact_form').reset();
        document.location.reload();
      }, (err) => {
        alert(JSON.stringify(err));
      });
})
document.getElementById('request_form')
  .addEventListener('submit', function(event) {
    event.preventDefault();
  
    const serviceID = 'service_w36n8hq';
    const templateID = 'template_request';
  
    emailjs.sendForm(serviceID, templateID, this)
      .then(() => {
        alert('Envoyé avec succès!');
        document.getElementById('request_form').reset();
        document.location.reload();
      }, (err) => {
        alert(JSON.stringify(err));
      });
});
