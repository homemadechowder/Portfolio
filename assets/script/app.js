
var unlock = "";
var unlock2 = "";

$(document).ready(function(){
    $("#main").hide();
    
    var letter = $(".box");
    var letter2 = $(".box2");
    var audio = new Audio("./assets/sounds/ding.wav");
    letter.click ();
    //Obtain Mouse Scroll Information up or down
    window.addEventListener("wheel", event => {
        const delta = Math.sign(event.deltaY);
      
    
        console.log(delta);
        
        if (delta == -1){
            letter.animate({ top: "-=100px" }, "normal");
            letter2.animate({ top: "+=100px" }, "normal");

        }
        else if (delta == 1){
            letter.animate({ top: "+=100px" }, "normal");
            letter2.animate({ top: "-=100px" }, "normal");

        }
    
        unlock = $(".box").attr("style");
        unlock2 = $(".box2").attr("style");
        console.log(unlock);
        console.log(unlock2);

        if (unlock == "top: 200px;"&& unlock2 == "top: 320px;"){
            console.log("unlocked");
            letter.fadeOut("slow");
            letter2.fadeOut("slow");
            audio.play();
            
            setTimeout(function(){$("#lock").hide();$("#main").fadeIn("slow");},1000);
            
        }
    });

    
    

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