import React from "react";
import PropTypes from 'prop-types';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

/**
 * General-purpose component responsible for rendering a tab selector using the library Material-UI.
 * 
 */
const MaterialUITabsNavbar = ({ selectedValue, tabs, component }) => (
  <Tabs value={selectedValue}>
    {
      tabs.map((tab, index) => (
        <Tab
          key={index}
          label={tab.name}
          value={tab.route}
          component={component}
          to={tab.route}
        />
      ))
    }
  </Tabs>
);

MaterialUITabsNavbar.propTypes = {
  selectedValue: PropTypes.any.isRequired,
  tabs: PropTypes.array.isRequired,
  component: PropTypes.elementType.isRequired,
}

export default MaterialUITabsNavbar;