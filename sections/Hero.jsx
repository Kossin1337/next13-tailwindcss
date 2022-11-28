'use client';

// import { weedBG } from '../public/weedBG.jpg';

const Hero = () => (
  <section className="relative w-screen h-screen">
    Hero section
    <img
      className="absolute top-0 left-0 opacity-40 z-0"
      src="weedBG.jpg"
      alt="WEED BG"
    />
  </section>
);

export default Hero;
