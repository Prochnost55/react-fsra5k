import React from 'react';
import { Form, Row } from 'react-bootstrap';

const Dropdown = (props) => {
  const { data, handleNumberSelect, defaultValue, idx } = props;
  const handleOptionClick = (e) => {
    let id = e.target.value;

    handleNumberSelect(idx, id, defaultValue.id);
  };

  // console.log('defaultValue =>', defaultValue, 'data => ', data);
  return (
    <Row>
      <Form.Label>
        Pick a number:
        <Form.Select
          name="numbers"
          onChange={handleOptionClick}
          defaultValue={defaultValue.number}
        >
          <option key={'number-default'} value="">
            select number
          </option>
          {data.map((eachData, i) => {
            // console.log(eachData.number.toString() == defaultValue);
            if (
              eachData.number != defaultValue.number &&
              eachData.isSelected == true
            ) {
              // console.log(eachData);
              return false;
            }
            // return false;
            return (
              <option key={'number-' + i} value={eachData.id}>
                {eachData.number}
              </option>
            );
          })}
        </Form.Select>
      </Form.Label>
    </Row>
  );
};

<Dropdown>
  <Dropdown.Toggle variant="success" id="dropdown-basic">
    Dropdown Button
  </Dropdown.Toggle>

  <Dropdown.Menu>
    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>;
export default Dropdown;
