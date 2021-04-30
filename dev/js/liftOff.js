import { gsap } from "gsap";
export let liftOffTL = gsap.timeline();

gsap.set("#space-ship",{transformOrigin:"center"});
gsap.set("#smoke-2",{transformOrigin:"center bottom"});
gsap.set("#smoke-3",{transformOrigin:"center bottom"});


liftOffTL.to("#space-ship",{duration:0.15, rotation:-8,ease:"none"})
        .to("#space-ship",{duration:0.15, rotation:8, yoyo:true, repeat:10,ease:"none"})
        .to("#space-ship",{duration:0.15, rotation:0,ease:"none", onComplete:controlFlames})
        .from("#smoke-2",{duration:3.2,y:"+=300", ease: "power3.in"},'upAndAway')
        .from("#smoke-3",{duration:3.2, y:"+=300", ease: "power3.in"},'upAndAway')
        .to("#space-ship",{duration:5, y:"-=1200", scale: 0.6, ease: "power3.in"},"upAndAway")
        .to("#clouds",{duration:5.5, y:"+=1200", ease: "power3.in"},'upAndAway')
        .to("#front",{duration:5.5, y:"+=1000", ease: "power3.in"},'upAndAway')
        .to("#middle",{duration:5.5, y:"+=1000", ease: "power3.in"},'upAndAway')
        .from("#space",{duration:5,alpha:0, ease: "power3.in"},'upAndAway');

export let flamesTL = gsap.timeline({paused:true});

flamesTL.to("#left-blue",{duration:0.10, scaleY:.5,yoyo:true, repeat:-1},"flames")
.to("#left-red",{duration:0.15, scaleY:.3,yoyo:true, repeat:-1},"flames")
.to("#right-blue",{duration:0.10, scaleY:.5,yoyo:true, repeat:-1},"flames")
.to("#right-red",{duration:0.15, scaleY:.3,yoyo:true, repeat:-1},"flames")


    function controlFlames(){
            gsap.set(".flames",{display:"block"});
            flamesTL.play()
        }