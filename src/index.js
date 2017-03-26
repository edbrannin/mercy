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

funciton dayInfo(flavor, prayer) {
  return { flavor: flavor, prayer: prayer };

function dayData(dayIndex) {
  if (dayIndex < 26) {
    return dayInfo("Petition", "Blessed Mother, hear my plea and bring it before the throne of your Son, my Lord, Jesus Christ. Please look with favor on this devotion, and grant me [say your intention here.] I ask these things of you, my Mother, in the name of the Father, and of the Son, and of the Holy Spirit. Amen.");
  } else if (dayIndex < 54) {
    return dayInfo("Thanksgiving", "Blessed Mother, thank you for hearing my prayer and and interceding on my behalf. Mary, Mother of my Soul, be with me all my days, and accept my humble thanks for your many gifts, which I accept in the name of the Father, and of the Son, and of the Holy Spirit. Amen.");
  } else {
    return "Done";
  }
}

function mysteriesFor(dayIndex) {
  return mysteries[dayIndex % mysteries.length];
}

const day = dayData(dayIndex)

// Petition Prayer (27 Days): Blessed Mother, hear my plea and bring it before the throne of your Son, my Lord, Jesus Christ. Please look with favor on this devotion, and grant me [say your intention here.] I ask these things of you, my Mother, in the name of the Father, and of the Son, and of the Holy Spirit. Amen.
// Thanksgiving Prayer (27 Days): Blessed Mother, thank you for hearing my prayer and and interceding on my behalf. Mary, Mother of my Soul, be with me all my days, and accept my humble thanks for your many gifts, which I accept in the name of the Father, and of the Son, and of the Holy Spirit. Amen.

document.getElementById('day-number').appendChild(
document.createTextNode(
  "Day " + (currentDay() + 1)
))

document.getElementById('mysteries').appendChild(
document.createTextNode(

  "Mysteries: " + mysteriesFor(currentDay())
))

document.getElementById('intention-type').appendChild(
document.createTextNode(
  "Intention Type: " + additionType(currentDay())
))

// document.getElementById('closing-prayer').appendChild()

