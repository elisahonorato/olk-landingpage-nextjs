import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Image from "next/image";

function Intro() {
    const textRef = useRef(null);

    useEffect(() => {
        gsap.from(textRef.current, {
      
            y: 50,
            duration: 1,
            ease: "power3.out"
        });
    }, []);

    return (
        <div className="intro-container flex flex-col justify-center items-center h-screen">
            <p className="text-lg">Empowering construction project execution through automation, reducing reliance on manual tasks, and optimizing industry processes.</p>
            <div ref={textRef} className="intro-text text-center">
                <h1 className="text-3xl font-bold mb-4">Welcome to Obralink</h1>
                <Image src="./images/logo_obralink.png" alt="Obralink Logo" className="w-24 h-auto mb-4" />
                
            </div>
        </div>
    );
}

export default Intro;
