const ongletPropos = document.getElementById("propos");
const Propos = document.getElementById("aPropos");
const ongletCompetences = document.getElementById("ongletCompetences");
const Competences = document.getElementById("competences");
const ongletContact = document.getElementById("ongletContact");
const contact = document.getElementById("contact");

ongletPropos.addEventListener("click", function() {
  Propos.classList.add("backgroundRed");
});

ongletCompetences.addEventListener("click", function() {
  Competences.classList.add("backgroundGreen");
});

ongletContact.addEventListener("click", function() {
  contact.classList.add("backgroundBlue");
});
