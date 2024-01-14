// splach page 

// variables 
let b1Btn =  document.getElementById("btn1");
let b2Btn =  document.getElementById("btn2");

//button 1 
gsap.from("#btn1",{
    duration: 2,
    x:-screen.width,
    opacity:0,
    ease: "power3.out"

});


gsap.from("#btn2",{
    duration: 2,
    x:screen.width,
    opacity:0,
    ease: "power3.out"

});

b1Btn.addEventListener("click", function() {
  console.log("Clicked One");

        gsap.to("section",{
            duration:1,
            opacity:0,
            //annimation fininshed
            onComplete: function(){
    console.log("Animation Finished");
    location.href="project-01/index.html";
            }
});

});

///btn 2 

b2Btn.addEventListener("click", function() {
    console.log("Clicked One");
  
          gsap.to("section",{
              duration:1,
              opacity:0,
              //annimation fininshed
              onComplete: function(){
      console.log("Animation Finished");
      location.href="project-02/index.html";
              }
  });
  
  });


