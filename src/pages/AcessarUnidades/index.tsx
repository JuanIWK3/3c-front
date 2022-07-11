import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Input, Select } from "../../styles/global";
import { Container } from "./styles";

interface Unidade {
  id: number;
  email: string;
  telefone: string;
  nome: string;
  taxaFixa: number;
  fundoReserva: number;
}

const unidadesInitialState: Unidade[] = [
  {
    id: 1,
    email: "",
    telefone: "",
    nome: "José da Silva",
    taxaFixa: 0,
    fundoReserva: 0,
  },
  {
    id: 2,
    email: "",
    telefone: "",
    nome: "Mateus Santos",
    taxaFixa: 0,
    fundoReserva: 0,
  },
];

export const AcessarUnidades = () => {
  const [unidades, setUnidades] = useState<Unidade[]>(unidadesInitialState);
  const [selectedUnidade, setSelectedUnidade] = useState<Unidade | null>(null);
  const [typeGas, setTypeGas] = useState(-1);
  const [aguaCompleted, setAguaCompleted] = useState(false);
  const [gasCompleted, setGasCompleted] = useState(false);

  useEffect(() => {
    // TODO - Fazer requisição para buscar as unidades no banco de dados
  }, [unidades]);

  return (
    <Container>
      <h1>Acessar Unidades</h1>
      <Select
        name=""
        id=""
        onChange={(e) => {
          const id: number = +e.currentTarget.value;
          setSelectedUnidade(unidades.find((u) => u.id === id) || null);
        }}
      >
        <option value="">Selecione uma unidade</option>
        {unidades.map((unidade) => (
          <option key={unidade.id} value={unidade.id}>
            Unidade {unidade.id}
          </option>
        ))}
      </Select>
      {selectedUnidade && (
        <div className="unidade" key={selectedUnidade.id}>
          <h2>{selectedUnidade.nome}</h2>

          <button>Água</button>

          <form>
            <label htmlFor="leitura-atual">
              Informe a data da leitura atual
            </label>
            <Input type="date" name="leitura-atual" />
            <label htmlFor="leitura-atual">Informe a leitura atual</label>
            <Input type="number" name="leitura-atual" min={0} step={0.1} />
          </form>

          <button>Gás</button>

          <form>
            <label htmlFor="leitura-atual">
              Informe a data da leitura atual
            </label>
            <Input type="date" name="leitura-atual" />
            <label htmlFor="leitura-atual">Informe a leitura atual</label>
            <Input type="number" min={0} step={0.1} name="leitura-atual" />
            <p> Informe a unidade de medida</p>
            <div className="radio-wrapper">
              <div className="radio">
                <input
                  type="radio"
                  name="gasType"
                  onClick={(e) => {
                    const checked = e.currentTarget.checked;
                    setTypeGas(checked ? 1 : 0);
                  }}
                />
                <label htmlFor="kg">Kg</label>
              </div>
              <div className="radio">
                <input
                  type="radio"
                  name="gasType"
                  onClick={(e) => {
                    const checked = e.currentTarget.checked;
                    setTypeGas(checked ? 1 : 0);
                  }}
                />
                <label htmlFor="m3">m³</label>
              </div>
            </div>
          </form>

          <button disabled={!gasCompleted || !aguaCompleted}>
            Gerar Boleto
          </button>
        </div>
      )}
    </Container>
  );
};
