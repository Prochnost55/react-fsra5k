import React from 'react';
import { MAX_NUMBER_BUY_LIMIT } from '../../constants/BuyNumberConsts';
import Dropdown from '../Dropdown/Dropdown';
import { Button, Container, Row, Col } from 'react-bootstrap';

const BuyNumber = (props) => {
    const { selectedNumbers } = props;
    // console.log('asdf=>', selectedNumbers);
    return (
        <Col className="d-flex justify-content-center flex-column"> 
            <Row>Please Select a numbers to buy</Row>
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

            <Row>
                <Col lg='6'>
                {props.selectedNumbers?.length >= MAX_NUMBER_BUY_LIMIT ? (
                    <div className='mt-4 text-center'>You can only buy {MAX_NUMBER_BUY_LIMIT} numbers</div>
                ) : (
                    <Button className="mt-4 float-right" variant="outline-primary" onClick={props.handleBuyMore}>
                        + Buy another Number
                    </Button>
                )}
                </Col>
            </Row>
        </Col>
    );
};

export default BuyNumber;
