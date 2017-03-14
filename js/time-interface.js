var Alarm = require('./../js/time.js').alarmModule;

$(document).ready(function(){
  setInterval(function(){$('#date').text(moment())}, 1000);

  $('#alarm').submit(function(event){
    event.preventDefault();
    var momentMinute = moment().minute();
    var momentHour = moment().hour();

    var alarmMinute = moment().minute($('#minute').val()).format('m');
    var alarmHour = moment().hour($('#hour').val()).format('h');

    var newAlarm = new Alarm(alarmMinute, alarmHour);

    setInterval(newAlarm.setAlarm(alarmHour, alarmMinute, momentHour, momentMinute), 1000);

    // var help = newAlarm.setAlarm(alarmHour, alarmMinute, momentHour, momentMinute);

    var showTime = alarmHour + ':' + alarmMinute;
    console.log(alarmMinute);
    console.log(alarmHour);
    // $('#alarm-count').text($('#hour'), ($('#minute')));

    $('#alarm-count').text(showTime);
    $('#yup').text(momentMinute);

  });
});
