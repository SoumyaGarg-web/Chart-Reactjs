import React, { Component } from 'react';
import {Pie,  Chart,defaults, Doughnut} from 'react-chartjs-2';
import data from './newData.json'
import 'chartjs-plugin-labels'
import { pie } from 'd3-shape';

const a = data.
    reduce((a,c)=>{
      a[c.category] = 
      (a[c.category]||0)+c.y
      return a;
    },{})
console.log(a);

// Chart.defaults.scale.gridLines.display = false;

class PieChart extends React.Component {
  render() { 
    return <div>
      <Pie
        data={{
          labels: Object.keys(a),
          datasets: [
            {
              data: Object.values(a),
              backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
              ],
              borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
              ],
              borderWidth: 1,
            },
          ],
        }}
        height={400}
        width={600}
        options={{
          plugins:{
          datalabels: {
            display: true,
            align: 'bottom',
            backgroundColor: '#ccc',
            borderRadius: 3,
            font: {
              size: 18,
            },
          }
        },
          maintainAspectRatio: false,
          // scales: {
          //   yAxes: [
          //     {
          //       ticks: {
          //         beginAtZero: true,
          //       },
          //     },
          //   ],
          // },
          legend: {
            labels: {
              fontSize: 25,
            },
          },
        }}
      />

    </div>;
  }
}
 
export default PieChart;