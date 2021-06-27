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



months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "Augest",
  "September",
  "October",
  "November",
  "December",
];
// days = [
//   "Sunday",
//   "Monday",
//   "Tuesday",
//   "Wednesday",
//   "Thursday",
//   "Friday",
//   "Saturday",
// ];

now = new Date();
curent_date = now.getDate()
curent_month = now.getMonth()
curent_year = now.getFullYear()
document.getElementById("day").textContent = curent_date
document.getElementById("month").textContent = curent_month+1;
document.getElementById("year").textContent = curent_year

curent_hour = now.getHours()
curent_mint = now.getMinutes()

document.getElementById("hour").textContent = curent_hour;
document.getElementById("minutes").textContent = curent_mint;

console.log(now)
