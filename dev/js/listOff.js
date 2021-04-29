import { gsap } from "gsap";
export let liftOffTL = gsap.timeline();

gsap.set("#space-ship",{transformOrigin:"center"});
gsap.set("#smoke-1",{transformOrigin:"center bottom"});

liftOffTL.to("#space-ship",{duration:0.15, rotation:-10,ease:"none"})
        .to("#space-ship",{duration:0.15, rotation:10, yoyo:true, repeat:10,ease:"none"})
        .to("#space-ship",{duration:0.15, rotation:0,ease:"none", onComplete:controlFlames})
        .from("#smoke-1",{duration:3.5, y:"+=150", scale:.75, alpha:0.5, ease: "power3.in"},'upAndAway')

        function controlFlames(){
            gsap.set(".flames",{display:"block"});
            flamesTL.play()
        }