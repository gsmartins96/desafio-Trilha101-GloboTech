import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';

const MenuBar: React.FC = () => {
  return (
    <>
      <Navbar bg="primary" variant="dark">
        <Container>
        <Navbar.Brand href="#home">Gabriel Martins</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#about" >Sobre</Nav.Link>
          <Nav.Link href="#project" >Projetos</Nav.Link>
          <Nav.Link href="#contact" >Contato</Nav.Link>
        </Nav>
        </Container>
      </Navbar>
    </>
  )
}

export default MenuBar;