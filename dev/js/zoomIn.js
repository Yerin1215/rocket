import { gsap } from "gsap";

export let zoomTL = gsap.timeline();

gsap.set("#mtn-behind",{transformOrigin:"center"});
gsap.set("#mtn-front",{transformOrigin:"center"});
gsap.set(".trees",{transformOrigin:"center"});
gsap.set("#ground",{transformOrigin:"center"});


zoomTL.from("#mtn-behind",{duration:6, scale:6,ease: "power4.out",y:"+=1800"},"zoom")
            .from("#mtn-front",{duration:5, scale:5,ease: "power4.out",y:"+=800"},"zoom")
            .from("#ground",{duration:3, scale: 1.5,ease: "power4.out",y:"+=420"},"zoom")
            .from("#trees-3",{duration:5, scale:2,ease: "power4.out",y:"+=450"},"zoom")
            .from("#trees-2",{duration:5, scale:3,ease: "power4.out",y:"+=450"},"zoom")
            .from("#trees-1",{duration:4.75, scale:3,ease: "power4.out",y:"+=420"},"zoom")
            .from("#moon",{opacity:0})