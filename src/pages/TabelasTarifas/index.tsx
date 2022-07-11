import React, { useState } from "react";
import { Button } from "../../components/Button";
import { Input, Select } from "../../styles/global";
import { Container } from "./styles";

export const TarefasTarifas = () => {
  const [type, setType] = useState("");
  const [taxaFixa, setTaxaFixa] = useState(0);
  const [taxa0_5, setTaxa0_5] = useState(0);
  const [taxa5_10, setTaxa5_10] = useState(0);
  const [taxa10_15, setTaxa10_15] = useState(0);
  const [taxa15_20, setTaxa15_20] = useState(0);
  const [taxa20_25, setTaxa20_25] = useState(0);
  const [taxa_40, setTaxa_40] = useState(0);
  const [precoGas, setPrecoGas] = useState(0);

  return (
    <Container>
      <h1>Cadastrar Tarifas</h1>
      <Select
        name=""
        id=""
        onChange={(e) => {
          setType(e.currentTarget.value);
        }}
      >
        <option value="">Selecione uma opção</option>
        <option value="agua">Agua</option>
        <option value="gas">Gas</option>
      </Select>
      {type === "agua" && (
        <form>
          <h2>Agua</h2>
          <p>Informe a taxa fixa:</p>
          <Input
            type="number"
            min={0}
            onChange={(e) => {
              setTaxaFixa(+e.currentTarget.value);
            }}
          />
          <p>Informe o valor da taxa de 0 a 5</p>
          <Input
            type="number"
            min={0}
            onChange={(e) => {
              setTaxa0_5(+e.currentTarget.value);
            }}
          />
          <p>Informe o valor da taxa de 5 a 10</p>
          <Input
            type="number"
            min={0}
            onChange={(e) => {
              setTaxa5_10(+e.currentTarget.value);
            }}
          />
          <p>Informe o valor da taxa de 10 a 15</p>
          <Input
            type="number"
            min={0}
            onChange={(e) => {
              setTaxa10_15(+e.currentTarget.value);
            }}
          />
          <p>Informe o valor da taxa de 15 a 20</p>
          <Input
            type="number"
            min={0}
            onChange={(e) => {
              setTaxa15_20(+e.currentTarget.value);
            }}
          />
          <p>Informe o valor da taxa de 20 a 40</p>
          <Input
            type="number"
            min={0}
            onChange={(e) => {
              setTaxa20_25(+e.currentTarget.value);
            }}
          />
          <p>Informe o valor da taxa maior que 40</p>
          <Input
            type="number"
            min={0}
            onChange={(e) => {
              setTaxa_40(+e.currentTarget.value);
            }}
          />
          <button>Salvar</button>
        </form>
      )}
      {type === "gas" && (
        <form>
          <h2>Gas</h2>
          <p>Informe o preço do Kg ou m³</p>
          <Input
            type="number"
            min={0}
            onChange={(e) => {
              setPrecoGas(+e.currentTarget.value);
            }}
          />
          <button>Salvar</button>
        </form>
      )}
    </Container>
  );
};
