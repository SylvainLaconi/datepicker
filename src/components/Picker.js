import React from 'react';
import styled from 'styled-components';
import Calendar from './Picker/Calendar';
import Timer from './Picker/Timer';

const Picker = () => {
  return (
    <PickerContainer>
      
      <Calendar />

      <Timer />

    </PickerContainer>
  );
};

export default Picker;

const PickerContainer = styled.div`
  display: flex;
  width: 100%;
  height: 350px;
  border: 2px solid pink;
`;