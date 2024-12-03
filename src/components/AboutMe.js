import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import fotoPerfil from './img/foto_cv_lc_es_4.jpg'; // Importamos la imagen

function AboutMe() {
  return (
    <div>

      <Container className="mt-5">
        {/* Sección principal */}
        <Row className="align-items-center">
          <Col md={4} className="text-center">
            <Image
              src={fotoPerfil}
              alt="Foto de perfil"
              roundedCircle
              fluid
            />
          </Col>
          <Col md={8}>
            <h2>Sobre Mi</h2>
            <p>
              ¡Hola! Soy Iker Lario Flores, un apasionado del desarrollo web y creador de este blog. 
              Mi objetivo principal es compartir ideas, proyectos y recursos para ayudar a otros a aprender, crecer y alcanzar sus objetivos en el mundo de la tecnología.
            </p>
            <p>
              Con una formación en desarrollo de aplicaciones multiplataforma y experiencia en tecnologías como React, Firebase, y Node.js, disfruto creando proyectos innovadores que combinan funcionalidad y diseño. Creo firmemente que la tecnología tiene el poder de transformar vidas y que compartir conocimiento es la clave para un progreso colectivo.
            </p>
          </Col>
        </Row>

        {/* Sección de habilidades e intereses */}
        <Row className="mt-5">
          <Col>
            <h3>Habilidades e Intereses</h3>
            <p>
              A lo largo de mi trayectoria, he adquirido experiencia en diversas áreas relacionadas con el desarrollo web y móvil, incluyendo:
            </p>
            <ul>
              <li>Desarrollo front-end con React, Angular, y Vue.js.</li>
              <li>Desarrollo back-end utilizando Node.js y bases de datos como Firebase y MongoDB.</li>
              <li>Diseño de interfaces centradas en la usabilidad y experiencia del usuario.</li>
              <li>Colaboración en equipos ágiles y metodologías como SCRUM.</li>
            </ul>
            <p>
              Además, soy un gran entusiasta de la tecnología emergente, como la inteligencia artificial y la realidad aumentada, y siempre estoy buscando formas de integrar estas herramientas en mis proyectos.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default AboutMe;
