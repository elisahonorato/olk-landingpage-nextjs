import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

function Navbar () {
    gsap.registerPlugin(ScrollTrigger);

    useEffect(() => {
        gsap.to(".page-content-x", {
            scrollTrigger: {
                trigger: ".main-text",
                start: "top 80%",
                end: "top 50%",
                scrub: 1,
                toggleActions: "play none none reverse"
            },
            y: -100,
   
        });

    }, []);
  


    return (
        <div className="fixed top-0 left-0 w-full z-50 page-content-x">
            <nav className="flex justify-between items-center p-4">
                <div>
                    <img src="./images/logo_obralink.png" alt="Obralink Logo" className="w-20 h-auto" width={100} height={100} />
                </div>
                <div>
                    <ul className="flex gap-4">
                        <li>
                            <a href="#cbot">CiBots</a>
                        </li>
                        <li>
                            <a href="#software">Software</a>
                        </li>
                        <li>
                            <a href="#contact">Contact</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}
export default Navbar;

