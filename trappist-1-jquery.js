$(document).ready(function(){
    
    $(window).load(function(){
    $('.preloader').delay(400).fadeOut(500);
  });

    $("#header").hide().slideDown(800);
    $('#nav').hide();
});

//$("html").hover(function(){

    //$('#nav').slideDown(400);        
//});

$("html").hover(
    function() {
        $("#nav").show('fast'); 
        //alert('teste')
    },
    function() {
        $("#nav").hide('fast'); 
    }
);
