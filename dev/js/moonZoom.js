import { gsap } from "gsap";

gsap.set("#moon",{transformOrigin:"center bottom"});

export let moonZoomOutTL = gsap.timeline();

// moonZoomOutTL.to("#moon",{duration:4, y:"-=1200", scale: 0.6}, "-=13")
