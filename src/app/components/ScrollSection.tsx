import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Intro from "./Intro";

function ScrollSection() {
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);
  const textRefs = [useRef(null), useRef(null), useRef(null)]; // Array de referencias para los elementos de texto

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

    // Iterar sobre las referencias de texto y aplicar ScrollTrigger a cada una
    textRefs.forEach((textRef, index) => {
      ScrollTrigger.create({
        trigger: textRef.current,
        start: "top 80%",
        onEnter: () => {
          gsap.fromTo(
            textRef.current,
            { opacity: 0, y: 50 },
            { opacity: 1, y: 0, duration: 1, delay: index * 0.5, ease: "power3.out" } // Ajustar el retraso según el índice
          );
        },
        onLeaveBack: () => {
          gsap.to(textRef.current, { opacity: 0, y: 50, duration: 1, ease: "power3.in" });
        }
      });
    });

    return () => {
      pin.kill();
    };
  }, []);

  return (
    <section className="page-outer">
      <div ref={triggerRef}>
        <div ref={sectionRef} className="page-inner">
          <div className="page">
            <div className="flex flex-col justify-between ml-10">
              <h3 className="mt-10 font-bold text-lg">Automation of project control</h3>
              <div className="flex flex-row mt-8 gap-5">
                <div className="rounded-lg shadow-lg bg-primary-light p-4" style={{ width: "50%" }}>
                  <video autoPlay muted loop width="100%" height="auto" className="rounded-t-lg cover">
                    <source src="./videos/screen/automated-progress.mp4" type="video/mp4" />
                  </video>
                </div>
                <div className="w-1/2">
                  <h2 className="mb-4 font-semibold text-gray-900 dark:text-white text-lg">Automatic measurement of construction progress, as well as planning and scheduling</h2>
                  <ul className="space-y-2 text-gray-500 list-disc list-inside dark:text-gray-400">
                    <li>Without workers intervention</li>
                    <li>BIM enviroment</li>
                    <li>Automated quantity calculation</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="page">
            <div className="flex flex-col justify-between ml-10">
              <h3 className="mt-10 font-bold text-lg">Concrete strength measurements</h3>
              <div className="flex flex-row mt-8 gap-5">
                <div className="rounded-lg shadow-lg bg-primary-light p-4" style={{ width: "50%" }}>
                  <video autoPlay muted loop width="100%" height="auto" className="rounded-t-lg cover">
                    <source src="./videos/screen/planification.mp4" type="video/mp4" />
                  </video>
                </div>
                <div className="w-1/2">
                  <h2 className="mb-4 font-semibold text-gray-900 dark:text-white text-lg">Once concrete is detected, ObraLink measures the strength in real-time without the need for worker intervention</h2>
                  <ul className="space-y-2 text-gray-500 list-disc list-inside dark:text-gray-400">
                    <li>It accelerates construction processes</li>
                    <li>Concrete strength every 20 mins</li>
                    <li>Data displayed in a BIM context</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="page">
            <div className="flex flex-col justify-between ml-10">
              <h1 className="mt-10 font-bold text-lg">Concrete strength measurements</h1>
              <div className="flex flex-row mt-8 gap-5">
                <div className="rounded-lg shadow-lg bg-primary-light p-4" style={{ width: "50%" }}>
                  <video autoPlay muted loop width="100%" height="auto" className="rounded-t-lg cover">
                    <source src="./videos/screen/planification.mp4" type="video/mp4" />
                  </video>
                </div>
                <div className="w-1/2">
                  <h2 className="mb-4 font-semibold text-gray-900 dark:text-white text-lg">Key project data is automatically shared with concrete providers to enhance oversight and optimize concrete delivery</h2>
                  <ul className="space-y-2 text-gray-500 list-disc list-inside dark:text-gray-400">
                    <li>Live Concrete Pouring Updates</li>
                    <li>Continuous Monitoring of Concrete Strength and Behavior</li>
                    <li>Predictive Analysis for Concrete Deliveries</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ScrollSection;
