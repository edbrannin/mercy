const app = document.createElement('main');
const text = document.createTextNode('Hello world!');

document.title = "54-Day Rosary Novena"

app.appendChild(text);
document.getElementById('root').appendChild(app);

const mysteries = [
  "Joyful",
  "Sorrowful",
  "Glorious"
];

function currentDay() {
  //Temporarily hardcode start to Ash Wednesday, 2017
  const startDay = null;
  const today = null;
  const dayIndex = 0;
  return dayIndex;
}


