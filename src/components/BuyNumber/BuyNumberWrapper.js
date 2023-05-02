import React from 'react';
import data from '../../../data.js';
import { MAX_NUMBER_BUY_LIMIT } from '../../constants/BuyNumberConsts';
import Dropdown from '../Dropdown/Dropdown';
import BuyNumber from './BuyNumber';

const BuyNumberWrapper = (props) => {
  const [availableNumbers, setAvailableNumbers] = React.useState([]);
  const [selectedNumbers, setSelectedNumbers] = React.useState([
    { number: '' },
  ]);

  React.useEffect(() => {
    // api call
    data = data.map((eachData) => {
      eachData.isSelected = false;
      return eachData;
    });
    setAvailableNumbers(data);
  }, []);

  const handleBuyMore = () => {
    let selectedNumbersCopy = [...selectedNumbers];
    selectedNumbersCopy.push({ number: '' });
    setSelectedNumbers(selectedNumbersCopy);
  };
  const handleNumberSelect = (dropdownIndex, numberId, oldNumberId) => {
    let selectedNumbersCopy = [...selectedNumbers];
    let availableNumbersCopy = [...availableNumbers];
    let numIndex = availableNumbers.findIndex((d) => d.id == numberId);
    let oldNumIndex = -1;

    selectedNumbersCopy[dropdownIndex] = availableNumbersCopy[numIndex];
    setSelectedNumbers(selectedNumbersCopy);

    if (oldNumberId !== undefined) {
      oldNumIndex = availableNumbers.findIndex((d) => d.id == oldNumberId);
      availableNumbersCopy[oldNumIndex].isSelected = false;
    }
    availableNumbersCopy[numIndex].isSelected = true;
    console.log(availableNumbersCopy);

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

export default BuyNumberWrapper;
