import React, { Fragment } from 'react';
import CSSModules from 'react-css-modules';

import styles from './Sidebar.module.css';

const SideBar = props => (
  <Fragment>
    <div styleName="top-right-icon">
      <i class="material-icons">payment</i>
    </div>
    <div styleName="bar">
      <div styleName="nav-container">
        <div styleName="nav-item" className={props.activeView === 'topPerformers' ? styles.navItemSelected : ''}>
          <i className="material-icons" styleName="largeIcon" onClick={() => props.handleViewChange('topPerformers')}>
            home
          </i>
        </div>
        <div styleName="nav-item" className={props.activeView === 'history' ? styles.navItemSelected : ''}>
          <i className="material-icons" styleName="largeIcon" onClick={() => props.handleViewChange('history')}>
            work
          </i>
        </div>
        <div styleName="nav-item" className={props.activeView === 'companySearch' ? styles.navItemSelected : ''}>
          <i className="material-icons" styleName="largeIcon" onClick={() => props.handleViewChange('companySearch')}>
            create_new_folder
          </i>
        </div>
      </div>
    </div>
  </Fragment>
);

export default CSSModules(SideBar, styles);
