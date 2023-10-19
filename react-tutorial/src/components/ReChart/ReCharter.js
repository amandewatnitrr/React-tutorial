import React, { PureComponent, useState, useEffect   } from 'react';
import styled from 'styled-components';
import Card from 'react-bootstrap/Card';
import Linechartview from './LineChartView';
import { LineChart,ComposedChart, Area, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Sector} from 'recharts';

const ChartContainer = styled.div`
  width: 100%;
  height: 100%;
`;

function Rechart({expenses}){

    var chartDataPoints = [
        {label:"Jan",expense:0,profit:0,total:0},
        {label:"Feb",expense:0,profit:0,total:0},
        {label:"Mar",expense:0,profit:0,total:0},
        {label:"Apr",expense:0,profit:0,total:0},
        {label:"May",expense:0,profit:0,total:0},
        {label:"Jun",expense:0,profit:0,total:0},
        {label:"Jul",expense:0,profit:0,total:0},
        {label:"Aug",expense:0,profit:0,total:0},
        {label:"Sep",expense:0,profit:0,total:0},
        {label:"Oct",expense:0,profit:0,total:0},
        {label:"Nov",expense:0,profit:0,total:0},
        {label:"Dec",expense:0,profit:0,total:0},
    ];

    for (const expense of expenses){
        const expenseMonth = expense.date.getMonth();
        if(expense.amount<0){
          chartDataPoints[expenseMonth].expense += parseInt(expense.amount);
        }
        else{
          chartDataPoints[expenseMonth].profit += parseInt(expense.amount);
        }
        chartDataPoints[expenseMonth].total += parseInt(expense.amount);
    }

    const linechartfun = ()=>{
      console.log(window.innerWidth);
      if(window.innerWidth>=1280){
        return(<Linechartview chartDataPoints={chartDataPoints} w={500} h={300} />);
      }

      if(window.innerWidth<1280 && window.innerWidth>1050){
        return(<Linechartview chartDataPoints={chartDataPoints} w={600} h={200} />);
      }
      if(window.innerWidth<=1050 && window.innerWidth>=811){
        return(<Linechartview chartDataPoints={chartDataPoints} w={410} h={200} />);
      }
      if(window.innerWidth<811 && window.innerWidth>570){
        return(<Linechartview chartDataPoints={chartDataPoints} w={500} h={300} />);
      }
    }

    


    return(
      <div style={{ width: '100%', margin: '0 auto' }}>
      <Card id="chart-card">
          <Card.Header><h4>Expense Chart</h4></Card.Header>
          <Card.Body>
              {linechartfun()}
          </Card.Body>
      </Card>
      </div>
    );
}

export default Rechart;