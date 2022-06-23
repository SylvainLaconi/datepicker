import React from 'react';
import styled from 'styled-components';
import ItemViewer from './TimeViewer/ItemViewer';

const TimeViewer = ({selectedDay, selectedMonth, selectedYear, selectedHour}) => {
  return (
    <TimeViewerContainer>

      <ItemViewer 
        label={"Date"}
        value={`${selectedDay} / ${selectedMonth} / ${selectedYear}`}
      />

      <ItemViewer label={"Time"} value={selectedHour}/>

    </TimeViewerContainer>
  );
};

export default TimeViewer;

const TimeViewerContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;