
var unlock = "";
var unlock2 = "";
var limit = [];
var limit2 = [];
var lockFlag = false;
var border = document.getElementById("border");
var border2 = document.getElementById("border2");
var line = document.querySelector(".box");
var mobile = window.matchMedia("(max-width: 600px)");

//Links to github deployment and projects:



//End of section*******************************


$(document).ready(function(){
//Entrance page overlay
    $("#main").hide();
    $("#border").hide();
    $("#border2").hide();

    
    
    var letter = $(".box");
    var letter2 = $(".box2");

    letter.hide();
    letter2.hide();

    var audio = new Audio("./assets/sounds/ding.wav");
      
    if (mobile.matches){
        //Mobile doesn't work unfortunately so we removed it
        $("#main").show();     
            
    }
        letter.trigger('click');
        //Obtain Mouse Scroll Information up or down

        window.addEventListener("wheel", event => {
        
        const delta = Math.sign(event.deltaY);
        console.log(delta);
        letter.show();
        letter2.show();
        
        unlock = $(".box").attr("style");
        unlock2 = $(".box2").attr("style");
        // console.log(unlock);
        // console.log(unlock2);

        //Honestly I'm pretty big brained, but to scale I just get width yeehaw
        var width = document.getElementById("lock").offsetWidth;
        //console.log(width);
        
        
        
        //if scrolling up 
        if (delta == -1 && lockFlag == false){
         
            letter.animate({ top: "-=100px" }, "normal");
            letter2.animate({ top: "+=100px" }, "normal");
            
        }
        //if scrolling down
        else if (delta == 1 && lockFlag == false){
            
            letter.animate({ top: "+=100px" }, "normal");
            letter2.animate({ top: "-=100px" }, "normal");
        }
        
        if (delta === 1){
            limit.push(delta);
        }
        if (delta === -1){
            limit2.push(delta);
        }
       
        if (limit.length - limit2.length === 5){
            lockFlag = true;
            console.log("unlocked by flag");
            console.log(unlock);
            console.log(unlock2);
            if (unlock == "top: 200px;"&& unlock2 == "top: 320px;"){
                console.log("unlocked");
                
                entrance();
            }
            else{
                setTimeout(entrance, 1900);
            }
            
        }
        
 
function entrance(){
            console.log("unlocked");
            lockFlag = true;
            letter.hide();
            letter2.hide();
            $("#border").show();
            $("#border2").show();
            //Scaled width
            $("#border").animate({width: width+"px"},100);
            $("#border2").animate({width: width+"px"},100);
            
            audio.play();
        
        border.addEventListener("transitionend", function(){
            setTimeout(function(){
                letter.fadeOut("slow");
                letter2.fadeOut("slow");
                $("#border").fadeOut("slow");
                $("#border2").fadeOut("slow");
                
            },700);
                       
            setTimeout(function(){
                $("#lock").hide();
                $("#main").fadeIn("slow");
            },1200);

           
           
        });
   
    }
    });  
    
    //End of Entrance page************************************************

    var cards = $(".cards");

    cards.click(function(){
        window.location = "http://google.com";
    })
   






    
    

    // $(document).keyup(function(e) {
    //     switch (e.which) {
  
    //     // Move Buttons (Keyboard Down)
    //     case 40:
    //       letter.animate({ top: "+=200px" }, "normal");
    //       break;
  
    //       // Move Buttons (Keyboard Right)
    //     case 39:
    //       letter.animate({ left: "+=200px" }, "normal");
    //       break;
  
    //       // Move Buttons (Keyboard Up)
    //     case 38:
    //       letter.animate({ top: "-=200px" }, "normal");
    //       break;
  
    //       // Move Buttons (Keyboard Left)
    //     case 37:
    //       letter.animate({ left: "-=200px" }, "normal");
    //       break;
  
    //     default:
    //       break;
    //     }
    //   });
})