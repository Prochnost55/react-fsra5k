import React from 'react';
import data from '../../../data.js';
import { MAX_NUMBER_BUY_LIMIT } from '../../constants/BuyNumberConsts';
import Dropdown from '../Dropdown/Dropdown';

const BuyNumberWrapper = (props) => {
  const [availableNumbers, setAvailableNumbers] = React.useState([]);
  const [selectedNumbers, setSelectedNumbers] = React.useState([
    { number: '' },
  ]);

  React.useEffect(() => {
    // api call
    data = data.map((eachData) => ({
      number: eachData.number,
      isSelected: false,
    }));
    setAvailableNumbers(data);
  }, []);

  const handleBuyMore = () => {
    let selectedNumbersCopy = [...selectedNumbers];
    selectedNumbersCopy.push({ number: '' });
    setSelectedNumbers(selectedNumbersCopy);
  };
  const handleNumberSelect = (index, selectedNumber) => {
    let selectedNumbersCopy = [...selectedNumbers];
    selectedNumbersCopy[index].number = selectedNumber;
    setSelectedNumbers(selectedNumbersCopy);

    let availableNumbersCopy = [...availableNumbers];
    availableNumbersCopy[index].isSelected = true;
    setAvailableNumbers(availableNumbersCopy);
  };
  return (
    <BuyNumber
      availableNumbers={availableNumbers}
      handleNumberSelect={handleNumberSelect}
      handleBuyMore={handleBuyMore}
      selectedNumbers={selectedNumbers}
    />
  );
};

const BuyNumber = (props) => {
  const { selectedNumbers } = props;
  console.log('asdf=>', selectedNumbers);
  return (
    <div>
      <div>Select a numbers to buy</div>

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
        <button onClick={props.handleBuyMore}>Buy another numbers</button>
      )}
    </div>
  );
};

export default BuyNumberWrapper;
