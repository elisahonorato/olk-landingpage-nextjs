import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Intro from "./Intro";


function ScrollSection() {
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const pin = gsap.fromTo(
      sectionRef.current,
      {
        translateX: 0,
      },
      {
        translateX: "-300vw",
        ease: "none",
        duration: 1,
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          end: "2000 top",
          scrub: 0.6,
          pin: true,
        },
      }
    );
    return () => {
      {/* A return function for killing the animation on component unmount */ }
      pin.kill();
    };
  }, []);

  return (
    <section className="page-outer">
      {/* The section up act just as a wrapper. If the trigger (below) is the
      first jsx element in the component, you get an error on route change */}

      {/* The div below act just as a trigger. As the doc suggests, the trigger and 
      the animation should alway be two separated refs */}
      <div ref={triggerRef}>
        <div ref={sectionRef} className="page-inner">
        <div className="page">
          <div className="flex flex-col justify-between ml-10">
            <h3 className="mt-10 font-bold text-lg">Automation of project control</h3>
            <div className="rounded-lg shadow-lg bg-primary-light p-4 mt-10" style={{ width: "50%" }}>
              <video autoPlay muted loop width="100%" height="auto" className="rounded-t-lg cover">
                <source src="./videos/screen/automated-progress.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
        <div className="page">
          <div className="flex flex-col justify-between ml-10">
            <h3 className="mt-10 font-bold text-lg">Concrete strength measurements</h3>
            <div className="rounded-lg shadow-lg bg-primary-light p-4 mt-10" style={{ width: "50%" }}>
              <video autoPlay muted loop width="100%" height="auto" className="rounded-t-lg cover">
                <source src="./videos/screen/planification.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
        <div className="page">
          <div className="flex flex-col justify-between ml-10">
            <h3 className="mt-10 font-bold text-lg">Connecting jobsite data with concrete providers</h3>
            <div className="rounded-lg shadow-lg bg-primary-light p-4 mt-10" style={{ width: "50%" }}>
              <video autoPlay muted loop width="100%" height="auto" className="rounded-t-lg cover">
                <source src="./videos/screen/resistencia.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
        <div className="page">
          <div className="flex flex-col justify-center ml-10">
            <h3 className="mt-10 font-bold text-lg">Monitoring of concrete curing with Cbot</h3>

          </div>
        </div>
        </div>
      </div>
    </section>
  );
}

export default ScrollSection;