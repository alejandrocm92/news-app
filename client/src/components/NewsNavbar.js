import React from 'react';
import Paper from '@material-ui/core/Paper';
import PropTypes from 'prop-types';
import { TABROUTERMAPPING } from '../constants';
import MaterialUITabsNavbar from './UIComponents/MaterialUITabsNavbar';

/**
 * Component responsible for rendering navegation menu.
 * 
 */
const NewsNavbar = ({ routerHistory, wrapperComponent }) => (
  <div className='news-navbar'>
    <Paper square>
      <MaterialUITabsNavbar
        selectedValue={routerHistory.location.pathname}
        tabs={TABROUTERMAPPING}
        component={wrapperComponent}
      />
    </Paper>
  </div>
);

NewsNavbar.propTypes = {
  routerHistory: PropTypes.object.isRequired,
  wrapperComponent: PropTypes.elementType.isRequired,
}

export default NewsNavbar;