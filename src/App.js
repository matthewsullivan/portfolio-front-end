import React from 'react';

import useWindowSize from '@rooks/use-window-size';
import ParticleImage, {Vector, forces} from 'react-particle-image';

import './App.css';

const particleOptions = {
  filter: ({x, y, image}) => {
    const pixel = image.get(x, y);

    return pixel.b > 50;
  },
  radius: () => Math.random() * 1.5 + 0.5,
  mass: () => 40,
  friction: () => 0.15,
  initialPosition: ({canvasDimensions}) => {
    return new Vector(canvasDimensions.width / 2, canvasDimensions.height / 2);
  },
};

const motionForce = (x, y) => {
  return forces.disturbance(x, y, 5);
};

export default function App() {
  const {innerWidth, innerHeight} = useWindowSize();
  return (
    <div className="app">
      <div className="landing">
        <ParticleImage
          backgroundColor="101427"
          className="landing__particles"
          entropy={10}
          height={Number(innerHeight)}
          maxParticles={1500}
          mouseMoveForce={motionForce}
          particleOptions={particleOptions}
          scale={1.5}
          src={'/assets/logo.png'}
          touchMoveForce={motionForce}
          width={Number(innerWidth)}
        />
      </div>
    </div>
  );
}
