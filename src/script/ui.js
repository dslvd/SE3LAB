const overview = document.getElementById("overview");
const member = document.getElementById("member");
const drop = document.getElementById("drop");

overview.addEventListener("click", () => {
  window.location.href = "index.html";
});

member.addEventListener("click", () => {
  drop.classList.toggle("hidden");
  window.location.href = "src/members/home.html";
});
