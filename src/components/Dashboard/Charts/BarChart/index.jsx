import React, { useEffect, useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import styled from "styled-components";
import { Api } from "../../../../services/api";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Top 10 produtos mais vendidos",
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
  width: 60%;
  margin-bottom: 2rem;
`;

const BarChart = () => {

  const [produtos, setProdutos] = useState([]);

  useEffect(() =>{
    async function buscarDados(){
      const dados = await  Api.get("/Dashboard/top10");

      if(dados){
        setProdutos(dados.data.data);
        console.log("Top10", dados.data.data)
      }
    }
    buscarDados()
  },[]);

  produtos.sort((a, b) => a.numeroDeVendas - b.numeroDeVendas);

  const labels = produtos.map(produto => produto.nome);
  const datas = produtos.map(produto => produto.numeroDeVendas);

  const data = {
    labels,
    datasets: [
      {
        label: "Top 10",
        data: datas,
        backgroundColor: "#FB8500",
      },
    ],
  };

  return (
    <ChartContainer>
      <Bar options={options} data={data} width={null} height={null} />
    </ChartContainer>
  );
};

export default BarChart;
