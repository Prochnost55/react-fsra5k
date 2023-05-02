import React from 'react';
import './style.css';
import BuyNumber from './components/BuyNumber/BuyNumberWrapper';
import { Container } from 'react-bootstrap';
// 1. there would an api to get the list of phone numbers - use mock data as of now
// 2. there should be a dropdown to select/buy a phone number
// 3. if user wants to buy more than one then click on buy anothe rnumber. the other dorpdown will show remaining numbers
// 4. there is an over all limit to buy 5 numbers.

export default function App() {
  return (
    <Container className="p-3">
      <h1>Hello User!</h1>
      <BuyNumber />
    </Container>
  );
}
