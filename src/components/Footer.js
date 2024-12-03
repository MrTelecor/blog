import React from 'react';
import { Container, Row, Col, Form, Button, Nav } from 'react-bootstrap';

function Footer() {
  return (
    <footer className="bg-dark text-light pt-4">
      <Container>
        <Row>
          {/* Enlaces rápidos */}
          <Col md={3}>
            <h5>Enlaces Rápidos</h5>
            <Nav className="flex-column">
              <Nav.Link href="/" className="text-light">Inicio</Nav.Link>
              <Nav.Link href="/about-me" className="text-light">Sobre Mi</Nav.Link>
              <Nav.Link href="/login" className="text-light">Iniciar Sesión</Nav.Link>
              <Nav.Link href="/admin" className="text-light">Crear Post</Nav.Link>
            </Nav>
          </Col>

          {/* Sección de contacto */}
          <Col md={3}>
            <h5>Contacto</h5>
            <p>
              <i className="bi bi-envelope-fill"></i> iker.lario.flores@parteducacio.com
            </p>
            <p>
              <i className="bi bi-phone-fill"></i> +34 645 676 868
            </p>
            <p>
              <i className="bi bi-geo-alt-fill"></i> Barcelona, España
            </p>
          </Col>

          {/* Suscripción al boletín */}
          <Col md={3}>
            <h5>Suscríbete</h5>
            <Form>
              <Form.Group className="mb-2">
                <Form.Control
                  type="email"
                  placeholder="Introduce tu email"
                  className="bg-light"
                />
              </Form.Group>
              <Button variant="primary" type="submit" className="w-100">
                Suscribirse
              </Button>
            </Form>
          </Col>

          {/* Redes sociales */}
          <Col md={3}>
            <h5>Síguenos</h5>
            <Nav>
              <Nav.Link
                href="https://facebook.com"
                className="text-light"
                target="_blank"
              >
                <i className="bi bi-facebook"></i> Facebook
              </Nav.Link>
              <Nav.Link
                href="https://twitter.com"
                className="text-light"
                target="_blank"
              >
                <i className="bi bi-twitter"></i> Twitter
              </Nav.Link>
              <Nav.Link
                href="https://instagram.com"
                className="text-light"
                target="_blank"
              >
                <i className="bi bi-instagram"></i> Instagram
              </Nav.Link>
              <Nav.Link
                href="https://linkedin.com"
                className="text-light"
                target="_blank"
              >
                <i className="bi bi-linkedin"></i> LinkedIn
              </Nav.Link>
            </Nav>
          </Col>
        </Row>

        {/* Línea divisoria */}
        <hr className="border-secondary my-3" />

        {/* Texto de copyright */}
        <div className="text-center pb-3">
          &copy; {new Date().getFullYear()} BlogApp. Todos los derechos reservados. 
          <br /> Desarrollado por Iker Lario Flores.
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
