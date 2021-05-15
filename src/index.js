function currentDay() {
  //Temporarily hardcode start to Ash Wednesday, 2017
  const goodFriday = moment().easter().subtract(2, 'days');
  const today = moment();
  const dayIndex = today.diff(goodFriday, 'days') // 0
  return dayIndex % prayers.novena.length;
}

function dayData(dayIndex) {
  return prayers.novena[dayIndex];
}


jQuery(function() {
  const todayIndex = currentDay();
  const todayData = dayData(todayIndex);

  jQuery('#day-number').text(
    "Day " + (todayIndex + 1)
  );

  console.log("Prayers:", prayers.novena);
  console.log("index:", todayIndex);
  console.log("Data:", todayData);
  jQuery('#intention-type').text(
    todayData.tagline
  );

  jQuery('#toc .day' + todayIndex).tab('show');

  // document.getElementById('closing-prayer').appendChild()

});
