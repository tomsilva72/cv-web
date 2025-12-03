import {React} from "react";
import fotoPortal from "../imagenes/foto-portal1.png";
import javaLogo from "../imagenes/java-logo-transparent.png"; // Add the path to your Java logo
import jsLogo from "../imagenes/javascript-logo.png"; // Add the path to your JavaScript logo
import erpLogo from "../imagenes/erp-logo.png"; // Add the path to your ERP logo
import webLogo from "../imagenes/soluciones-logo.png"; // Add the path to your web solutions logo

function Encabezado() {
    return (
        <header className={"encabezado"}>
            <img src={fotoPortal} alt="Foto de perfil" className="foto-perfil"/>
            <div>
                <h1>Tomás Silva</h1>
                <h2>Desarrollador Freelance | Profesor de Informática </h2>
                <p>📍 Córdoba – Argentina 🇦🇷 |
                    📧 tomassilva2010@gmail.com |
                    🔗 GitHub | LinkedIn</p>

                <p className={"destacado"}>Experto en Java, JavaScript, ERP y soluciones web</p>
                <div className="logos">
                    <img src={javaLogo} alt="Java Logo" className="logo"/>
                    <img src={jsLogo} alt="JavaScript Logo" className="logo"/>
                    <img src={erpLogo} alt="ERP Logo" className="logo"/>
                    <img src={webLogo} alt="Web Solutions Logo" className="logo"/>
                </div>
            </div>
        </header>
    );
}

export default Encabezado;