import React from 'react';
import styled from 'styled-components';
import ItemViewer from './TimeViewer/ItemViewer';

const TimeViewer = ({selectedDate}) => {
  return (
    <TimeViewerContainer>

      <ItemViewer label={"Date"} value={selectedDate}/>

      <ItemViewer label={"Time"} value={selectedDate}/>

    </TimeViewerContainer>
  );
};

export default TimeViewer;

const TimeViewerContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;