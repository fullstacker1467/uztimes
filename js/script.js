const change_lang = document.querySelector(".uz"),
  lang_btn = document.querySelector(".lang"),
  nav_btn = document.querySelector(".bar"),
  head_btn = document.querySelector(".dow"),
  nav_menu = document.querySelector(".menu"),
  head_cont = document.querySelector("header"),
  side_bar = document.querySelector('.sidebar'),
  header_btn = document.querySelectorAll(".head");

nav_btn.addEventListener("click", () => {
  nav_menu.classList.toggle("active");
  head_cont.classList.toggle("active");
  side_bar.classList.toggle('active')
});

change_lang.addEventListener("click", () => {
  change_lang.classList.toggle("active");
  lang_btn.classList.toggle("active");
});

header_btn.forEach((i) => {
  i.addEventListener("click", () => {
    for (let key of header_btn) {
      key.classList.remove("active");
    }
    i.classList.add("active");
  });
}); 
