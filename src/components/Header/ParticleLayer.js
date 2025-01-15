import React from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const SnowfallAnimation = () => {
  async function loadParticles(main) {
    await loadFull(main);
  }

  return (
    <Particles
      id="tsparticles"
      init={loadParticles}
      options={{
        fullScreen: { enable: true, zIndex: -1 },
        particles: {
          number: { value: 200, density: { enable: true, value_area: 800 } },
          color: { value: "#ffffff" },
          shape: { type: "circle" },
          opacity: {
            value: 0.8,
            random: true,
          },
          size: {
            value: { min: 1, max: 3 },
            random: true,
          },
          move: {
            enable: true,
            speed: 1,
            direction: "bottom",
            random: true,
            out_mode: "out",
          },
        },
        retina_detect: true,
      }}
    />
  );
};

export default SnowfallAnimation;
