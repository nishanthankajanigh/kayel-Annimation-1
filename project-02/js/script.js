// GSAP IN TEMPLATE

gsap.fromTo("section", {
        opacity: 0 
    }, {
        duration: 2,
        opacity: 1
    });


    // ************************************* YOUR GSAP CODE BELOW ********************************//
gsap.set("#icon1",{
transformOrigin: "center"

});

gsap.to("#icon1", {
    duration :10,
    rotation :360,
    ease:"linear",
    repeat: -1 
});



gsap.set("#icon2 ,#add2", {
  
    x:210,
   
    
    

}) ;


gsap.to("#icon2 ,#add2", {
    duration :5,
    x:-200,
    repeat: -1
    
    

}) ;

gsap.from("#icon3" , {
    duration:3,
    autoAlpha:0,
    repeat: -1

}) ;

gsap.from("#add3" , {
  duration :2,
    fill: "white",

}) ;


gsap.to("#add4" , {
    duration:3,
   scale: 1.3,
    repeat:-1,
     fill: "red",

}) ;

gsap.to("#icon5 " , {
    duration :1.5,
    scale: 1.1,
    repeat: -1
    

}) ;


gsap.to("#add5" , {
    duration :1.5,
    fill: "blue",
    scale: 1.25
    

}) ;




gsap.set("#add6" , {
        transformOrigin: "center top",
        rotate:-30,
}) ;


gsap.to("#add6" , { 
    duration :.5,
    rotate: 30,
    repeat:-1,
    yoyo: true,
    fill: "gray",
  

}) ;


gsap.to("#add7" , {
     duration :3,
    scale: 1.1,
    repeat: -1
}) ;
    

    



    gsap.to("#add8" , {
       duration: 0.3,
       fill: "white",
       repeat: -1,
       yoyo: true

        }) ;
    