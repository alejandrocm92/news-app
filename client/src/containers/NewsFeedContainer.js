import React, { Component, useContext, useEffect } from 'react';
import fetchAPIEndpoint from './../helpers/fetchAPIEndpoint';
import { NewsContext } from './../context/NewsContext';
import NewsList from './../components/NewsList';

/**
 * Container component responsible for managing and providing data related to news items (feed).
 * 
 */
const NewsFeedContainer = () => {
  const { newsItemsList, setNewsItemsList, isLoading } = useContext(NewsContext);

  const handleArchiveNewsItem = id => {
    fetchAPIEndpoint(`/news/${id}`, 'PATCH')
      .then(result => {
        /* POSSIBLE UPGRADE: FLOATING SUCCESS/ERROR MESSAGE IN PAGE */
        console.log('Item successfully archived');

        const targetItemIndex = newsItemsList.findIndex(newsItem => newsItem._id === id);
        let newNewsItemsList = newsItemsList.map(newsItemObj => ({ ...newsItemObj }));
        newNewsItemsList[targetItemIndex] = result;

        setNewsItemsList(newNewsItemsList);
      })
      .catch(error => console.error(error));
      /* POSSIBLE UPGRADE: FLOATING SUCCESS/ERROR MESSAGE IN PAGE */
  }

  const getRenderItems = (allItems) => {
    return allItems.filter(item => item.archiveDate === null);
  }

  return (
    <NewsList
      newsItemsList={getRenderItems(newsItemsList)}
      isLoading={isLoading}
      onArchiveHandler={handleArchiveNewsItem}
      onRemoveHandler={null}
    />
  );
}

export default NewsFeedContainer;