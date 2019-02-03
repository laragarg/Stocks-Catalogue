import React from 'react';
import CSSModules from 'react-css-modules';

import styles from './SubContainer.module.css';
import Portfolio from '../Portfolio/Portfolio';
import CustomChart from '../charts';

const SubContainer = props => {
  let content = (
  	<Portfolio {...props}/>
  );
  if (props.activeView === 'charts') {
  	content = (
  		<CustomChart data={props.data} />
  	);
  }
  return (
  <div styleName="container">
    {content}
  </div>
  );
};

export default CSSModules(SubContainer, styles);
