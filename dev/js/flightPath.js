import { gsap } from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { MotionPathHelper } from "gsap/MotionPathHelper";

gsap.registerPlugin(MotionPathPlugin, MotionPathHelper);

gsap.set("#moon",{transformOrigin:"center bottom"});


export let flightTL = gsap.timeline();

flightTL.to("#space-ship", {
    duration: 15,
    motionPath: {
        path: "#rocketPath",
        align:"#rocketPath",
        autoRotate: true
    },
    ease: "power4.out"
})
.to("#moon",{alpha:1, duration:2, x:"+=530", y:"-=640", scale: 5, ease: "none"},"-=13")
.to(".flames",{opacity: 0}, "-=8")
.to("#space-ship",{duration:2.7, y:"-=1200", x:"-=100", scale: 0.6}, "-=6.2")
.to(".flames",{opacity: 1}, "-=6.2")
.to("#space-ship",{opacity:"0"}, "-=5")
.to("#moon",{opacity:"0"}, "-=1.5")






// MotionPathHelper.create("#space-ship");