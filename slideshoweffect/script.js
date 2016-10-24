// JavaScript Document
$(document).ready(function(){
    // creating the variables
    "use strict";
    var nextSlide = $("#slides img:first-child");
    var nextCaption;
    var nextSlideSource;
    
    // starting the slide show

    
    var runSlideShow = function(){
        $("#caption").slideUp(2000);
        $("#slide").slideUp(2000,
            function(){
            if(nextSlide.next().length === 0){
                nextSlide = $("#slides img:first-child");
            }
            else{
                nextSlide = nextSlide.next();
            }
            nextSlideSource = nextSlide.attr("src");
            nextCaption = nextSlide.attr("alt");
            $("#slide").attr("src", nextSlideSource).slideDown(5000);
            $("#caption").text(nextCaption).slideDown(5000); 
            }
       );
    };
            
 


    // start slide show
    var timer1 = setInterval(runSlideShow, 8000);

    // starting and stopping the slide show
    $("#slide").click(function(){
        if(timer1 !== null){
            clearInterval(timer1);
            timer1 = null;
        }
        else{
            timer1 = setInterval(runSlideShow, 8000);
        }
    });
    
});