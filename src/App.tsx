import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { AcessarUnidades } from "./pages/AcessarUnidades";
import { TarifaFixa } from "./pages/TarifaFixa";
import { TarefasTarifas } from "./pages/TabelasTarifas";
import { CadastrarUnidades } from "./pages/CadastrarUnidades";
import GlobalStyle from "./styles/global";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/acessar-unidades" element={<AcessarUnidades />} />
          <Route path="/tarifa-fixa" element={<TarifaFixa />} />
          <Route path="/tabelas-tarifas" element={<TarefasTarifas />} />
          <Route path="/cadastrar-unidades" element={<CadastrarUnidades />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
