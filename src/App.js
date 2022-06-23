import React, {useState} from 'react';
import styled from 'styled-components';
import Footer from './components/Footer';
import Header from './components/Header';
import Picker from './components/Picker';
import TimeViewer from './components/TimeViewer';

function App() {
  const [selectedDate, setSelectedDate] = useState(1655996302);
  return (
    <MainContainer>
      <SecondaryContainer>

        <Header />

        <TimeViewer selectedDate={selectedDate}/>

        <Picker />

        <Footer />

      </SecondaryContainer>
    </MainContainer>
  );
}

export default App;

const MainContainer = styled.div`
  display: flex;
  background-color: #DBDBDB;
  height: 600px;
  width: 600px;
  padding: 25px;
`;

const SecondaryContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: white;
  width: 100%;
  border-radius: 10px;
  padding: 25px;
  margin: 0;
`
