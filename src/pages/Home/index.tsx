import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../../components/Button";
import { Container } from "./styles";

export const Home = () => {
  return (
    <Container>
      <h1>3C MAX</h1>
      <Link to={"acessar-unidades"}>
        <Button text="Acessar Unidades" />
      </Link>
      <Link to={"tarifa-fixa"}>
        <Button text="Tarifa Fixa" />
      </Link>
      <Link to={"tabelas-tarifas"}>
        <Button text="Tabelas Tarifas" />
      </Link>
      <Link to={"cadastrar-unidades"}>
        <Button text="Cadastrar Unidades" />
      </Link>
    </Container>
  );
};
