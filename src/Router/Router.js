import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Mercadinho from "../Pages/Mercadinho";
import Carrinho from "../Pages/Carrinho";
import Cadastro from "../Pages/Cadastro";
import frutaria from "../frutaria.json";
export default function Router() {

    // 1.2
    // criação do estado carrinho e passamos pro props tanto pra mercadinho quannto pra carrinho, ja que mercadinho e carrinho são irmãos e  o router é o pai deles


    // F-2 adicionando a pagina cadastro no router
    // f-3 temos que tirar o estado frutas de mercado, trazer pra ca e passar o estado novamente pra mercadinho e pra cadastro
    const [carrinho, setCarrinho] = useState([])
    const [frutas, setFrutas] = useState(frutaria.frutaria);

    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path="/"
                    element={<Mercadinho
                        carrinho={carrinho}
                        setCarrinho={setCarrinho}
                        frutas={frutas}
                        
                    />}
                />
                <Route
                    path="/cart"
                    element={<Carrinho
                        carrinho={carrinho}
                        setCarrinho={setCarrinho}

                    />}
                />
                
                <Route
                    path="/cadastro"
                    element={<Cadastro
                    
                        frutas={frutas}
                        setFrutas={setFrutas}
                    />}
                
                />
                    

            </Routes>
        </BrowserRouter>
    );
}