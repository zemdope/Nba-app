import React, { useEffect, useState } from 'react';
import axios from 'axios';
import NewsCard from '../components/molecules/NewsCard/NewsCard';
import { ButtonNews, Wrapper, Container } from './News.styles';
import Loader from '../components/atoms/Loader/Loader';

const News = () => {
  const [isClicked, setIsClicked] = useState(false);
  const [news, setNews] = useState([]);

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
      .then(function ({ data }) {
        setNews(data);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  return (
    <Container>
      <Wrapper isClicked={isClicked}>
        {news.length && isClicked ? (
          news
            .slice(0, 6)
            .map((news) => <NewsCard key={news.title} newsData={news} />)
        ) : (
          <Loader />
        )}
      </Wrapper>

      <ButtonNews isClicked={isClicked} onClick={handleGetNews}>
        Get news
      </ButtonNews>
    </Container>
  );
};

export default News;
