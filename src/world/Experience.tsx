import { Grid, KeyboardControls } from "@react-three/drei";
import { Perf } from "r3f-perf";
import { Physics } from "@react-three/rapier";
import Ecctrl from "../Ecctrl";
import Floor from "./Floor";
import Lights from "./Lights";
import { useControls } from "leva";
import CharacterModel from "../characters/CharacterModel";
import Player4 from "../characters/Player4";
import Keqing from '../characters/Keqing'
import City from '../environment/City';




export default function Experience() {
  const keyboardMap = [
    { name: "forward", keys: ["ArrowUp", "KeyW"] },
    { name: "backward", keys: ["ArrowDown", "KeyS"] },
    { name: "leftward", keys: ["ArrowLeft", "KeyA"] },
    { name: "rightward", keys: ["ArrowRight", "KeyD"] },
    { name: "jump", keys: ["Space"] },
    { name: "run", keys: ["Shift"] },
    { name: "action1", keys: ["1"] },
    { name: "action2", keys: ["2"] },
    { name: "action3", keys: ["3"] },
    { name: "action4", keys: ["KeyF"] },
  ];
  /**
   * Debug settings
   */
  const { physics, disableFollowCam } = useControls("World Settings", {
    physics: false,
    disableFollowCam: false,
  });

  /**
   * Keyboard control preset
   */


  return (
    <>
      <Perf position="top-left" />

      <Grid
        args={[300, 300]}
        sectionColor={"red"}
        cellColor={"red"}
        position={[0, 0.21, 0]}
        userData={{ camExcludeCollision: true }} // this won't be collide by camera ray
      />


      <Lights />

      <Physics debug={physics} timeStep="vary">
        <Player4 />
        <Keqing />
        {/* Keyboard preset */}
        <KeyboardControls map={keyboardMap}>
          {/* Character Control */}
          <Ecctrl
            debug
            animated
            followLight
            springK={2}
            dampingC={0.2}
            autoBalanceSpringK={1.2}
            autoBalanceDampingC={0.04}
            autoBalanceSpringOnY={0.7}
            autoBalanceDampingOnY={0.05}
            disableFollowCam={disableFollowCam}
          >
            {/* Replace your model here */}
            <CharacterModel />
          </Ecctrl>
        </KeyboardControls>


        {/* Floor */}
        <Floor />
        <City scale={0.02} position={[5, 2, 0]}/>

        {/* Shoting cubes */}
        {/* <ShotCube /> */}
      </Physics >
    </>
  );
}
