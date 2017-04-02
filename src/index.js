const mysteries = [
  "joyful",
  "sorrowful",
  "glorious"
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
  const todayIndex = currentDay();

  jQuery('#day-number').text(
    "Day " + (todayIndex + 1)
  );

  const mysteries = mysteriesFor(todayIndex);
  jQuery('#mysteries').text(
    "Mysteries: " + mysteriesFor(todayIndex)
  );
  jQuery('#toc .' + mysteries).tab('show');

  jQuery('#intention-type').text(
    "Intention Type: " + intentionType(todayIndex)
  );

  // document.getElementById('closing-prayer').appendChild()

  jQuery('#closing-prayer div').hide().filter('.' + intentionType(todayIndex)).show();

  jQuery('.to-closing-prayer').click(function() {
    jQuery('.nav a').removeClass('active').filter('.to-closing-prayer').addClass('active');
  });

});
