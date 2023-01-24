import Router from "./Router/Router";
import styled from "styled-components";



//PRATICA GUIADA 1

//1.1 primeira coisa, oberservar a aplicação e ver quem e filho de quem pra ver onde os estados ficarão e onde passar props e etc; no componente mercadinho, fazer um map do estado frutas (que guarda o conteudo de um json) e no card frutas receber as props no card pra fazer a renderização da lista

//1.2 pensando no pai em comum: criar um etsado carinho que ira receber as informações da fruta selecionada no botao comprar; este estado deve estar no pai em comum de carrinho e mercadinho; passe por props o estado e sua função para ambos componentes

//1.3 depois de receber as props estado carrinho nocomponenete carrinho e mercadinho. podemos descomentar as funções
// agora vamos renderizar o conteudo do carrinho na tela usando um map. o componente cardCarrinho deve ser o retorno do map e as props necessarias para renderizar a imagem abaixo devem ser passadas, assim como a função remover

// FIXAÇÃO

// Vamoas trabalhar com a pagina cadastro
//F-1 a pagina tera os inputs controlados que receberão  as infosrmações name, url e price
//F-2 adcione a pagina no Router e faça com que o botao de cadastro de frutas na pagina mercadinho te leve ao componente cadastro.
//F-3 tente criar uma logica que consiga inserir no estado frutas , do componnete mercadinho, a nova fruta cadastrada (nao esqueça do id) e implemente a funcao handleclick
//F-4 reflita sobre os problemas que isso gerou
export default function App() {
  return (
    <AppContainer>
      <h1 id="frutinhas">Labefrutas <span role="img" aria-label="frutinhas">🍌 🍉 🍇 🍓 </span></h1>
      <Router />
    </AppContainer>
  );
}
const AppContainer = styled.div`
   text-align: center;
`;