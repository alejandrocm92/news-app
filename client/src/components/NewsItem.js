import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import FeedItem from './UIComponents/FeedItem';
import formatDateLocale from './../helpers/formatDateLocale.js';

/**
 * Component responsible for rendering a news feed item (specialization of FeedItem).
 * 
 */
const NewsItem = ({ newsItem, onRemoveHandler, onArchiveHandler }) => {
  const renderButton = () => {
    return (newsItem.archiveDate === null) ?
      <Button size="small" onClick={() => onArchiveHandler(newsItem._id)} >Archive</Button> :
      <Button size="small" onClick={() => onRemoveHandler(newsItem._id)} >Remove</Button>
  }

  const renderContent = () => (
    <React.Fragment>
      <Typography variant="h6" color="textSecondary" gutterBottom>
        {newsItem.title}
      </Typography>

      <Typography className='news-item-text-s' color="textSecondary">
        {`${newsItem.author} | ${formatDateLocale(newsItem.date)}`}
      </Typography>

      <Typography variant="body2" component="p">
        <i>{newsItem.description}</i>
      </Typography>

      <Typography variant="body2" component="p">
        {newsItem.content}
      </Typography>
    </React.Fragment>
  )

  const renderActionContainer = () => (
    <div className="news-item-action-container">
      <div className="news-item-action-date-container news-item-text-s">
        <span>
        {
          (newsItem.archiveDate !== null) ?
            <span>Archive date: {formatDateLocale(newsItem.archiveDate)}</span> :
            ''
        }
        </span>
      </div>
      <div className="news-item-action-buttons-container">
        {renderButton()}
      </div>
    </div>
  )

  return (
    <FeedItem
      contentBlock={renderContent()}
      actionBlock={renderActionContainer()}
    />
  );
}

NewsItem.propTypes = {
  newsItem: PropTypes.object.isRequired,
  onRemoveHandler: PropTypes.func,
  onArchiveHandler: PropTypes.func,
}

export default NewsItem;