
import { Suspense } from "react";
import { BallCollider } from "@react-three/rapier";

export default function CharacterModel(props: CharacterModelProps) {

  return (
    <Suspense fallback={<capsuleGeometry args={[0.3, 0.7]} />}>
      <mesh castShadow>
        <capsuleGeometry args={[0.3, 0.7]} />
        <meshStandardMaterial color="mediumpurple" />
      </mesh>
      <mesh castShadow position={[0, 0.2, 0.2]}>
        <boxGeometry args={[0.5, 0.2, 0.3]} />
        <meshStandardMaterial color="mediumpurple" />
      </mesh>


      <BallCollider args={[0.5]} position={[0, 0.45, 0]} />
    </Suspense>
  );
}

export type CharacterModelProps = JSX.IntrinsicElements["group"];

