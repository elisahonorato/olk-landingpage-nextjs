import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

function Intro() {
    const textRef = useRef(null);

    useEffect(() => {
        gsap.fromTo(
            textRef.current,
            { opacity: 0, y: 100 },
            { opacity: 1, y: 0, duration: 1, delay: 1 }
        );
    }, []);

    return (
        <div className="page-content">
            <div className="absolute top-0 left-0 w-full h-screen z-0">
                <video autoPlay muted loop className="w-full h-screen object-cover" >
                    <source src="./videos/background-video.mp4" type="video/mp4" />
                </video>
            </div>
            <div className="relative overflow-hidden w-full h-screen">
                <div className="flex flex-col relative z-20 ml-10">
                    <div className="text-start w-1/3">
                        <p ref={textRef} className="text-lg text-white font-bold description-text">
                            Empowering construction project execution through automation, reducing reliance on manual tasks, and optimizing industry processes.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Intro;
