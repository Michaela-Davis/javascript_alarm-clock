var Alarm = require('./../js/time.js').alarmModule;

$(document).ready(function(){
  $('#date').text(moment());

  $('#alarm').submit(function(event){
    event.preventDefault();
    var momentMinute = moment().minute().val();
    var momentHour = moment().hour().val();
    var alarmMinute = moment().minute('#minute').val();
    var alarmHour = moment().hour('#hour').val();
    var newAlarm = new Alarm(alarmMinute, alarmHour);
    var help = newAlarm.setAlarm(alarmHour, alarmMinute, momentHour, momentMinute);
    // $('#alarm-count').text($('#hour'), ($('#minute')));
    $('#alarm-count').text((alarmHour, alarmMinute));
    console.log(help);

  });
});
