$(document).ready(function(){
    var letter = $(".box");
    
    //Obtain Mouse Information
    window.addEventListener("wheel", event => {
        const delta = Math.sign(event.deltaY);
        console.log(delta);
    });

    
    $(document).keyup(function(e) {
        switch (e.which) {
  
        // Move Buttons (Keyboard Down)
        case 40:
          letter.animate({ top: "+=200px" }, "normal");
          break;
  
          // Move Buttons (Keyboard Right)
        case 39:
          letter.animate({ left: "+=200px" }, "normal");
          break;
  
          // Move Buttons (Keyboard Up)
        case 38:
          letter.animate({ top: "-=200px" }, "normal");
          break;
  
          // Move Buttons (Keyboard Left)
        case 37:
          letter.animate({ left: "-=200px" }, "normal");
          break;
  
        default:
          break;
        }
      });
})