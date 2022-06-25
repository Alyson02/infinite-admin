import React, { useEffect, useState } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import styled from "styled-components";
import { Api } from "../../../../services/api";

ChartJS.register(ArcElement, Tooltip, Legend);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Mais vendidos por categoria",
    },
  },
};

const ChartContainer = styled.article`
  padding-right: 2rem;
  padding-left: 2rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: auto;
  width: 40%;
  margin-bottom: 2rem;
`;

export default function PieChart() {

  //useState
  const [categorias, setCategorias] = useState([]);

  //useEffect
  useEffect(() => {
    async function obterDados() {
      const dados = await Api.get("/Dashboard/categorias");
      if (dados) {
        console.log("Categorias", dados.data.data);
        setCategorias(dados.data.data);
      }
    }
    obterDados();
  }, []);

  const labels = categorias.map(categoria => categoria.categoria);
  const datas = categorias.map(categoria => categoria.numeroVendas)
  // console.log(datas)
  // console.log(labels)

  const data = {
    labels: labels,
    datasets: [
      {
        label: "# of Votes",
        data: datas,
        backgroundColor: [
          "#023E8A",
          "#FF5883",
          "#FB8500",
          "#1B4332",
        ]
      },
    ],
  };

  return (
    <ChartContainer>
      <Pie data={data} options={options}/>
    </ChartContainer>
  );
}
