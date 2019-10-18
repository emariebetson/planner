$(document).ready(function() {
        var dailyTasks = JSON.parse(localStorage.getItem('myDay')) || {};

    $('.js-save').on('click', function() {
        /* get the key and the value */
        var key = $(this).data('key');
        var value = $(`#${key}`).val();


        // save it local storage
        dailyTasks[key] = value;
        localStorage.setItem('myDay', JSON.stringify(dailyTasks));
    });

    /* init */
    /* pull from local storage */
    $('#hour-9').val(dailyTasks['hour-9']);
    $('#hour-10').val(dailyTasks['hour-10']);
    $('#hour-11').val(dailyTasks['hour-11']);
    $('#hour-12').val(dailyTasks['hour-12']);
    $('#hour-13').val(dailyTasks['hour-13']);
    $('#hour-14').val(dailyTasks['hour-14']);
    $('#hour-15').val(dailyTasks['hour-15']);
    $('#hour-16').val(dailyTasks['hour-16']);
    $('#hour-17').val(dailyTasks['hour-17']);
});

var currentHour = moment().hours();
var blockHour = $("<color-div>");
if (currentHour > blockHour) {
    document.body.style.backgroundColor="yellow";
} else if (currentHour === blockHour) {
    document.body.style.backgroundColor="orange";
} else {
    document.body.style.backgroundColor="grey";
}
//     /* set moment = id */
//     var currentHour = moment().hours();
//     var blockHour = $("<color-div>");
//         if blockhour === currentHour
//     var colors = ['red', 'blue', 'green'];
//   $.each($('.color-div'), function() {
//     var new_color = colors[Math.floor(Math.random() * colors.length)];
//     $(this).css('background-color', new_color);
//   });
// });
//     // var currentHour = moment().hours();

//     /*loop through your hours 
//     var blockHour = id in HTMLAllCollection; 
//     if (blockhour < currentHour)
//     style 
//     if (blockhour === currentHour)
//     style */