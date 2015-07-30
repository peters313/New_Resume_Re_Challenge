$(document).ready(function(){
    $('body').append("<button id='resumeButton'>Click Here!</button>");
    $('body').on('click', '#resumeButton', function(){
        $(this).hide();
        $('.container').slideDown();
    });
    $('body').on('click', '.container', function(){
       $(this).slideUp();
       $('#resumeButton').show();
    });
});