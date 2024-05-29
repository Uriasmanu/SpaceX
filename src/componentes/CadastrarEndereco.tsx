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
  width: 30%;
  border-radius: 0.5rem;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  margin-top: 1rem;

  h2{
    color: #595858;
    margin: 0;
  }

  .input-container{
    input{
        padding: 1%;
        border-radius: 10px;
        width: 90%;
        margin-bottom: 2%;
    }
  }

  .submit{
        padding: 3%;
        background: #9a9999;
        border: none;
        border-radius: 18px;
        font-size: 1rem;
    }
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

  .Editar {
    width: 50px;
    height: 50px;
    border: none;
    border-radius: 50%;
    background: #6d6c6c;
    cursor: pointer;
  }
`;

const ListaEnderecos = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    flex-direction: column;
    width: 100%;
    align-items: center;
    margin-top: 2%;
`;


const CadastrarEndereco = () => {
  const [endereco, setEndereco] = useState({});
  const [formVisible, setFormVisible] = useState(false);
  const [listaEnderecos, setListaEnderecos] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setEndereco({ ...endereco, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (editIndex !== null) {
      const updatedEnderecos = listaEnderecos.map((item, index) =>
        index === editIndex ? endereco : item
      );
      setListaEnderecos(updatedEnderecos);
      setEditIndex(null);
    } else {
      setListaEnderecos([...listaEnderecos, endereco]);
    }
    setEndereco({});
    setFormVisible(false);
  };

    const handleEdit = (index) => {
        setEndereco(listaEnderecos[index]);
        setFormVisible(true);
        setEditIndex(index);
    }

  return (
    <>
      <Botao onClick={() => setFormVisible(true)}>
        <img src="/icones/plus.svg" alt="botão de mais" /> Adicionar endereço
      </Botao>

      <Form isVisible={formVisible} onSubmit={handleSubmit}>
        <h2>Cadastro</h2>
        <p className="form-title">Cadastrar Endereço</p>
        <div className="input-container">
          <input
            placeholder="Digite o nome do estabelecimento"
            type="text"
            name="Texto"
            value={endereco.Texto || ""}
            onChange={handleChange}
          />
        </div>
        <div className="input-container">
          <input
            placeholder="Digite o lote (endereço)"
            type="text"
            name="Lote"
            maxLength={4}
            value={endereco.Lote || ""}
            onChange={handleChange}
          />
        </div>
        <button className="submit" type="submit">
          Cadastrar
        </button>
      </Form>

      <ListaEnderecos  className='teste'>
        {listaEnderecos.map((endereco, index) => (
          <Card key={index}>
            <div>
              <div>
                <img src="/icones/restaurante.svg" alt="" />
                <h2>{endereco.Texto}</h2>
              </div>
              <button className='Editar' onClick={() => handleEdit(index)}>
                <img src="/icones/editar.svg" alt="icone de caneta" />
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
