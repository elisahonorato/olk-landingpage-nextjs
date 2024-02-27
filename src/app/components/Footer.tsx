import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

function Footer() {
    const inputClass = "lg:text-2xl md:text-md text-primary-dark font-light bg-primary-yellow ring-0 focus:ring-0 focus:ring-primary-dark focus:ring-opacity-50 focus:outline-none text-primary-dark placeholder-primary-dark" ;
    const lineClass = "w-48 h-0.1";

    return (
        <div>
            <div className="flex mt-20">
                <div className="flex bg-primary-dark text-primary-light page-content">
                    <h1 className="text-4xl">Interesado en trabajar con nosotros?</h1>
                </div>
                <div className="flex flex-col gap-4 bg-primary-yellow text-primary-dark page-content">
                    <div>
                        <input type="text" id="first_name" className={inputClass} placeholder="Tu nombre *" required />
                        <hr className={lineClass}></hr>
                    </div>
                    <div>
                        <input type="email" id="email" className={inputClass} placeholder="Tu correo *" required />
                        <hr className={lineClass}></hr>
                    </div>
                    <div>
                        <input type="text" id="phone" className={inputClass} placeholder="Tu teléfono *" required />
                        <hr className={lineClass}></hr>
                    </div>
                    <div>
                        <input type="text" id="company" className={inputClass} placeholder="Mensaje *" />
                        <hr className={lineClass}></hr>
                    </div>
                    <button className="bg-primary-dark text-primary-light text-xl font-light p-4 rounded-full mt-2">Enviar</button>
                </div>
            </div>
            <div className="flex flex-col gap-4 text-primary-dark page-content">
                <div className="">
                    <div className="flex lg:flex-col md:flex-row justify-between">
                        <img src="./images/logo_obralink.png" alt="Obralink Logo" className="w-20 h-auto object-contain" />
                        
 
                      
                    </div>
                    
                </div>
            </div>
        </div>
    );
}

export default Footer;
