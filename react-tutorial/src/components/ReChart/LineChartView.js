import React from "react";
import styled from 'styled-components';
import { LineChart,ComposedChart, Area, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Sector} from 'recharts';
const ChartContainer = styled.div`
  width: 100%;
  height: 100%;
`;

function Linechartview({chartDataPoints,w,h}){
    return(
        <ResponsiveContainer width="100%" height="100%">
                    <center>
                        <ChartContainer>
                            <ComposedChart
                              width={w}
                              height={h}
                              data={chartDataPoints}
                              margin={{
                                top: 5,
                                right: 30,
                                left: 5,
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
                        </ChartContainer>
                      </center>
                    </ResponsiveContainer>
    );
}

export default Linechartview;