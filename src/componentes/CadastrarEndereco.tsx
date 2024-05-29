import React, { useState } from 'react';
import { styled } from "styled-components";

const Botao = styled.button`
  display: flex;
  align-items: center;
  background: #9a9999;
  border: none;
  border-radius: 18px;
  width: 30vw;
  padding: 1%;
  gap: 2%;
  font-size: 1.5rem;
  margin: 2%;
  cursor: pointer;
`;

const Form = styled.form`
  background-color: #fff;
  display: ${({ isVisible }) => (isVisible ? 'block' : 'none')};
  padding: 1rem;
  max-width: 350px;
  border-radius: 0.5rem;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  margin-top: 1rem;
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  width: 40%;
  background: #504f4f;
  border-radius: 5px;
  padding: 2%;
  border-radius: 10px;
  box-shadow: 0 1px 2px rgba(77, 77, 77, 0.15), 0 2px 4px rgba(77, 77, 77, 0.15),
    0 4px 8px rgba(77, 77, 77, 0.15), 0 8px 16px rgba(77, 77, 77, 0.15);

  div {
    display: flex;
    width: 90%;
    gap: 10%;
    align-items: center;
  }

  img {
    width: 30px;
  }

  button {
    width: 50px;
    height: 50px;
    border: none;
    border-radius: 50%;
    background: #6d6c6c;
  }
`;

const ListaEnderecos = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

const CadastrarEndereco = () => {
  const [endereco, setEndereco] = useState({});
  const [formVisible, setFormVisible] = useState(false);
  const [listaEnderecos, setListaEnderecos] = useState([]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setEndereco({ ...endereco, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setListaEnderecos([...listaEnderecos, endereco]);
    setEndereco({});
    setFormVisible(false);
  };

  return (
    <>
      <Botao onClick={() => setFormVisible(true)}>
        <img src="/icones/plus.svg" alt="botão de mais" /> Adicionar endereço
      </Botao>

      <Form isVisible={formVisible} onSubmit={handleSubmit}>
        <p className="form-title">Cadastrar Endereço</p>
        <div className="input-container">
          <input
            placeholder="Digite o endereço"
            type="text"
            name="Texto"
            value={endereco.Texto || ""}
            onChange={handleChange}
          />
        </div>
        <div className="input-container">
          <input
            placeholder="Digite o lote"
            type="text"
            name="Lote"
            value={endereco.Lote || ""}
            onChange={handleChange}
          />
        </div>
        <button className="submit" type="submit">
          Cadastrar
        </button>
      </Form>

      <ListaEnderecos>
        {listaEnderecos.map((endereco, index) => (
          <Card key={index}>
            <div>
              <div>
                <img src="/icones/restaurante.svg" alt="" />
                <h2>{endereco.Texto}</h2>
              </div>
              <button>
                <img src="/icones/editar.svg" alt="" />
              </button>
            </div>
            <p>Lote: {endereco.Lote}</p>
          </Card>
        ))}
      </ListaEnderecos>
    </>
  );
};

export default CadastrarEndereco;
