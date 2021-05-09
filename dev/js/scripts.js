import { gsap } from "gsap";
import { GSDevTools } from "gsap/GSDevTools";

import { zoomTL } from "./zoomIn"
import { fadeInTL } from "./fadeIn"
import { spaceShipTL } from "./space-ship"
import { liftOffTL } from "./liftOff"
import { flightTL } from "./flightPath"
import { moonZoomOutTL } from "./moonZoom"

gsap.registerPlugin(GSDevTools);

let mainTL = gsap.timeline();

mainTL.add(fadeInTL)
      .add(zoomTL)
      .add(spaceShipTL) 
      .add(liftOffTL)
      // .addLabel("marker")
      .add(flightTL)
      .add(moonZoomOutTL);


      // mainTL.play("marker");
     mainTL.play();

// console.log(numberThing);

GSDevTools.create();