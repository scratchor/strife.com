import React from 'react';
import { Container, Row } from 'react-bootstrap';

export const Layout = props => (
  <Container>
    <Row className="justify-content-center">{props.children}</Row>
  </Container>
);
