import React, { PureComponent } from 'react';
import styled from 'styled-components';
import Card from 'react-bootstrap/Card';
import { LineChart,ComposedChart, Area, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const ChartContainer = styled.div`
  width: 100%;
  height: 100%;
`;

function Linechart({expenses}){

    var demoUrl = 'https://codesandbox.io/s/simple-line-chart-kec3v';

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


    const datapointValues = chartDataPoints.map((datapoint) => datapoint.value);
    const totalMaximum = Math.max(...datapointValues);
    const chartWidthInRem = 50; // Define your desired width in rem
    const chartHeightInRem = 20; // Define your desired height in rem

    var cwidth="500rem"
    var cheight="500rem"


    return(
      <Card>
        <Card.Header><h4>Expense Chart</h4></Card.Header>
        <Card.Body>
        <ResponsiveContainer width={700} height="80%">
          <center>
          <ComposedChart
            width={800}
            height={500}
            data={chartDataPoints}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="label" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Area type="monotone" dataKey="expense" fill="#ff0038" stroke="#dc3545" />
            <Area type="monotone" dataKey="profit" fill="#0cb800" stroke="#156b02" />
            <Area type="monotone" dataKey="total" fill="#0066ff" stroke="#0540b5" />
          </ComposedChart>
          </center>
        </ResponsiveContainer>
        </Card.Body>
      </Card>
    );
}

export default Linechart;