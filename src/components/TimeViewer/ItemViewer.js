import React from 'react';
import styled from 'styled-components';

const ItemViewer = ({label, value}) => {
  return (
    <ItemContainer>

      <Label>{label}</Label>

      <ValueContainer>{value}</ValueContainer>

    </ItemContainer>
  );
};

export default ItemViewer;

const ItemContainer = styled.div`
  display: flex;
  align-items: center;
`

const Label = styled.p`
  color: #DBDBDB;
  `

const ValueContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30px;
  background-color: #DBDBDB;
  border-radius: 10px;
  padding: 2px 10px;
  margin-left: 5px;
`