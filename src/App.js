import React, {useState} from 'react';
import styled from 'styled-components';
import Footer from './components/Footer';
import Header from './components/Header';
import Picker from './components/Picker';
import TimeViewer from './components/TimeViewer';

function App() {
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());
  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth());
  const [selectedDay, setSelectedDay] = useState(new Date().getDate());
  const [selectedHour, setSelectedHour] = useState("12:00 AM");

  return (
    <MainContainer>
      <SecondaryContainer>

        <Header />

        <TimeViewer 
          selectedDay={selectedDay}
          selectedYear={selectedYear}
          selectedMonth={selectedMonth}
          selectedHour={selectedHour}
        />

        <Picker 
          selectedDay={selectedDay}
          setSelectedDay={setSelectedDay}
          selectedMonth={selectedMonth}
          setSelectedMonth={setSelectedMonth}
          selectedYear={selectedYear}
          setSelectedYear={setSelectedYear}
          selectedHour={selectedHour}
          setSelectedHour={setSelectedHour}
        />

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
