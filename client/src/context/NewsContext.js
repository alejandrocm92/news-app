import React, { Component, useState, useEffect, createContext } from 'react';
import { useInterval } from './../hooks/useInterval';
import fetchAPIEndpoint from '../helpers/fetchAPIEndpoint';
import { POLLINGINTERVAL } from './../constants';

export const NewsContext = createContext();

export const NewsProvider = props => {
  const [newsItemsList, setNewsItemsList] = useState([]);
  const [isLoading, setLoading] = useState(false);

  const lastRequestTimestamp = React.useRef(0);

  useEffect(() => {
    setLoading(true);

    fetchAPIEndpoint('/news', 'GET')
      .then(result => {
        setNewsItemsList(result.payload);
        lastRequestTimestamp.current = result.timestamp;
      })
      .catch(error => console.error(error));
      /* POSSIBLE UPGRADE: FLOATING SUCCESS/ERROR MESSAGE IN PAGE */
  }, []);

  useEffect(() => {
    setLoading(false);
  }, [newsItemsList]);

  // Perform server polling (uses timestamp of last request to retrieve unfetched data).
  useInterval(() => {
    fetchAPIEndpoint('/news?timestampLastReq=' + lastRequestTimestamp.current, 'GET')
      .then(result => {
        lastRequestTimestamp.current = result.timestamp;

        if (result.payload.length > 0) {
          const newNewsItemsList = result.payload.concat(newsItemsList);

          setNewsItemsList(newNewsItemsList);
        }
      })
      .catch(error => console.error(error));
      /* POSSIBLE UPGRADE: FLOATING SUCCESS/ERROR MESSAGE IN PAGE */
  }, POLLINGINTERVAL);

  const context = {
    newsItemsList,
    setNewsItemsList,
    isLoading
  };

  return (
    <NewsContext.Provider value={context} >
      {props.children}
    </NewsContext.Provider>
  );
}