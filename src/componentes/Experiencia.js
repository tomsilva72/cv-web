import React from 'react';
import '../estilos/Experiencia.css';

function Experiencia() {
    const jobs = [
        { role: "Desarrollador Independiente", company: "Ts Soft – Córdoba", period: "Actualidad", description: "Aplicaciones en Java y JavaScript, sistemas de gestión y páginas web." },
        { role: "Profesor Técnico", company: "Escuela Técnica N°3 – Tinogasta", period: "1995 – presente", description: "Dictado de TIC, CAD, Electricidad y Redes." },
        { role: "Secretario de Coordinación", company: "Municipalidad de Fiambalá", period: "2016", description: "Gestión de proyectos municipales en diversas áreas." },
        { role: "Coordinador Educación Técnica", company: "Ministerio de Educación Catamarca", period: "2015 – 2016", description: "Supervisión pedagógica y asistencia técnica a escuelas técnicas." }
    ];

    return (
        <section id="experience" className="experience">
            <h3>Experiencia Laboral</h3>
            <div className="timeline">
                {jobs.map((job, index) => (
                    <div className="timeline-item" key={index}>
                        <div className="timeline-dot"></div>
                        <div className="timeline-content">
                            <h4>{job.role} - <span>{job.company}</span></h4>
                            <p className="period">{job.period}</p>
                            <p>{job.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Experiencia;