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

  const todayIntentionType = intentionType(todayIndex);
  jQuery('#intention-type').text(
    "Intention Type: " + todayIntentionType
  );

  // document.getElementById('closing-prayer').appendChild()

  jQuery('#closing-prayer div.prayer').
    hide().
      //each(function(){console.log("Hide", this)}).
        filter('.' + todayIntentionType).
          //each(function(){console.log("Show",this)}).
            show();
  //jQuery('#closing-prayer ol li').hide().filter('.' + todayIntentionType).show();
  jQuery('#closing-prayer ol li').
    hide().
      //each(function(){console.log("Hide", this)}).
        filter('.' + todayIntentionType).
          //each(function(){console.log("Show",this)}).
            show();
  jQuery('#closing-toc a.singular.' + todayIntentionType).
    each(function(){console.log("Tab", this)}).
      tab('show');

});
