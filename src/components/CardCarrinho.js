import React from "react";
import styled from "styled-components";

export default function CardCarrinho({fruta, remover}) {
  //------------------------------

  return (
    <CardContainer>
      <Image src={fruta.url} />
      <p>{fruta.name}</p>
      <p>
        Qtd <b>{fruta.amount}</b>
      </p>
      <p>R${fruta.price}</p>
      <DeleteButton onClick={()=>remover(fruta.id)}>x</DeleteButton>
    </CardContainer>
  );
}
const Image = styled.img`
  width: 30%;
`;
const DeleteButton = styled.button`
  background-color: tomato;
  border: none;
`;
const CardContainer = styled.section`
  width: 300px;
  border: 1px solid black;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 20px;
  padding: 10px;
`;
