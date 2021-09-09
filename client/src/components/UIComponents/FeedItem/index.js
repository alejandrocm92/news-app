import React from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import './styles.css';

/**
 * General-purpose component responsible for rendering a feed item using the library Material-UI.
 * 
 */
const FeedItem = (props) => (
  <Card className='card'>
    <CardContent>
      {props.contentBlock}
    </CardContent>

    <CardActions>
      {props.actionBlock}
    </CardActions>
  </Card>
);

export default FeedItem;
