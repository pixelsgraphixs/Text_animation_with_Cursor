var circle = document.querySelector("#circle");
var frames = document.querySelectorAll(".frame");

frames.forEach(frame =>{
    frame.addEventListener("mousemove", function(dets){

        var dims = frame.getBoundingClientRect();
    
        var xstart = dims.x;
        var xend = dims.x + dims.width;
    
        var zeroone = gsap.utils.mapRange(xstart, xend, 0, 1, dets.clientX);
    
       
    
        gsap.to(circle, {
            scale: 6,
        })
        gsap.to(frame.children,{
            color:'#9f0d',
            duration:.3,
            y:'-5vw',
            scrub:1
        })
    
        gsap.to(frame.children,{
            x: lerp(-50,50, zeroone),
            duration:.3,
        })
    })
    frame.addEventListener("mouseleave", function(dets){
        gsap.to(circle, {
            scale: 1,
        })
        gsap.to(frame.children,{
            color:'#000',
            duration: .3,
            y: 0,
            scrub: 0
        })
        gsap.to(frame.children,{
            x: 0,
            duration:.3,
        })
    })

})

const lerp = (x, y, a) => x * (1 - a) + y * a;


window.addEventListener("mousemove", function(dets){
   gsap.to(circle,{
    x:dets.clientX,
    y:dets.clientY,
    duration: .2,
    ease: Expo,
   })
});

