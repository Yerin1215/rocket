import { gsap } from "gsap";

export let fadeInTL = gsap.timeline();



fadeInTL.from("#background-fill",{alpha:0, duration:2.3, scale:15})
        .from("#cloud-1",{alpha:0, stagger:0.25, duration:0.3 })
        .from("#cloud-11",{alpha:0, stagger:0.25, duration:0.3 })
        .from("#cloud-12",{alpha:0, stagger:0.25, duration:0.3 })
        .from("#cloud-2",{alpha:0, stagger:0.25, duration:0.3 })
        .from("#moon",{opacity:0});
       