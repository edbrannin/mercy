const moment = require("moment");


const app = document.createElement('main');

document.title = "54-Day Rosary Novena"

document.getElementById('root').appendChild(app);

const mysteries = [
  "Joyful",
  "Sorrowful",
  "Glorious"
];

function currentDay() {
  //Temporarily hardcode start to Ash Wednesday, 2017
  const ashWeds = moment("2017-03-01");
  const today = moment();
  const dayIndex = today.diff(ashWeds, 'days') // 0
  return dayIndex;
}

function additionType(dayIndex) {
  if (dayIndex < 26) {
    return "Petition";
  } else if (dayIndex < 54) {
    return "Thanksgiving";
  } else {
    return "Done";
  }
}

function mysteriesFor(dayIndex) {
  return mysteries[dayIndex % mysteries.length];
}

[
  "Day " + (currentDay() + 1),
  "Mysteries: " + mysteriesFor(currentDay()),
  "Addition Type: " + additionType(currentDay()),
].forEach(function(i) {
  console.log(i);
  const p = document.createElement("p")
  const e = document.createTextNode(i);
  p.appendChild(e);
  app.appendChild(p);
});

