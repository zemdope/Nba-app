import React, { useEffect, useState } from 'react';
import axios from 'axios';
import NewsCard from '../components/molecules/NewsCard/NewsCard';
import { ButtonNews } from './News.styles';

const News = () => {
  const [isClicked, setIsClicked] = useState(false);

  const handleGetNews = () => {
    setIsClicked(!isClicked);
  };

  useEffect(() => {
    const options = {
      method: 'GET',
      url: 'https://nba-latest-news.p.rapidapi.com/news',
      headers: {
        'x-rapidapi-host': 'nba-latest-news.p.rapidapi.com',
        'x-rapidapi-key': '384f5fdd59msh8044fc1c58189a5p14efcdjsn9147742562dc'
      }
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  return (
    <>
      <NewsCard isClicked={isClicked} />
      <ButtonNews isClicked={isClicked} onClick={handleGetNews}>
        Check news
      </ButtonNews>
    </>
  );
};

export default News;
