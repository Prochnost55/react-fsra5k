import React from 'react';
import { MAX_NUMBER_BUY_LIMIT } from '../../constants/BuyNumberConsts';
import Dropdown from '../Dropdown/Dropdown';
import { Button, Container, Row, Col } from 'react-bootstrap';

const BuyNumber = (props) => {
  const { selectedNumbers } = props;
  return (
    <Row className="d-flex justify-content-center flex-column">
      <Col>Please Select a numbers to buy</Col>
      {selectedNumbers.map((eachSelectedNumber, idx) => {
        return (
          <Col className="mt-1">
            <Dropdown
              key={'number-dropdown-' + idx}
              idx={idx}
              data={props.availableNumbers}
              handleNumberSelect={props.handleNumberSelect}
              defaultValue={eachSelectedNumber}
            />
          </Col>
        );
      })}

      <Col lg="6">
        {props.selectedNumbers?.length >= MAX_NUMBER_BUY_LIMIT ? (
          <div className="mt-4 text-center">
            You can only buy {MAX_NUMBER_BUY_LIMIT} numbers
          </div>
        ) : (
          <Button
            className="mt-4 float-right"
            variant="outline-primary"
            onClick={props.handleBuyMore}
          >
            + Buy another Number
          </Button>
        )}
      </Col>
    </Row>
  );
};

export default BuyNumber;
