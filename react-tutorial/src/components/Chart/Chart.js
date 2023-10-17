import React from "react";
import Chartbar from "./ChartBar";
import "./css/Chart.css";

function Chart(props){

    const datapointValues = props.dataPoints.map((datapoint) => datapoint.value);
    const totalMaximum = Math.max(...datapointValues);

    return(
        <div className="chart">
            {props.dataPoints.map((datapoint) => (
               <Chartbar
                    key = {datapoint.label}
                    value = {datapoint.value}
                    maxValue = {totalMaximum}
                    label = {datapoint.label}
               /> 
            ))}
        </div>
    );
    
      /*
      * I want to make sure every chartbar plots the value in relation to the maximum value in the chart.
      */
}

export default Chart;