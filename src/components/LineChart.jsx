import React, { Component } from 'react';
import {Pie, defaults, Line,Chart,Bar, Scatter} from 'react-chartjs-2';
import data from './newData.json'
import 'chartjs-adapter-date-fns';
import  'chartjs-plugin-zoom';
import 'hammerjs';
import 'chart.js'
import {withRouter} from 'react-router';

defaults.global.tooltips.enabled = true
defaults.global.legend.position = 'bottom'

var res = data.reduce(function(a, c){
    a[c.category] = a[c.category] || [];
    a[c.category].push(c)
    return a;
  }, {});

  console.log(res)

  let combine = res.food.map(a => {
      let d = {}
      d['x']= new Date(a.date)
      d['y']=a.y
      return d
    })
  let combine1 = res.travel.map(a => {
    let d = {}
    d['x']= new Date(a.date)
    d['y']=a.y
    return d
    })
    let combine2 = res.sports.map(a => {
        let d = {}
        d['x']= new Date(a.date)
        d['y']=a.y
        return d
    })

class LineChart extends React.Component {
    render() { 
        return <div>
            <Line
            data = {{
                //   labels: Object.keys(combine),
                  datasets: [{
                  label: 'Food',
                  data: combine,
                  backgroundColor: 'transparent',
                  borderColor: 'rgba(153, 102, 255, 1)',
                  fill: false,
                  borderWidth: 2,
                  
                },
                {
                    label: 'Travel',
                    data: combine1,
                    backgroundColor: 'transparent',
                    fill: false,
                    borderColor: 'red',
                    borderWidth: 2,
                   
                },
                {
                    label: 'Sports',
                    data: combine2,
                    backgroundColor: 'transparent',
                    fill: false,
                    borderColor: 'blue',
                    borderWidth: 2,
                   
                }
            ]
              }}
              height={400}
              width={600}
              
              options =  {{
                maintainAspectRatio: false,
                plugins: {
                    zoom: {
                        pan: {
                            enabled: true,
                            mode: 'xy',
                        },
                        zoom: {
                            enabled: true,
                            mode: 'xy',
                        }
                    }
                },

                scales: {
                        yAxes: [{
                            ticks: {
                            beginAtZero: true,
                            }
                        }],
                        xAxes: [{
                            type: 'time',
                            //  time: {
                            //     unit : 'year',
                            //     min : '2020',
                            //     max : '2021'
                            // },
                            ticks: {
                            autoSkip: false,
                            }
                            
                        }]
                    }
                }}
         
              />
        </div>;
    }
}
 
export default LineChart;