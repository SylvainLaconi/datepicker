import React from 'react';
import styled from 'styled-components';
import Calendar from './Picker/Calendar';
import Timer from './Picker/Timer';

const Picker = (props) => {
  return (
    <PickerContainer>
      
      <Calendar 
        selectedDay={props.selectedDay}
        setSelectedDay={props.setSelectedDay}
        selectedMonth={props.selectedMonth}
        setSelectedMonth={props.setSelectedMonth}
        selectedYear={props.selectedYear}
        setSelectedYear={props.setSelectedYear}
      />

      <Timer 
        selectedHour={props.selectedHour}
        setSelectedHour={props.setSelectedHour}
      />

    </PickerContainer>
  );
};

export default Picker;

const PickerContainer = styled.div`
  display: flex;
  width: 100%;
  height: 350px;
`;