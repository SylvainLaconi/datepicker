import React from 'react';
import styled from 'styled-components';

const Footer = () => {
  return (
    <FooterContainer>

      <PrimaryButton onClick={() => console.log("Schedule")}>Schedule</PrimaryButton>

      <SecondaryButton onClick={() => console.log("Cancel")}>Cancel</SecondaryButton>

    </FooterContainer>
  );
};

export default Footer;

const FooterContainer = styled.div`
  display: flex;
  width: 100%;
`;

const PrimaryButton = styled.button`
  padding: 10px 15px;
  width: 100px;
  color: white;
  background-color: #2C84FF;
  border: 2px solid #2C84FF;
  border-radius: 5px;
  margin-right: 10px;
`;

const SecondaryButton = styled(PrimaryButton)`
  background-color: white;
  color:  black;
  border: 2px solid #DBDBDB;
`