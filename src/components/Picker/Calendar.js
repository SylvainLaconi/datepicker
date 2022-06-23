import React from 'react';
import styled from 'styled-components';

const Calendar = () => {
  return (
    <CalendarContainer>

      <MonthText>
        May 2018
      </MonthText>

      <Grid>
        grid
      </Grid>
      
    </CalendarContainer>
  );
};

export default Calendar;

const CalendarContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
  border: 2px solid red;
`

const MonthText = styled.p`
  color: #2C84FF;
  font-weight: bold;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr repeat(7);
  `