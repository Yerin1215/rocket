import { gsap } from "gsap";
import { GSDevTools } from "gsap/GSDevTools";

import { zoomTL } from "./zoomIn"
import { fadeInTL } from "./fadeIn"
import { spaceShipTL } from "./space-ship"
import { liftOffTL } from "./listOff"

gsap.registerPlugin(GSDevTools);

let mainTL = gsap.timeline();

mainTL.add(fadeInTL)
      .add(zoomTL)
    //   .addLabel("marker")
      .add(spaceShipTL)
      .add(liftOffTL);


    //   mainTL.play("marker");


// GSDevTools.create();