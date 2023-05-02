import React from 'react';
import { Form, Row, Col } from 'react-bootstrap';

const Dropdown = (props) => {
  const { data, handleNumberSelect, defaultValue, idx } = props;
  const handleOptionClick = (e) => {
    let id = e.target.value;

    handleNumberSelect(idx, id, defaultValue.id);
  };

  return (
    <Form.Group>
      <Form.Label>Pick a number:</Form.Label>
      <Form.Select
        name="numbers"
        onChange={handleOptionClick}
        defaultValue={defaultValue.number}
      >
        <option key={'number-default'} value="">
          Select a number
        </option>

        {data.map((eachData, i) => {
          if (
            eachData.number != defaultValue.number &&
            eachData.isSelected == true
          ) {
            return false;
          }
          return (
            <option key={'number-' + i} value={eachData.id}>
              {eachData.number}
            </option>
          );
        })}
      </Form.Select>
    </Form.Group>
  );
};

export default Dropdown;
