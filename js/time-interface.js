var Alarm = require('./../js/time.js').alarmModule;



$(document).ready(function(){
  setInterval(function(){$('#date').text(moment());}, 1000);

  $('#alarm').submit(function(event){
    event.preventDefault();
    var momentMinute = moment().minute();
    var momentHour = moment().hour();

    var alarmMinute = parseInt($('#minute').val());
    var alarmHour = parseInt($('#hour').val());

    // var alarmMinute = moment().minute($('#minute').val()).format('m');
    // var alarmHour = moment().hour($('#hour').val()).format('h');

    var newAlarm = new Alarm(alarmMinute, alarmHour);

    var showTime = alarmHour + ':' + alarmMinute;
    var showMoment = momentHour + ':' + momentMinute;
    setInterval(newAlarm.setAlarm(showTime, showMoment), 1000);

    // var help = newAlarm.setAlarm(alarmHour, alarmMinute, momentHour, momentMinute);

    console.log(alarmMinute);
    console.log(alarmHour);
    // $('#alarm-count').text($('#hour'), ($('#minute')));

    $('#alarm-count').text(showTime);
    $('#yup').text(showMoment);

  });
});
