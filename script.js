function updateTime() {
  const now = new Date();
  document.querySelector(".hours").innerHTML = String(now.getHours()).padStart(
    2,
    "0"
  );
  document.querySelector(".minutes").innerHTML = String(
    now.getMinutes()
  ).padStart(2, "0");
  document.querySelector(".seconds").innerHTML = String(
    now.getSeconds()
  ).padStart(2, "0");
}

const time = new Date();
const dayOfWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const monthsOfYear = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

document.querySelector(".date").innerHTML = time.getDate();
document.querySelector(".day").innerHTML = dayOfWeek[time.getDay()];
document.querySelector(".month").innerHTML = monthsOfYear[time.getMonth()];
document.querySelector(".year").innerHTML = time.getFullYear();

setInterval(updateTime, 1000);

updateTime();
