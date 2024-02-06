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
        <div className="page">
            <div className="relative overflow-hidden w-full h-screen">
                <video autoPlay muted loop className="absolute top-0 left-0 w-full h-full object-cover">
                    <source src="./videos/background-video.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>

                <div className="flex flex-col relative z-20 ml-10">
                    <img src="./images/logo_obralink.png" alt="Obralink Logo" className="w-60 h-auto mb-4" width={100} height={100} />
                    <div className="text-start w-1/3">
                        <p ref={textRef} className="text-lg text-white font-bold">
                            Empowering construction project execution through automation, reducing reliance on manual tasks, and optimizing industry processes.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Intro;
