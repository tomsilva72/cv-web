import React, { useState } from 'react';
import '../estilos/Contacto.css';

function Contacto() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Gracias ${formData.name}, tu mensaje fue enviado!`);
        setFormData({ name: '', email: '', message: '' });
    };

    return (
        <section className="contact">
            <h3>Contacto</h3>
            <form onSubmit={handleSubmit} className="contact-form">
                <input
                    type="text"
                    name="name"
                    placeholder="Tu nombre"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Tu correo"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
                <textarea
                    name="message"
                    placeholder="Escribe tu mensaje..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                ></textarea>
                <button type="submit">Enviar</button>
            </form>
        </section>
    );
}

export default Contacto;