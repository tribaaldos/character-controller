import { RigidBody } from "@react-three/rapier";

export default function Floor() {
  return (
    <RigidBody type="fixed">
      {/* <mesh receiveShadow position={[0, 0, 0]}>
        <boxGeometry args={[300, 0.2, 300]} />
        <meshStandardMaterial color="lightblue" />
      </mesh> */}
    </RigidBody>
  );
}
