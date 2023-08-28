function sendMail() {
  const params = {
    from_name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value,
  };
  emailjs.send("keri_service", "template_0zirslj", params).then(function (res) {
    alert("Success" + res.status);
  });
}
