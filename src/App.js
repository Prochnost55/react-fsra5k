import React from 'react';
import './style.css';
import BuyNumberWrapper from './components/BuyNumber/BuyNumberWrapper';
import { Container } from 'react-bootstrap';

export default function App() {
  return (
    <Container className="p-3">
      <h1>Hello User!</h1>
      <BuyNumberWrapper />
    </Container>
  );
}
