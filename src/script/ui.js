const sidebar = document.getElementById("sidebar");
const homeLink = window.location.pathname.includes("/src/members/")
  ? "../../index.html"
  : "index.html";

function SideBar() {
  return `
  <aside class="h-screen bg-secondary p-3 py-5 font-semibold text-xl text-white space-y-2">
    <div class="flex items-center gap-2">
      <img src="../../public/logo.svg" class="h-10 w-10" />
      <p class="text-white text-2xl font-bold">Notion</p>
    </div>
    <hr class="text-primary" />

    <a id="overview" href="${homeLink}" class="block px-3 py-1 hover:bg-primary rounded-2xl">
      Overview
    </a>
    <button type="button" id="member" class="px-3 py-1 w-full hover:bg-primary rounded-2xl flex justify-between cursor-pointer">
      Members <img src="../../public/drop.svg" />
    </button>

    <div id="drop" class="hidden space-y-1 w-full">
      <a href="/src/members/matthew.html" class="block px-5 py-1 ml-5 hover:bg-primary rounded-2xl font-normal text-lg">Matthew</a>
      <a href="/src/members/justin.html" class="block px-5 py-1 ml-5 hover:bg-primary rounded-2xl font-normal text-lg">Justin</a>
      <a href="/src/members/nelson.html" class="block px-5 py-1 ml-5 hover:bg-primary rounded-2xl font-normal text-lg">Nelson</a>
    </div>
  </aside>
  `;
}

sidebar.innerHTML = SideBar();
const member = document.getElementById("member");
const drop = document.getElementById("drop");

member.addEventListener("click", () => {
  drop.classList.toggle("hidden");
});
