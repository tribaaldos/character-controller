import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import { Canvas } from '@react-three/fiber';
import Experience from './world/Experience.js';
import { Leva } from 'leva';
import { EcctrlJoystick } from './EcctrlJoystick.jsx';
import { Suspense } from 'react';

import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root')!);

const EcctrlJoystickControls = () => {
  const [isTouchScreen, setIsTouchScreen] = useState(false);
  useEffect(() => {
    // Check if using a touch control device, show/hide joystick
    if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
      setIsTouchScreen(true);
    } else {
      setIsTouchScreen(false);
    }
  }, []);

  return (
    <>
      {isTouchScreen && <EcctrlJoystick buttonNumber={5} />}
    </>
  );
};

const App = () => (
  <>
    <Leva collapsed />
    <EcctrlJoystickControls />
    <Canvas
      frameloop="demand"
      shadows
      camera={{
        fov: 65,
        near: 0.1,
        far: 1000,
      }}
      onPointerDown={(e) => {
        if (e.pointerType === 'mouse') {
          (e.target as HTMLCanvasElement).requestPointerLock();
        }
      }}
    >
      <Suspense fallback={null}>
        <Experience />
      </Suspense>
    </Canvas>
  </>
);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
