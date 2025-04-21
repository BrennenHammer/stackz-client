import './App.css';
import styled from 'styled-components'
function App() {
  return (
    <div className="App">

      <Pcontainer>
      <P1>Stackz</P1>
      <P2>Stackz</P2>
      <P3>Stackz</P3>
      <P4>Stackz</P4>
      <P5>Stackz</P5>
      </Pcontainer>
      

    </div>
  );
}

export default App;

const Pcontainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px;
  font-size: 20px;
  font-weight: bold;
`
const P1 = styled.p`
  margin: 0px;
`
const P2 = styled.p`
  margin: -13px;
  opacity: 70%;
`
const P3 = styled.p`
  margin: -0px;
  opacity: 50%;
`
const P4 = styled.p`
  margin: -13px;
  opacity: 30%;
`
const P5 = styled.p`
  margin: -0px;
  opacity: 10%;
`
