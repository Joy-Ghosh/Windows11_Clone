let startbtn = document.getElementsByClassName("start_btn")[0];
let startmenu = document.getElementsByClassName("startmenu")[0];

startbtn.addEventListener("click", () => {
  console.log("clicked");
  if (startmenu.style.bottom == "55px") {
    startmenu.style.bottom = "-660px";
  } else {
    startmenu.style.bottom = "55px";
  }
});
