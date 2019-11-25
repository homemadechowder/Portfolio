
var unlock = "";
var unlock2 = "";
var limit = [];
var limit2 = [];
var lockFlag = false;
var enable = true;
var border = document.getElementById("border");
var border2 = document.getElementById("border2");
var line = document.querySelector(".box");
var mobile = window.matchMedia("(max-width: 600px)");

//Links to github deployment and projects:



//End of section*******************************


$(document).ready(function(){
//Entrance page overlay
    $("#main").hide();
    $(".contactForm").hide();
    $("#border").hide();
    $("#border2").hide();

    
    

    var sound = $(".foot").prepend("<i class='fas fa-volume-mute'><p>Click to turn volume on</p></i>");

    $(".fa-volume-mute").on("click", function(){
        $(".fa-volume-mute").replaceWith("<i class='fas fa-volume-up'><p>Now Scroll!</p></i>");
    })
   
    
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
            if (enable){
            audio.play();
            }
            console.log("unlocked");
            lockFlag = true;
           
            $("#border").show();
            $("#border2").show();
            //Scaled width
            $("#border").animate({width: width+"px"},100);
            $("#border2").animate({width: width+"px"},100);
            
            if (enable){
            audio.play();
            }
        border.addEventListener("transitionend", function(){
            setTimeout(function(){
                letter.fadeOut("slow");
                letter2.fadeOut("slow");
                $("#border").fadeOut("slow");
                $("#border2").fadeOut("slow");
                
            },700);
                       
            setTimeout(function(){
                $("#lock").hide();
                letter.hide();
                letter2.hide();
                enable = false;
                $("#main").fadeIn("slow");
                $(".pPage").hide();
            },1200);

           
           
        });
   
    }
    });  
    
    //End of Entrance page************************************************

    var button = $(".btn");
    var cards = $(".cards");
    var item;
    
    cards.click(function(){
        
        cards.not($(this)).fadeOut("slow");
        item = $(this).attr("id");

        console.log(item);

        switch(item){
            case "aboutme":
                aboutmePage();
                break;
            case "portfolio":
                
                $(".pPage").show();
                break;
            case "contactme":
                contactPage();
                break;
            case "techdemo":
               
                break;     
            case "blog":
               
                break;     
            case "resume":
                
                break; 
   
        }

    })

    button.click(function(){
        $(".pPage").hide();
        $(".contactForm").hide();
        $(".lead").text("");
        switch (item){
            case "aboutme":
                cards.not($(".abtMe")).fadeIn("slow");
                break;
            case "portfolio":
                cards.not($(".portfolio")).fadeIn("slow");
                break;
            case "contactme":
                cards.not($(".contactme")).fadeIn("slow");
                break;
            case "techdemo":
                cards.not($(".techdemo")).fadeIn("slow");
                break;     
            case "blog":
                cards.not($(".blog")).fadeIn("slow");
                break;     
            case "resume":
                cards.not($(".resume")).fadeIn("slow");
                break; 
   
        }
        
        
    })


    //Portfolio page links
    $(".pPage").click(function(){
        
        var project = $(this).attr("id");

        switch (project){
            case "project1":
                window.open("https://homemadechowder.github.io/Project1/", "_blank");
                break;
            case "rpg":
                window.open("https://homemadechowder.github.io/Star_Wars_RPG/", "_blank");
                break;
            case "giftas":
                window.open("https://homemadechowder.github.io/GifTastic/","_blank");
                break;
            case "zombie":
                window.open("https://github.com/homemadechowder/Zombie-JS/blob/master/zombiegame.js","_blank");
                break;
        
            }
    });
   

    function contactPage(){
        $(".display-4").text("Contact Me");
        $(".contactForm").show();
    }

    var description = "With a Bachelor’s degree in Computer Engineering from U.C. Davis, I am focused on software and hardware engineering. I have in-depth education and training in computer programming and coding, object-oriented design (OOD), software testing and debugging, and working with hardware and software tools to ensure alignment with project goals. I excel at technical troubleshooting and problem solving as an analytical and critical thinker adept at solving problems, technical troubleshooting, and debugging. Moreover, I am a motivated and results-driven with the ability to quickly resolve identify and resolve issues.In addition, I excel at project and team collaboration with experience developing various games and software as part of a project team and as a team lead. I possess excellent cross-functional coordination skills as a team member at VMware. I have a talent for meeting deadlines, building relationships, and ensuring cross-functional communications. In sum, I possess an excellent combination of technical and communications knowledge with trilingual language skills, including fluency in English, Mandarin, and Japanese. I excel at quickly learning and applying new tools and technologies with the ability to work as a team and with little oversight as an independent worker."
    function aboutmePage(){
        
        $(".lead").text(description);
    }


    $(".fa-linkedin").click(function(){
        window.open("https://www.linkedin.com/in/andrew-lu-2997b0109/","_blank");
    })

    $(".fa-facebook-square").click(function(){
        window.open("https://www.facebook.com/SchismoGenesis","_blank");
    })

    $(".fa-github").click(function(){
        window.open("https://www.github.com/homemadechowder","_blank");
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