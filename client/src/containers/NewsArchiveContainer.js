import React, { Component, useContext, useEffect } from 'react';
import fetchAPIEndpoint from './../helpers/fetchAPIEndpoint';
import { NewsContext } from './../context/NewsContext';
import NewsList from './../components/NewsList';

/**
 * Container component responsible for managing and providing data related to archived news items.
 * 
 */
const NewsArchiveContainer = () => {
  const { newsItemsList, setNewsItemsList, isLoading } = useContext(NewsContext);

  const handleRemoveNewsItem = id => {
    fetchAPIEndpoint(`/news/${id}`, 'DELETE')
      .then(result => {
       
          const newNewsItemsList = newsItemsList.filter(item => item._id !== id);

          /* POSSIBLE UPGRADE: FLOATING SUCCESS/ERROR MESSAGE IN PAGE */
          console.log('Item successfully removed');

          setNewsItemsList(newNewsItemsList);
      })
      .catch(error => console.error(error));
      /* POSSIBLE UPGRADE: FLOATING SUCCESS/ERROR MESSAGE IN PAGE */
  }

  const getRenderItems = (allItems) => {
    return allItems
      .filter(item => item.archiveDate !== null)
      .sort((a, b) => (new Date(b.archiveDate) - new Date(a.archiveDate)));
  }

  return (
    <NewsList
      newsItemsList={getRenderItems(newsItemsList)}
      isLoading={isLoading}
      onArchiveHandler={null}
      onRemoveHandler={handleRemoveNewsItem}
    />
  );
}

export default NewsArchiveContainer;