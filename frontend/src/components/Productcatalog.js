// ProductCatalog.js

import React from 'react';
import { Container, Navbar, Nav, Card, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Productcatalog.css'; // Create this file for custom styles

const Productcatalog = () => {
  // Dummy product data
  const products = [
    { id: 1, name: 'Product 1', price: '$19.99' },
    { id: 2, name: 'Product 2', price: '$29.99' },
    { id: 3, name: 'Product 3', price: '$39.99' },
    { id: 4, name: 'Product 4', price: '$9.99' },
    { id: 5, name: 'Product 5', price: '$79.99' },
    { id: 6, name: 'Product 6', price: '$69.99' },
    { id: 7, name: 'Product 7', price: '$999.99' },

    // Add more products as needed
  ];

  return (
    <Container>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Navbar.Brand href="#home">Productcatalog</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <Row className="mt-3">
        {products.map((product) => (
          <Col key={product.id} sm={6} md={4} lg={3}>
            <Card>
              <Card.Img variant="top" src={`https://placekitten.com/300/200?image=${product.id}`} />
              <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>{product.price}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Productcatalog;
