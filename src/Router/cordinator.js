export function handleHome(navigate) {
    navigate("/");
  }
  
  export function handleCart(navigate) {
    navigate("/cart");
  }
  
  //F-2 adicionei o handlecadastro, função que levara a pagina cadastro e chamo ele no botao cadastro do componente carrinho e adiciono a pagina no router tambem
  export function handleCadastro(navigate){
    navigate("/cadastro")
  }
  