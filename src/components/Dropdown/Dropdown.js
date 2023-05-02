import React from 'react';

const Dropdown = (props) => {
  const { data, handleNumberSelect, defaultValue, idx } = props;
  const handleOptionClick = (e) => {
    let number = e.target.value;
    handleNumberSelect(idx, number);
  };

  console.log('defaultValue =>', defaultValue, 'data => ', data);
  return (
    <div>
      <label>
        Pick a number:
        <select
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
              console.log(eachData);
              return false;
            }
            // return false;
            return (
              <option key={'number-' + i} value={eachData.id}>
                {eachData.number}
              </option>
            );
          })}
        </select>
      </label>
    </div>
  );
};

export default Dropdown;
