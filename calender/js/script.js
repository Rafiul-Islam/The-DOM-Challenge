const DAY_TEXT = document.querySelector(".day-text");
const MONTH_TEXT = document.querySelector(".month-text");
const YEAR_TEXT = document.querySelector(".year-text");
const CALENDER_TABLE_TBODY = document.querySelector(".calender-table tbody");
const PREV_BUTTON = document.querySelector("#prevButton");
const NEXT_BUTTON = document.querySelector("#nextButton");

const months = [
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

const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

let dateObj = new Date();
generateCalender(dateObj);

function generateCalender(dateObj) {
  let currentYear = dateObj.getFullYear();
  let currentMonth = dateObj.getMonth();
  // let currentDay = dateObj.getDay();

  let startingDay = days.indexOf(
    new Date(currentYear, currentMonth, 1).toString().split(" ")[0]
  );
  const totalDaysInThisMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  let breakLoop = false;

  // console.log("Date: " + currentDay + "/" + (currentMonth + 1) + "/" + currentYear);
  // console.log("total days in month: " + totalDaysInThisMonth);
  // console.log("starting days in month: " + startingDay);
  // console.log();

  CALENDER_TABLE_TBODY.innerHTML = "";

  for (let i = 0; i < 7; i++) {
    const tr = createElement("tr");
    for (let j = 1; j <= 7; j++) {
      let day = 7 * i + j - startingDay;

      if (day === totalDaysInThisMonth) breakLoop = true;
      if (day < 1 || day > totalDaysInThisMonth) day = " ";

      const td = createElement("td");
      td.textContent = day;
      if (
        day == new Date().getDay() &&
        currentMonth == new Date().getMonth() &&
        currentYear == new Date().getFullYear()
      ) {
        td.classList.add("today");
      }
      tr.append(td);
    }
    CALENDER_TABLE_TBODY.append(tr);
    if (breakLoop) break;
  }

  setDateText(currentMonth, currentYear);
}

function setDateText(currentMonth, currentYear) {
  MONTH_TEXT.textContent = months[currentMonth];
  YEAR_TEXT.textContent = currentYear;
}

function createElement(elementTag) {
  const element = document.createElement(`${elementTag}`);
  return element;
}

PREV_BUTTON.addEventListener("click", function () {
  dateObj = goToPreviousMonth(dateObj);
  // console.log(dateObj);
  generateCalender(dateObj);
});

NEXT_BUTTON.addEventListener("click", function () {
  dateObj = goToNextMonth(dateObj);
  // console.log(dateObj);
  generateCalender(dateObj);
});

function goToPreviousMonth(dateObj) {
  var tempDateObj = new Date(dateObj);

  if (tempDateObj.getMonth) {
    tempDateObj.setMonth(tempDateObj.getMonth() - 1);
  } else {
    tempDateObj.setYear(tempDateObj.getYear() - 1);
    tempDateObj.setMonth(12);
  }

  return tempDateObj;
}

function goToNextMonth(dateObj) {
  let tempDateObj = new Date(dateObj);

  tempDateObj =
    tempDateObj.getMonth() == 11
      ? new Date(tempDateObj.getFullYear() + 1, 0, 1)
      : new Date(tempDateObj.getFullYear(), tempDateObj.getMonth() + 1, 1);

  return tempDateObj;
}
