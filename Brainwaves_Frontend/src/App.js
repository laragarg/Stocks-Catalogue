import React, { Component } from 'react';
import './App.css';

import SideBar from './components/Sidebar/Sidebar';
import Topbar from './components/Topbar/Topbar';
import ContainPage from './components/ContainPage/ContainPage';

import { getTopPerformers, getHistoryByCompanyName, getSharesByCompanyNameAndDate } from './api.js';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeView: 'topPerformers',
      company: '',
      date: new Date(1451952000000),
      data: [],
    }
    this.handleDateChange = this.handleDateChange.bind(this);
    this.handleCompanyChange = this.handleCompanyChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleViewChange = this.handleViewChange.bind(this);
    this.showCharts = this.showCharts.bind(this);
  }
  handleDateChange(date) {
    date.setHours(5,30,0,0)
    this.setState({date: date});
  }
  handleCompanyChange(e) {
    this.setState({company: e.target.value});
  }
  handleSubmit() {
    return this.reFetchData();
  }
  ComponentDidMount() {
    this.reFetchData();
  }
  reFetchData() {
    if(this.state.activeView === "topPerformers") {
      getTopPerformers(Math.round(this.state.date.getTime()/1000))
      .then((res) => {
        if(res.body != null)
          this.setState({data: res.body })
      });
    } else if(this.state.activeView === "history" || this.state.activeView === "charts") {
      getHistoryByCompanyName(this.state.company)
      .then((res) => {
        if(res.body != null)
          this.setState({data: res.body })
      });
    } else if(this.state.activeView === 'companySearch') {
      getSharesByCompanyNameAndDate(this.state.company, Math.round(this.state.date.getTime()/1000))
      .then((res) => {
        this.setState({data: res.body});
      })
    }
  }
  showCharts(companyName) {
    this.setState({activeView: 'charts', company: companyName}, this.reFetchData);
  }
  handleViewChange(newView){
    return this.setState({activeView: newView});
  }
  render() {
    return (
      <div className="main">
        <div className="topbar">
          <Topbar />
        </div>
        <div className="sidebar">
          <SideBar {...this.state} handleViewChange={this.handleViewChange}/>
        </div>
        <div className="container">
          <ContainPage {...this.state} handleDateChange={this.handleDateChange} handleCompanyChange={this.handleCompanyChange} handleSubmit={this.handleSubmit} showCharts={this.showCharts}/>
        </div>
      </div>
    );
  }
}

export default App;
