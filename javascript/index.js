function updateTime() {
  // Madrid

  let madridElement = document.querySelector("#madrid");
  if (madridElement) {
    let madridDateElement = madridElement.querySelector(".date-number");
    let madridMonthElement = madridElement.querySelector(".date-month");
    let madridTimeElement = madridElement.querySelector(".time");
    let madridCurrentTime = moment().tz("Europe/Madrid");

    madridDateElement.innerHTML = madridCurrentTime.format("D");
    madridMonthElement.innerHTML = madridCurrentTime.format("MMM");
    madridTimeElement.innerHTML = madridCurrentTime.format("HH:mm:ss");
  }

  // Buenos Aires

  let buenosAiresElement = document.querySelector("#buenos-aires");
  if (buenosAiresElement) {
    let buenosAiresDateElement = buenosAiresElement.querySelector(".date-number");
    let buenosAiresMonthElement = buenosAiresElement.querySelector(".date-month");
    let buenosAiresTimeElement = buenosAiresElement.querySelector(".time");
    let buenosAiresCurrentTime = moment().tz("America/Argentina/Buenos_Aires");

    buenosAiresDateElement.innerHTML = buenosAiresCurrentTime.format("D");
    buenosAiresMonthElement.innerHTML = buenosAiresCurrentTime.format("MMM");
    buenosAiresTimeElement.innerHTML = buenosAiresCurrentTime.format("HH:mm:ss");
  }
}

function displayCityTime(event) {
  let cityTimeZone = event.target.value;
  let cityName = cityTimeZone.split("/").slice(-1)[0].replace("_", " ");
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `
  <div class="city-container">
            <div class="date">
              <div class="date-number">${cityTime.format("D")}</div>
              <div class="date-month">${cityTime.format("MMM")}</div>
            </div>
            <div class="city-name">${cityName}</div>
            <div class="time">${cityTime.format("HH:mm:ss")}</div>
          </div>
  `;
}

updateTime();
setInterval(updateTime);

let citySelectorElement = document.querySelector("#city-selector");
citySelectorElement.addEventListener("change", displayCityTime);
