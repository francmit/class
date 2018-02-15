import React, { Component } from 'react';
import './App.css';
import * as d3 from 'd3';
import {BarChart, XAxis, YAxis, CartesianGrid, Tooltip, Bar} from 'recharts';
import 'bootstrap/dist/css/bootstrap.css';
import {Button, ButtonGroup} from 'reactstrap'


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      xVariable: 'Sport'
    };
  }

  componentDidMount() {
    d3.csv('data/medalists.csv', (e, data) => {
      this.setState({
        data:data
      })
    })
  }

  updateXVar(d) {
    this.setState({
      xVariable:d
    })
  }

  render() {
    let chartData = d3.nest().key(
      (d) => d[this.state.xVariable]
    ).rollup(
      (d) => d.length
    ).entries(
      this.state.data
    );
    //console.log(chartData);
    return (
      <div>
      <BarChart width={700} height={400} data={chartData}
        margin={{top: 5, right: 30, left: 20, bottom: 5}}>
        <XAxis dataKey="key"/>
        <YAxis dataKey="value" />
        <Bar dataKey="value" fill="#82ca9d" />
      </BarChart>

      <ButtonGroup>
        {
          ['Sport', 'Year', 'Country'].map((d, i) => {
            return <Button key={'button-' + i} onClick={() => this.updateXVar(d)}>{d}</Button>
          })
        }
      </ButtonGroup>

      </div>
    );
  }
}

export default App;
