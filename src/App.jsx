import { styled } from "styled-components"
import CadastrarEndereco from "./componentes/CadastrarEndereco"


const Div = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 90vw;
  align-items: center;
`
const Title = styled.div`
  display: flex;
  gap: 2%;
  width: 100%;
  justify-content: center;

  h1{
    font-size: 3.2em;
    line-height: 1.1;
  }
  img{
    width: 3rem;
  }
`

function App() {

  return (
    <Div>
      <Title>
        <img src="/space.svg" alt="foguete" />
        <h1>SpaceX | Delivery</h1>
      </Title>
      <CadastrarEndereco/>
    </Div>
  )
}

export default App
