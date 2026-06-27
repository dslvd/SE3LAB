const sidebar = document.getElementById("sidebar");

function SideBar() {
  return `
  <aside class="h-screen bg-secondary p-3 py-5 font-semibold text-xl text-white space-y-2">
    <div class="flex items-center gap-2">
      <img src="../../public/logo.svg" class="h-10 w-10" />
      <p class="text-white text-2xl font-bold">Notion</p>
    </div>
    <hr class="text-primary" />

    <div id="overview" class="px-3 py-1 hover:bg-primary rounded-2xl">
      Overview
    </div>
    <div id="member" class="px-3 py-1 hover:bg-primary rounded-2xl flex justify-between">
      Members <img src="../../public/drop.svg" />
    </div>

    <div id="drop" class="hidden space-y-1">
      <div id="matt" class="px-5 py-1 ml-5 hover:bg-primary rounded-2xl font-normal text-lg">Matthew</div>
      <div id="just" class="px-5 py-1 ml-5 hover:bg-primary rounded-2xl font-normal text-lg">Justin</div>
      <div id="nels" class="px-5 py-1 ml-5 hover:bg-primary rounded-2xl font-normal text-lg">Nelson</div>
    </div>
  </aside>
  `;
}

sidebar.innerHTML = SideBar();
const overview = document.getElementById("overview");
const member = document.getElementById("member");
const drop = document.getElementById("drop");

const overview = document.getElementById("overview");
const member = document.getElementById("member");
const drop = document.getElementById("drop");
const nelson = document.getElementById("nels");
const justin = document.getElementById("just");
const matthew = document.getElementById("matt");

member.addEventListener("click", () => {
  drop.classList.toggle("hidden");
});

overview.addEventListener("click", () => {
  window.location.href = "../../index.html";
});

nelson.addEventListener("click", () => {
  window.location.href = "/src/members/nelson.html";
});
justin.addEventListener("click", () => {
  window.location.href = "/src/members/justin.html";
});
matthew.addEventListener("click", () => {
  window.location.href = "/src/members/matthew.html";
});
