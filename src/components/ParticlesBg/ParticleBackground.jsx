import React from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import ParticleConfig from "./particle-config";

export default function ParticleBackground() {
    const particlesInit = async (main) => {
        await loadFull(main);
    };

    const particlesLoaded = (container) => {
        console.log("Particles container loaded", container);
    };

    return (
        <Particles 
            id="particles" 
            className="particles-css" 
            init={particlesInit}
            loaded={particlesLoaded}
            options={ParticleConfig}
        />
    );
}