let hourArm = document.querySelector(".hour");
let minuteArm = document.querySelector(".minute");
let secondArm = document.querySelector(".second");
let analogClock = document.querySelector(".analog-clock");
let digitalClock = document.querySelector(".digital-clock");

function armRotate() {
  const currentDate = new Date();

  const hours = currentDate.getHours();
  const minutes = currentDate.getMinutes();
  const seconds = currentDate.getSeconds();

  let hourPosition = (hours * 360) / 12 + (minutes * 360) / 60 / 12;
  let minutePosition = (minutes * 360) / 60 + (seconds * 360) / 60 / 60;
  let secondPosition = (seconds * 360) / 60;

  secondArm.style.transform = `rotate(${secondPosition}deg)`;
  minuteArm.style.transform = `rotate(${minutePosition}deg)`;
  //hourArm.style.transform = `rotate(${hourPosition}deg)`;

  analogClock.onclick = function (event) {
    let fieldCoords = this.getBoundingClientRect();

    let hourCoords = {
      top: event.clientY - fieldCoords.top - analogClock.clientTop,
      left: event.clientX - fieldCoords.left - analogClock.clientLeft,
    };

    let degree = undefined;

    //( analogClock.clientWidth/2 ) ???  --->  clockArms are center of analogClock field
    // hourArm is movable

    //    // the first quarter (top-left)(left: +, top:+)
    //     if (
    //       hourCoords.top >= 0 &&
    //       hourCoords.top <= analogClock.clientWidth / 2 &&
    //       hourCoords.left >= 0 &&
    //       hourCoords.left <= analogClock.clientWidth / 2
    //     ) {
    //       hourCoords.left = analogClock.clientWidth / 2 - hourCoords.left;
    //       hourCoords.top = analogClock.clientWidth / 2 - hourCoords.top;

    //       degree = -90+(Math.atan2(hourCoords.top, hourCoords.left) * 180) / Math.PI;
    //     }
    //     // the second quarter (top-right)(left: -, top:+)
    //     else if (
    //       hourCoords.top >= 0 &&
    //       hourCoords.top <= analogClock.clientWidth / 2 &&
    //       hourCoords.left > analogClock.clientWidth / 2 &&
    //       hourCoords.left <= analogClock.clientWidth
    //     ) {
    //       hourCoords.left = -(analogClock.clientWidth / 2 - hourCoords.left);
    //       hourCoords.top = (analogClock.clientWidth / 2) - hourCoords.top;

    //       degree =
    //          90- (Math.atan2(hourCoords.top, hourCoords.left) * 180) / Math.PI;
    //     }
    //     // the forth quarter (bottom-left)(left: +, top:-)
    //     else if (
    //       hourCoords.top > analogClock.clientWidth / 2 &&
    //       hourCoords.top <= analogClock.clientWidth &&
    //       hourCoords.left > 0 &&
    //       hourCoords.left <= analogClock.clientWidth / 2
    //     ) {
    //       hourCoords.left = (analogClock.clientWidth / 2 - hourCoords.left);
    //       hourCoords.top = -(analogClock.clientWidth / 2 - hourCoords.top);

    //       degree =
    //         -90- (Math.atan2(hourCoords.top, hourCoords.left) * 180) / Math.PI;
    //     }
    //     // the third quarter (bottom-right)(left: -, top:-)
    //     else {
    //       hourCoords.left = -(analogClock.clientWidth / 2 - hourCoords.left);
    //       hourCoords.top = -(analogClock.clientWidth / 2 - hourCoords.top);

    //       degree =
    //         -270+ (Math.atan2(hourCoords.top, hourCoords.left) * 180) / Math.PI;
    //     }

    hourCoords.left = analogClock.clientWidth / 2 - hourCoords.left;
    hourCoords.top = analogClock.clientWidth / 2 - hourCoords.top;

    degree =
      -90 + (Math.atan2(hourCoords.top, hourCoords.left) * 180) / Math.PI;

    console.log("top:", hourCoords.top);
    console.log("left:", hourCoords.left);
    console.log("degree:", degree);

    hourArm.style.transform = `rotate(${degree}deg)`;
  };

  setTimeout(function () {
    armRotate();
  }, 1000);
}

function displayTime() {
  var date = new Date();
  var hour = date.getHours();
  var min = date.getMinutes();

  // showing time in form of 2 digits;

  // if (hour < 10) {
  //   hour += "0";
  // } else {
  //   hour = hour;
  // }
  hour = twoDigit(hour);
  min = twoDigit(min);

  digitalClock.innerText = hour + " : " + min;

  setTimeout(function () {
    displayTime();
  }, 1000);
}

function twoDigit(time) {
  time = time < 10 ? "0" + time : time;
  return time;
}

armRotate();
displayTime();
