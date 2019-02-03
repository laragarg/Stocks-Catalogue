import React from 'react';
import CSSModules from 'react-css-modules';

import styles from './Topbar.module.css';

const Topbar = props => (
  <div styleName="bar">
    <div styleName="bar-user-details">
      <div>
        <span styleName="user-name">Stocks App</span>
      </div>
    </div>
  </div>
);

export default CSSModules(Topbar, styles);
