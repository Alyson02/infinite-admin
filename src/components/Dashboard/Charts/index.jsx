import React from 'react';
import styled from 'styled-components';
import BarChart from './BarChart';
import PieChart from './PieChart';

const ChartContainer = styled.article`
  padding-right: 2rem;
  padding-left: 2rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: auto;
  width: 100%;
  margin-bottom: 2rem;
`;


function Charts(){
    return(
        <ChartContainer>
          <PieChart/>
          <BarChart/>
        </ChartContainer>
    );
}

export default Charts