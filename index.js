const menuBtn = document.getElementById("menu");
const sidebar = document.getElementById("menuboxcontent");
const closeBtn = document.querySelector("#navtext h4"); 
const overlay = document.getElementById("overlay");
const arrowBtn = document.getElementById("arrow");

arrowBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});     
window.addEventListener("scroll", () => {
  if (window.scrollY < 100) {
    arrowBtn.classList.add("hide");
  } else {
    arrowBtn.classList.remove("hide");
  }
});


function closeSidebar() {
  sidebar.classList.remove("active");
  if (overlay) overlay.classList.remove("active");
}


menuBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  sidebar.classList.add("active");
  if (overlay) overlay.classList.add("active");
});


if (closeBtn) {
  closeBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    closeSidebar();
  });
}


if (overlay) {
  overlay.addEventListener("click", closeSidebar);
}


document.addEventListener("click", (event) => {
  if (
    sidebar.classList.contains("active") &&
    !sidebar.contains(event.target) &&
    event.target !== menuBtn
  ) {
    closeSidebar();
  }
});

const menuItems = document.querySelectorAll("#menuboxcontent ul li");

menuItems.forEach(item => {
  item.addEventListener("click", () => {
    closeSidebar();
  });
});
