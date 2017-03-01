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

// Petition Prayer (27 Days): Blessed Mother, hear my plea and bring it before the throne of your Son, my Lord, Jesus Christ. Please look with favor on this devotion, and grant me [say your intention here.] I ask these things of you, my Mother, in the name of the Father, and of the Son, and of the Holy Spirit. Amen.
// Thanksgiving Prayer (27 Days): Blessed Mother, thank you for hearing my prayer and and interceding on my behalf. Mary, Mother of my Soul, be with me all my days, and accept my humble thanks for your many gifts, which I accept in the name of the Father, and of the Son, and of the Holy Spirit. Amen.

[
  "Day " + (currentDay() + 1),
  "Mysteries: " + mysteriesFor(currentDay()),
  "Addition Type: " + additionType(currentDay()),
  "Blessed Mother, hear my plea and bring it before the throne of your Son, my Lord, Jesus Christ. Please look with favor on this devotion, and grant me [say your intention here.] I ask these things of you, my Mother, in the name of the Father, and of the Son, and of the Holy Spirit. Amen."
].forEach(function(i) {
  console.log(i);
  const p = document.createElement("p")
  const e = document.createTextNode(i);
  p.appendChild(e);
  app.appendChild(p);
});

