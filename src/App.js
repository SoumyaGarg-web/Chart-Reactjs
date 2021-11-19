import React, { Component } from 'react';
import LineChart from './components/LineChart';
import PieChart from './components/PieChart';


class App extends React.Component {
  render() { 
    return <div>
      <LineChart/>
      <PieChart/> 
    </div>;
  }
}
 
export default App;
