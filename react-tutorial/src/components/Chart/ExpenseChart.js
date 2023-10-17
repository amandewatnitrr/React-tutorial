import React from "react";
import "./Chart"
import Chart from "./Chart";

function ExpenseChart({expenses}){

    var chartDataPoints = [
        {label:"Jan",value:0},
        {label:"Feb",value:0},
        {label:"Mar",value:0},
        {label:"Apr",value:0},
        {label:"May",value:0},
        {label:"Jun",value:0},
        {label:"Jul",value:0},
        {label:"Aug",value:0},
        {label:"Sep",value:0},
        {label:"Oct",value:0},
        {label:"Nov",value:0},
        {label:"Dec",value:0},
    ];
    for (const expense of expenses){
        const expenseMonth = expense.date.getMonth();
        chartDataPoints[expenseMonth].value += -1*expense.amount;
    }
    return <Chart dataPoints={chartDataPoints}/>;
}

export default ExpenseChart;