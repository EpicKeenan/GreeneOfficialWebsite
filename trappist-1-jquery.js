$(document).ready(function(){
    
    $(window).load(function() {
         $('#loader').hide();
         $('#container').show();
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
