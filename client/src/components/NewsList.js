import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import PropTypes from 'prop-types';
import NewsItem from './NewsItem';

/**
 * Component responsible for rendering a list of news items.
 * 
 */
export const NewsList = ({ newsItemsList, isLoading, onRemoveHandler, onArchiveHandler }) => {

  return (
    <div>
      {
        (isLoading === true) ?
          <CircularProgress /> :
          newsItemsList.map(newsItem => (
            <NewsItem
              key={newsItem._id}
              newsItem={newsItem}
              onRemoveHandler={onRemoveHandler}
              onArchiveHandler={onArchiveHandler}
            />
          ))
      }
    </div>
  );
}

NewsList.propTypes = {
  newsItemsList: PropTypes.array.isRequired,
  isLoading: PropTypes.bool.isRequired,
  onRemoveHandler: PropTypes.func,
  onArchiveHandler: PropTypes.func,
}


export default NewsList;