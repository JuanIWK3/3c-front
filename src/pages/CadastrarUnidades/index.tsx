import React from "react";
import { Input } from "../../styles/global";
import { Container } from "./styles";

export const CadastrarUnidades = () => {
  return (
    <Container>
      <h1>Cadastrar Unidades</h1>

      <form>
        <h3>Informe seu Nome:</h3>
        <Input type="text" placeholder="Nome" />

        <h3>Informe seu Email:</h3>
        <Input type="email" placeholder="Email" />

        <h3>Informe seu Telefone:</h3>
        <Input type="text" placeholder="Telefone" />

        <h3>Informe sua Unidade:</h3>
        <Input type="text" placeholder="Unidade" />

        <button>Salvar</button>
      </form>
    </Container>
  );
};
