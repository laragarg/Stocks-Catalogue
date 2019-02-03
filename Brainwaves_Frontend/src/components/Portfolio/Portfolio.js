import React from 'react';
import CSSModules from 'react-css-modules';

import styles from './Portfolio.module.css';

import PortfolioItem from '../PortfolioItem/PortfolioItem';

const Portfolio = props => (
  <div>
    <div styleName="header">
      <div>
          Share Name
        <i className="material-icons" styleName="icon">
          keyboard_arrow_down
        </i>
      </div>
      <div>
          Date
        <i className="material-icons" styleName="icon">
          keyboard_arrow_down
        </i>
      </div>
      <div>
        Share Open
        <i className="material-icons" styleName="icon">
          keyboard_arrow_down
        </i>
      </div>
      <div>
        Share Close
        <i className="material-icons" styleName="icon">
          keyboard_arrow_down
        </i>
      </div>
      <div>
        Share volume
        <i className="material-icons" styleName="icon">
          keyboard_arrow_down
        </i>
      </div>
      <div>
        Lowest Value
        <i className="material-icons" styleName="icon">
          keyboard_arrow_down
        </i>
      </div>
      <div>
        Highest Value
        <i className="material-icons" styleName="icon">
          keyboard_arrow_down
        </i>
      </div>
    </div>
    <div styleName="contain-body">
      {props.data.map((share, i) => (
        <PortfolioItem key={i} data={share} showChart={props.showCharts}/>
      ))}
    </div>
  </div>
);

export default CSSModules(Portfolio, styles);
