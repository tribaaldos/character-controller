import {
  useAnimations,
  useGLTF,
} from "@react-three/drei";
import { Suspense, useRef } from "react";
import { BallCollider } from "@react-three/rapier";

// import type { GLTF } from "three/examples/jsm/loaders/GLTFLoader";

interface KeqingProps {
  // Define props interface if necessary
}

export default function Keqing(props: KeqingProps) {
  const group = useRef<Group>();
  const { nodes, materials, animations } = useGLTF("./keqing.glb") as GLTF & {
    nodes: any;
  };
  const { actions } = useAnimations(animations, group);
  console.log(nodes, materials, actions)
  
  return (
    <Suspense fallback={<capsuleGeometry args={[0.3, 0.65]} />}>
      <BallCollider args={[0.5]} position={[0, 0.1, 0]} />

      <group ref={group} {...props} dispose={null} position={[2, 0, 2]}>
        <group name="Scene">
          <group name="body" rotation={[Math.PI / 2, 0, 0]} scale={0.96}>
            <group name="Body003">
              <skinnedMesh
                name="Bodymesh002"
                geometry={nodes.Bodymesh002.geometry}
                material={materials.照れmat}
                skeleton={nodes.Bodymesh002.skeleton}
              />
              <skinnedMesh
                name="Bodymesh002_1"
                geometry={nodes.Bodymesh002_1.geometry}
                material={materials.目星mat}
                skeleton={nodes.Bodymesh002_1.skeleton}
              />
              <skinnedMesh
                name="Bodymesh002_2"
                geometry={nodes.Bodymesh002_2.geometry}
                material={materials.肌mat}
                skeleton={nodes.Bodymesh002_2.skeleton}
              />
              <skinnedMesh
                name="Bodymesh002_3"
                geometry={nodes.Bodymesh002_3.geometry}
                material={materials.裙mat}
                skeleton={nodes.Bodymesh002_3.skeleton}
              />
              <skinnedMesh
                name="Bodymesh002_4"
                geometry={nodes.Bodymesh002_4.geometry}
                material={materials.辫mat}
                skeleton={nodes.Bodymesh002_4.skeleton}
              />
            </group>
            <primitive object={nodes.mixamorigHips} />
          </group>
        </group>
      </group>
    </Suspense>
  );
}

useGLTF.preload("./keqing.glb");
