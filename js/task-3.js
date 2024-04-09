"use strict";
const profile = {
    username: "Jacob",
  playTime: 300,
};

function getInfo() {
  const message = `${username} has ${playTime} active hours!`;
  return message;
}

function changeUsername(newName) {
  profile.username = newName;
}

function updatePlayTime(hours) {
  profile.playTime += hours;
}


console.log(profile.getInfo()); // "Jacob has 300 active hours!"

profile.changeUsername("Marco");
console.log(profile.getInfo()); // "Marco has 300 active hours!"

profile.updatePlayTime(20);
console.log(profile.getInfo()); // "Marco has 320 active hours!"