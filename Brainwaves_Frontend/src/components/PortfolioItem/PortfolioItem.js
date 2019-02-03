import React from 'react';
import CSSModules from 'react-css-modules';

import styles from './PortfolioItem.module.css';

import ProfileIcon from '../ProfileIcon/ProfileIcon';

import {getCompanyDetails} from '../../api';

class PortfolioItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      companyName: ''
    }
  }
  render() {
    if (this.state.companyName === '') {
      getCompanyDetails(this.props.data.company)
      .then((res) => {
        this.setState({companyName : res.company_symbol})
      })
    }
    return (
      <div styleName="container" onClick={() => this.props.showChart(this.state.companyName)}>
        <div styleName="type-name">
          <div>{this.state.companyName}</div>
        </div>
        <div styleName="value">{this.props.data.date.substr(0,10)}</div>
        <div styleName="value">₹{this.props.data.sh_open}</div>
        <div styleName="value">₹{this.props.data.sh_close}</div>
        <div styleName="value">{this.props.data.sh_volume}</div>
        <div styleName="value">₹{this.props.data.sh_low}</div>
        <div styleName="value">₹{this.props.data.sh_high}</div>
      </div>
    );
  }
}

export default CSSModules(PortfolioItem, styles);
