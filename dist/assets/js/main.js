const toggleButton = document.getElementById("switch");

if (
  localStorage.getItem("theme") === "dark" ||
  (!localStorage.getItem("theme") &&
    window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
  document.documentElement.classList.add("dark");
  toggleButton.checked = true;
} else {
  document.documentElement.classList.remove("dark");
}
function toggleTheme() {
  if (document.documentElement.classList.contains("dark")) {
    document.documentElement.classList.remove("dark");
    localStorage.setItem("theme", "light");
    toggleButton.checked = false;
  } else {
    document.documentElement.classList.add("dark");
    localStorage.setItem("theme", "dark");
    toggleButton.checked = true;
  }
}
function ham_menu() {
  const span1 = document.querySelector("#nav-icon>div>span:nth-child(1)");
  const span2 = document.querySelector("#nav-icon>div>span:nth-child(2)");
  const span3 = document.querySelector("#nav-icon>div>span:nth-child(3)");
  const navlink = document.querySelector("#nav");

  if (span3.classList.contains("rotate-45")) {
    span1.classList.remove("top-0", "-left-0", "-rotate-45");
    span2.classList.remove("w-0", "opacity-0");
    span3.classList.remove("rotate-45");
    navlink.classList.remove("translate-y-0");
    navlink.classList.add("translate-y-[-20pc]");
  } else {
    span1.classList.add("top-0", "-left-0", "-rotate-45");
    span2.classList.add("w-0", "opacity-0");
    span3.classList.add("rotate-45");
    navlink.classList.remove("translate-y-[-20pc]");
    navlink.classList.add("translate-y-0");
  }
}
