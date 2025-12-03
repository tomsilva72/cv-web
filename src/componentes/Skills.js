import React from 'react';

function Skills() {
    const skills = ["Java", "JavaScript", "SQL", "Visual Basic", "React", "GitHub", "AppSheet", "CAD", "Bots de Trading"];

    return (
        <section id="skills">
            <h3>Habilidades Técnicas</h3>
            <div className="skills-grid">
                {skills.map((skill, index) => (
                    <div className="skill-card" key={index}>{skill}</div>
                ))}
            </div>
        </section>
    );
}

export default Skills;