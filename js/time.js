function Alarm(alarmMinute, alarmHour) {
this.alarmMinute = alarmMinute;
this.alarmHour = alarmHour;
}


Alarm.prototype.setAlarm = function(alarmHour, alarmMinute, momentHour, momentMinute) {
  if (alarmHour === momentHour && alarmMinute === momentMinute) {
    alert("Your alarm is going off.");
  }
};

// Alarm.prototype.soundAlarm = function() {
//     alert("Your alarm is going off.");
//     // var snd = new Audio("");
//     // return function() {
//     //     snd.play();
//     //}
// // });();
// };

exports.alarmModule = Alarm;
