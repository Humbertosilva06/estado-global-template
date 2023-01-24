import React from "react";
import { useNavigate } from "react-router-dom";
import { handleCadastro, handleCart} from "../Router/cordinator";
import CardFrutas from "../components/CardFrutas";

import styled from "styled-components";


//1.1 renderização da lista frutas e passagem de props pro card fruta

//1.3 recebo os estados carrinho e set carrinho e descomento as funçoes
export default function Mercadinho({carrinho, setCarrinho, frutas}) {
    console.log("frutinha", frutas)
    const navigate = useNavigate();

    function comprar(id) {
        // alert("comprei")
        const i = carrinho.findIndex((item) => item.id === id);
        console.log(i);
        if (i !== -1) {
          carrinho[i] = { ...carrinho[i], amount: carrinho[i].amount + 1 };
        } else {
          const frutaEncontrada = frutas.find((fruta) => fruta.id === id);
          const novaFruta = { ...frutaEncontrada, amount: 1 };
          const novaLista = [...carrinho, (carrinho[1] = novaFruta)];

          setCarrinho(novaLista);
    }}



return (
    <MercadinhoContainer>
        <h1>Mercadinho</h1>
        <button onClick={() => handleCart(navigate)}>Vá para Carrinho </button>
        <button onClick={()=>handleCadastro(navigate)}>Cadastro de Frutas </button>
        <FrutasContainer>
            {frutas.map((fruta)=>{

                return<CardFrutas
                key={fruta.id}
                fruta={fruta}
                comprar={comprar}
                />

            })}
        </FrutasContainer>
    </MercadinhoContainer>
);
}
const FrutasContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
`;
const MercadinhoContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
