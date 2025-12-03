
import './estilos/principal.css';
import Encabezado from './componentes/Encabezado';
import Acerca from "./componentes/Acerca";
import Skills from "./componentes/Skills";
import Experiencia from "./componentes/Experiencia";
import Proyectos from "./componentes/Proyectos";
import Contacto from "./componentes/Contacto";
import Navbar from "./componentes/Navbar";


function App() {
  return (
      <div className="App">

          <Navbar />

          <Encabezado />

          <div className="container">
              <section id="acerca" name="acerca">
                  <Acerca />
              </section>

              <section id="skills" name="skills">
                  <Skills />
              </section>

              <section id="experiencia" name="experiencia">
                  <Experiencia />
              </section>

              <section id="proyectos" name="proyectos">
                  <Proyectos />
              </section>

              <section id="contacto" name="contacto">
                  <Contacto />
              </section>
          </div>
      </div>
  );
}

export default App;
