import { use, useState, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { Scroll } from "@react-three/drei";


interface SectionInfo {
  title: string;
  content: string;
  videoUrl: string;
}

const ScrollSection = () => {
  gsap.registerPlugin(ScrollTrigger);
  const sectionInfo: SectionInfo[] = [
    {
      title: "Terminaciones",
      content: "Automatización de la medición de avance de obra, a través de la detección de cambios en el modelo BIM y la comparación con el avance real de la obra.",
      videoUrl: "./videos/screen/automated-progress.mp4"
    },
    {
      title: "Planiﬁcación",
      content: "Planificación de la obra a través de la generación de un modelo BIM, el cual permite la detección de interferencias y la generación de un programa de obra.",
      videoUrl: "./videos/screen/planification.mp4"
    },
    {
      title: "Resistencia",
      content: "Medición de la resistencia del concreto, a través de la detección de cambios en el modelo BIM y la comparación con el avance real de la obra.",
      videoUrl: "./videos/screen/resistencia.mp4"

    }
  ];

  // Estado para controlar la sección activa, se inicia en la sección 0
  const [activeSection, setActiveSection] = useState<number>(0);
  useEffect(() => {
    // Animación para la sección de "Principales Servicios"
    gsap.fromTo(
      ".main-text",
      { opacity: 0, x: 100 },
      {
        opacity: 1,
        x: 0,
        duration: 2,
        ease: "power4.out",
        scrollTrigger: {
          trigger: ".services-scroll",
          start: "top 80%",
          end: "top 50%",
          scrub: 1,
          toggleActions: "play none none reverse"
        }
      }
    );
  }, []);      
      
  useEffect(() => {

    gsap.fromTo(
      `.text-section-${activeSection}`,
      { opacity: 0, x: 100 },
      { opacity: 1, x: 0, duration: 1, delay: 1 }
    );
    gsap.fromTo(
      `.video-section-${activeSection}`,
      { opacity: 0, x: 100 },
      { opacity: 1, x: 0, duration: 1, delay: 0 }
    );

  }
    , [activeSection]);



  return (
    <div className="flex flex-col gap-4 services-scroll page-content">
      <div className="pt-10">
        <h1 className="text-2xl font-bold main-text">Medición de Avance</h1>
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex flex-row gap-2 justify-start">
          {sectionInfo.map((section, index) => (
            <div
              key={index}
              className="flex flex-col gap-2 cursor-pointer"
              onClick={() => setActiveSection(index)}
            >
              <h1 className={`${activeSection === index ? "font-bold underline " : "font-normal opacity-50"
                } `}>{section.title}</h1>
            </div>
          ))}
        </div>
        <div>
          {sectionInfo.map((section, index) => (
            <div
              key={index}
              className={`flex flex-row gap-4 justify-between h-full w-full bg-gray-100 ${activeSection === index ? "" : "hidden"
                }`}
            >
              
              {activeSection === index && (
                <div className={`video-section-${index} rounded-lg shadow-lg bg-primary-light p-4 h-full`}>
                  <video autoPlay muted loop width="100%" height="auto" className="rounded-t-lg cover">
                    <source src={section.videoUrl} type="video/mp4" />
                  </video>
                </div>
                
              )}
              <p className={`text-section-${index} text-lg`}>{section.content}</p>

            </div>
          ))}
        </div>
      </div>

    </div>

  );
};

export default ScrollSection;
