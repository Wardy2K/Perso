const ongletPropos = document.getElementById("propos");
const Propos = document.getElementById("aPropos");
const ongletCompetences = document.getElementById("ongletCompetences");
const Competences = document.getElementById("competences");
const ongletContact = document.getElementById("ongletContact");
const contact = document.getElementById("contact");

ongletPropos.addEventListener("click", function() {
  Propos.classList.toggle("backgroundRed");
});

ongletCompetences.addEventListener("click", function() {
  Competences.classList.toggle("backgroundGreen");
});

ongletContact.addEventListener("click", function() {
  contact.classList.toggle("backgroundBlue");
});

Propos.addEventListener("click", function() {
  this.classList.toggle("backgroundRed");
});

Competences.addEventListener("click", function() {
  this.classList.toggle("backgroundGreen");
});

contact.addEventListener("click", function() {
  this.classList.toggle("backgroundBlue");
});
