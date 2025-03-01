import React,{useState} from 'react'
import { useNavigate } from "react-router-dom";
import { handleHome } from "../Router/cordinator";
import styled from "styled-components";

export default function Cadastro ({frutas, setFrutas}){
  const[formulario, setFormulario]=useState({name:"", url:"", price:""})
  const navigate = useNavigate();

  const onChangeInputs=(event)=>{
    const {name, value}= event.target
    setFormulario({...formulario, [name]:value})
  }
  const handleClick = (event)=>{
    event.preventDefault()
    console.log(formulario);
    cadastrar()
  }
 
  //F-3 fazemos a função de cadastrar nova fruta e chamamos ela dentro da função handle click
  const cadastrar = ()=>{
    const novasFrutas = [...frutas, {id:Date.now(), name: formulario.name, url:formulario.url, price:formulario.price}]
    setFrutas(novasFrutas)

  }
  return(
    <CadastroContainer>
      <h1>Cadastro</h1>
      <button onClick={() => handleHome(navigate)}>Voltar</button>
    <FormContainer onSubmit={handleClick}>
      <Input
      name="name"
      value={formulario.name}
      onChange={onChangeInputs}
      type="text"
      placeholder="Nome da Fruta"
      />
      <Input 
      name="url"
      value={formulario.url}
      onChange={onChangeInputs}
      type="text"
      placeholder="url da imagem"
      />
      <Input
      name="price"
      value={formulario.price}
      onChange={onChangeInputs}
      type="number"
      placeholder="Preço da Fruta"
      />
      <button> Cadastrar </button>
    </FormContainer>
    </CadastroContainer>
  )
}
const CadastroContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Input = styled.input`
padding: 10px;
margin: 8px;
width:200px;
 
`;