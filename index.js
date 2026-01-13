(function () {
  emailjs.init("9_8SSFTE5KBjsq8qB");
}) ();

document.getElementById("contact-form")
.addEventListener("submit", function (e) {
  e.preventDefault();

  emailjs.sendForm(
    "service_2j3q147",
    "template_2j53hpq",
    this
  ).then(
    function () {
      alert("Message sent Successfully");
      document.getElementById("contact-form").reset();
    },
    function(error) {
      alert("Failed to send message");
      console.error(error);
    }
  );
});