import React from 'react';
import styled from 'styled-components';

const Calendar = ({selectedDay,
  setSelectedDay,
  selectedMonth,
  setSelectedMonth,
  selectedYear,
  setSelectedYear}) => {

  const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  const getDays = (year, month) => {
    return new Date(year, month, 0).getDate();
  };

  const getFirstDayOfMonth = (year, month) => {
    return new Date(year, month, 1).getDay();
  }

  const daysInMonth = getDays(2022, 5);

  const firstDayOfMonth = getFirstDayOfMonth(2022,5);

console.log(firstDayOfMonth);

const getDatesOfMonth = (numberOfDay) => {
  let result = [];
  for (let i = 1; i < numberOfDay; i++){
    result.push(i)
  };
  
  return result;
}

const days = getDatesOfMonth(daysInMonth);

  return (
    <CalendarContainer>

      <MonthText>
        { month[selectedMonth]+ " " + selectedYear}
      </MonthText>

      <GridContainer>
        {
          ["S", "M", "T", "W", "T", "F", "S"].map((day, index) => <GridPrevious key={index}>{day}</GridPrevious>)
        }
        {
          [28, 29, 30].map((day, index) => <GridPrevious key={index}>{day}</GridPrevious>)
        }
        {
          days.map((day, index) => <GridCurrent
          key={index}
          selectedDay={selectedDay === day}
          onClick={() => setSelectedDay(day)}
          >{day}</GridCurrent>)
        }
      </GridContainer>

    </CalendarContainer>
  );
};

export default Calendar;

const CalendarContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
  height: 100%;
`

const MonthText = styled.p`
  color: #2C84FF;
  font-weight: bold;
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: repeat(6, 1fr);
  grid-column-gap: 5px;
  grid-row-gap: 5px;
  height: 100%;
`

const GridCurrent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  background-color: ${({selectedDay}) => selectedDay && "#DBDBDB"};
  border-radius: 10px;
  cursor: pointer;
`

const GridPrevious = styled(GridCurrent)`
  color: #DBDBDB;
`