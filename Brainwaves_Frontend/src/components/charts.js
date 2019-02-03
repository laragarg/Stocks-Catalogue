import React from "react";
import { render } from "react-dom";
import { Chart } from "react-google-charts";


function parser(data) {
   let sh_open = [["date", "Share Opening"]]
   let sh_close = [["date", "Share Closing"]]
   let sh_vol = [["date", "Share Volume"]]
   for(var i = 0; i < data.length; i++) {
      sh_open.push([new Date(Date.parse(data[i].date)),data[i].sh_open])
      sh_close.push([new Date(Date.parse(data[i].date)),data[i].sh_close])
      sh_vol.push([new Date(Date.parse(data[i].date)),data[i].sh_volume])
    }
    return {"sh_open": sh_open,"sh_close": sh_close,"sh_vol": sh_vol}
  }

class CustomChart extends React.Component {
  render() {
  let d = parser(this.props.data);
    return (
      <div className={"my-pretty-chart-container"}>
              <Chart
          chartType="LineChart"
          data={d["sh_vol"]}
          width="100%"
          height="400px"
          legendToggle
        />
        <Chart
          chartType="LineChart"
          data={d["sh_open"]}
          width="100%"
          height="400px"
          legendToggle
        />
        <Chart
          chartType="LineChart"
          data={d["sh_close"]}
          width="100%"
          height="400px"
          legendToggle
        />
      </div>
    );
  }
}
export default CustomChart;
