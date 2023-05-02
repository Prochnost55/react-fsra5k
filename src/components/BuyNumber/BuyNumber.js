import React from 'react';
import data from '../../../data.js';
import { MAX_NUMBER_BUY_LIMIT } from '../../constants/BuyNumberConsts';
import Dropdown from '../Dropdown/Dropdown';
import BuyNumber from './BuyNumber';
import { Button, Row } from 'react-bootstrap';

const BuyNumber = (props) => {
  const { selectedNumbers } = props;
  // console.log('asdf=>', selectedNumbers);
  return (
    <Row>
      <div>Please Select a numbers to buy</div>

      {selectedNumbers.map((eachSelectedNumber, idx) => {
        return (
          <Dropdown
            key={'number-dropdown-' + idx}
            idx={idx}
            data={props.availableNumbers}
            handleNumberSelect={props.handleNumberSelect}
            defaultValue={eachSelectedNumber}
          />
        );
      })}

      <br />
      {props.selectedNumbers?.length >= MAX_NUMBER_BUY_LIMIT ? (
        <div>You can only buy {MAX_NUMBER_BUY_LIMIT} numbers</div>
      ) : (
        <Button variant="outline-primary" onClick={props.handleBuyMore}>
          Buy another Number
        </Button>
      )}
    </Row>
  );
};

export default BuyNumber;
