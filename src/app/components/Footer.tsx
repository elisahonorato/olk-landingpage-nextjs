import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

function Footer() {


    return (
        <footer className="bg-gray-800 text-white py-12 flex justify-center p-4">
            <div className="container grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="col-span-1 lg:col-span-2 flex flex-col">
                    <div className="mb-8">
                        <h2 className="text-xl font-bold mb-2">Contacto</h2>
                        <p className="text-sm leading-relaxed">Si tienes alguna pregunta o comentario, no dudes en contactarnos. Estamos aquí para ayudarte.</p>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                        <div>
                            <h3 className="text-lg font-bold mb-2">Dirección</h3>
                            <p className="text-sm">Presidente Errazuriz 3471, Las Condes</p>
                            <p className="text-sm">Santiago, Chile</p>
                        </div>
                        <div>
                            <h3 className="text-lg font-bold mb-2">Correo Electrónico</h3>
                            <p className="text-sm"><a href="mailto:info@obralink.com">info@obralink.com</a></p>
                        </div>
                    </div>
                </div>
                <div className="col-span-1 lg:col-span-1 flex items-center justify-center">
                    <form>
                        <div className="flex flex-col">
                            <h3 className="text-lg font-bold mb-4">¿Tienes alguna pregunta?</h3>
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                                <input type="text" className="w-full bg-gray-700 text-white py-2 px-4 rounded-md placeholder-gray-400 focus:outline-none" placeholder="Nombre" />
                                <input type="email" className="w-full bg-gray-700 text-white py-2 px-4 rounded-md placeholder-gray-400 focus:outline-none" placeholder="Correo Electrónico" />
                            </div>
                            <textarea className="w-full bg-gray-700 text-white py-2 px-4 rounded-md placeholder-gray-400 focus:outline-none mt-4" rows={4} placeholder="Mensaje"></textarea>
                            <button className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-md mt-4">Enviar</button>
                        </div>
                    </form>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
