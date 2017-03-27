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

function intentionType(dayIndex) {
  if (dayIndex < 26) {
    return "petition";
  } else if (dayIndex < 54) {
    return "thanksgiving";
  } else {
    return "done";
  }
}

function mysteriesFor(dayIndex) {
  return mysteries[dayIndex % mysteries.length];
}


jQuery(function() {

  document.getElementById('day-number').appendChild(
    document.createTextNode(
      "Day " + (currentDay() + 1)
    )
  );

  document.getElementById('mysteries').appendChild(
    document.createTextNode(

      "Mysteries: " + mysteriesFor(currentDay())
    )
  );

  document.getElementById('intention-type').appendChild(
    document.createTextNode(
      "Intention Type: " + intentionType(currentDay())
    )
  );

  // document.getElementById('closing-prayer').appendChild()

  jQuery('#closing-prayer div').hide().filter('.' + intentionType(currentDay())).show();

  jQuery('.to-closing-prayer').click(function() {
    jQuery('.nav a').removeClass('active').filter('.to-closing-prayer').addClass('active');
  });

});
