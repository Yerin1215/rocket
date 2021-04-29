import { gsap } from "gsap";

export let spaceShipTL = gsap.timeline();

gsap.set(".flames",{display:"none"});
gsap.set("#window",{transformOrigin: "center"});
gsap.set("#person",{transformOrigin: "bottom"});
gsap.set("#top-part",{transformOrigin: "center"});





spaceShipTL.from("#space-ship",{y:"+=700", duration:0.5})
            .from("#window",{scale:0, duration:0.5})
            .from("#person",{scale:0, duration:0.4})
            // .from("#top-part",{scale: 0, duration:0.5})
            .from("#orange-bar",{scale: 0, duration:0.25},"-=0.25")
            .from("#brown-bar",{scale: 0, duration:0.25})

            .to("#space-ship",{y:"+=320", duration:2, ease: "bounce.out"}, "+=0.28")