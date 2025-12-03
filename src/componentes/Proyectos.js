import React from 'react';
import '../estilos/Proyectos.css';

function Proyectos() {
    const projects = [
        {
            title: "Trading Bot Optimizado",
            description: "Bot de trading con gestión de spreads y análisis técnico.",
            link: "https://github.com/tuusuario/trading-bot"
        },
        {
            title: "App de Nutrición",
            description: "Aplicación React para seguimiento de dieta y objetivos fitness.",
            link: "https://github.com/tuusuario/nutricion-app"
        },
        {
            title: "Portfolio Freelance",
            description: "Sitio web personal responsivo para mostrar proyectos y contacto.",
            link: "https://github.com/tuusuario/portfolio"
        }
    ];

    return (
        <section className="projects">
            <h3>Proyectos</h3>
            <div className="projects-grid">
                {projects.map((proj, index) => (
                    <div className="project-card" key={index}>
                        <h4>{proj.title}</h4>
                        <p>{proj.description}</p>
                        <a href={proj.link} target="_blank" rel="noopener noreferrer">
                            Ver en GitHub
                        </a>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Proyectos;