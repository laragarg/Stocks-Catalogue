import React from 'react';
import CSSModules from 'react-css-modules';
import DatePicker from 'react-datepicker';
import styles from './Banner.module.css';
import "react-datepicker/dist/react-datepicker.css";

const Banner = props => {
  let input;
  if(props.activeView === 'topPerformers') {
    input = (
      <div>
      <p styleName="price">Top Performers</p>
      <DatePicker
        selected={props.date}
        onChange={props.handleDateChange}
      />
      </div>
    );
  } else if(props.activeView === 'history') {
    input = (
      <div>
      <p styleName="price">History of a company</p>
      <input type="text" name="company" onChange={props.handleCompanyChange} />
      </div>
    );
  } else if(props.activeView === 'companySearch') {
    input = (
      <div>
        <p styleName="price">Search Company by Date</p>
        <input type="text" name="company" onChange={props.handleCompanyChange} />
        <DatePicker
          selected={props.date}
          onChange={props.handleDateChange}
        />
      </div>
    );
  } else if(props.activeView === 'charts') {
    input = (
      <div>
        <p styleName="price">{props.company}</p>
      </div>
    )
  }
  return (
    <div>
      <div styleName="banner">
        <div>
          {input}
        </div>
        <button className="btn" styleName="btn-special" onClick={props.handleSubmit}>
          <span styleName="text">
            Search
          </span>
          <i className="material-icons" styleName="icon">
            arrow_forward
          </i>
        </button>
      </div>
    </div>
  );
};

export default CSSModules(Banner, styles);
