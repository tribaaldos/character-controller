
import React, { useEffect, useState } from "react";
import { useGLTF, useAnimations, useKeyboardControls } from "@react-three/drei";
import { useControls } from "leva";
import { Suspense, useRef } from "react";
import { BallCollider } from "@react-three/rapier";
import { useGame } from "../stores/useGame";
import { useFrame } from "@react-three/fiber";
import * as THREE from 'three';
import keyboardMap from '../world/Experience'

export default function Player4(props: Player4Props) {
    const group = useRef<Group>();
    const { nodes, materials, animations } = useGLTF("./player4.glb") as GLTF & {
        nodes: any;
    };
    const { actions } = useAnimations(animations, group);

  

    /**
     * Character animations setup
     */
    const curAnimation = useGame((state) => state.curAnimation);
    const resetAnimation = useGame((state) => state.reset);
    const initializeAnimationSet = useGame(
      (state) => state.initializeAnimationSet
    );
  
    // Rename your character animations here
    const animationSet = {
        idle: 'idle',
        walking: 'walking',
        running: 'running',
        jumping: 'jumping',
    };
  
    useEffect(() => {
      // Initialize animation set
      initializeAnimationSet(animationSet);
    }, []);
  
    
  
    useEffect(() => {
      // Play animation
      const action = actions[curAnimation ? curAnimation : animationSet.idle];
    
      // When any action is clamp and finished reset animation
      (action as any)._mixer.addEventListener("finished", () => resetAnimation());
  
      return () => {
      };
    }, [curAnimation]);
    
    return (
        <Suspense fallback={<capsuleGeometry args={[0.3, 0.65]} />}>
            <BallCollider args={[0.5]} position={[0, 0.1, 0]} />

            <group ref={group} {...props} dispose={null}>
                <group name="Scene">
                    <group
                        name="arissaMeshes"
                        rotation={[Math.PI / 2, 0, 0]}
                        scale={0.01}
                    />
                    <group name="Armature" position={[0.013, 0.107, 0]}>
                        <skinnedMesh
                            name="arissaBody_Geo"
                            geometry={nodes.arissaBody_Geo.geometry}
                            material={materials.Arissa_MAT}
                            skeleton={nodes.arissaBody_Geo.skeleton}
                        />
                        <skinnedMesh
                            name="arissaCloak_Geo"
                            geometry={nodes.arissaCloak_Geo.geometry}
                            material={materials.Arissa_MAT}
                            skeleton={nodes.arissaCloak_Geo.skeleton}
                        />
                        <skinnedMesh
                            name="arissaSkirt_Geo"
                            geometry={nodes.arissaSkirt_Geo.geometry}
                            material={materials.Arissa_MAT}
                            skeleton={nodes.arissaSkirt_Geo.skeleton}
                        />
                        <skinnedMesh
                            name="arissaWeapons_Geo"
                            geometry={nodes.arissaWeapons_Geo.geometry}
                            material={materials.Arissa_MAT}
                            skeleton={nodes.arissaWeapons_Geo.skeleton}
                        />
                        <primitive object={nodes.mixamorigHips} />
                        <primitive object={nodes.Ctrl_Master} />
                        <primitive object={nodes.Ctrl_ArmPole_IK_Left} />
                        <primitive object={nodes.Ctrl_Hand_IK_Left} />
                        <primitive object={nodes.Ctrl_ArmPole_IK_Right} />
                        <primitive object={nodes.Ctrl_Hand_IK_Right} />
                        <primitive object={nodes.Ctrl_Foot_IK_Left} />
                        <primitive object={nodes.Ctrl_LegPole_IK_Left} />
                        <primitive object={nodes.Ctrl_Foot_IK_Right} />
                        <primitive object={nodes.Ctrl_LegPole_IK_Right} />
                    </group>
                    <group name="cs_grp">
                        <group name="cs_arm_fk" position={[1.5, 8.5, 0]} scale={0.822} />
                        <group name="cs_calf_fk" position={[0.5, 8.5, 0]} scale={0.822} />
                        <group name="cs_circle" position={[0.5, 4.5, 0]} scale={0.206} />
                        <group name="cs_circle001" position={[0.5, 4.5, 0]} scale={0.206} />
                        <group name="cs_circle_025" position={[2.5, 4.5, 0]} scale={0.206} />
                        <group
                            name="cs_foot"
                            position={[0.5, 10.5, 0]}
                            rotation={[-Math.PI, 0, 0]}
                            scale={0.308}
                        />
                        <group
                            name="cs_foot001"
                            position={[0.5, 10.5, 0]}
                            rotation={[-Math.PI, 0, 0]}
                            scale={0.308}
                        />
                        <group
                            name="cs_foot002"
                            position={[0.5, 10.5, 0]}
                            rotation={[-Math.PI, 0, 0]}
                            scale={0.308}
                        />
                        <group
                            name="cs_foot_01"
                            position={[0.5, 18.5, 0]}
                            rotation={[0, 1.571, 0]}
                            scale={2.186}
                        />
                        <group name="cs_foot_roll" position={[0.5, 12.5, 0]} scale={0.592} />
                        <group name="cs_forearm_fk" position={[2.5, 8.5, 0]} scale={0.822} />
                        <group
                            name="cs_hand"
                            position={[0.5, 19.5, 0]}
                            rotation={[-Math.PI, 0, 0]}
                            scale={0.308}
                        />
                        <group name="cs_head" position={[0.5, 13.5, 0]} scale={0.206} />
                        <group name="cs_hips" position={[0.5, 11.5, 0]} scale={0.206} />
                        <group name="cs_master" position={[0.5, 17.5, 0]} scale={0.1} />
                        <group name="cs_neck" position={[0.5, 14.5, 0]} scale={0.206} />
                        <group
                            name="cs_shoulder_left"
                            position={[0.5, 15.5, 0]}
                            rotation={[-Math.PI, -Math.PI / 2, 0]}
                            scale={1.038}
                        />
                        <group
                            name="cs_shoulder_right"
                            position={[0.5, 16.5, 0]}
                            rotation={[-Math.PI, -Math.PI / 2, 0]}
                            scale={1.038}
                        />
                        <group name="cs_sphere" position={[0.5, 2.5, 0]} scale={0.206} />
                        <group name="cs_sphere_012" position={[3.5, 2.5, 0]} scale={0.206} />
                        <group
                            name="cs_square"
                            position={[1.5, 1.497, 0]}
                            rotation={[-Math.PI, 0, 0]}
                            scale={0.154}
                        />
                        <group
                            name="cs_square_2"
                            position={[0.5, 1.497, 0]}
                            rotation={[-Math.PI, 0, 0]}
                            scale={0.154}
                        />
                        <group name="cs_thigh_fk" position={[0.5, 7.5, 0]} scale={0.822} />
                        <group name="cs_toe" position={[0.5, 9.5, 0]} scale={0.429} />
                    </group>
                </group>
            </group>
        </Suspense>

    );
}

useGLTF.preload("/player4.glb");
