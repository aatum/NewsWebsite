import React, { useState, useEffect } from "react";
import NewsPiece from "./NewsPiece";
import API_KEY from "../keys";
import { makeStyles } from '@mui/styles';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

//using makeStyles to make styling for the page and the newscards
const useStyles = makeStyles({
  root: {
    flexGrow: 2,
  },
  card: {
    maxWidth: 500,
    minHeight: 200,
    height: 280,
  },
  media: {
    height: 160,
  },
});

//making the newscards, using newspiece interface
const NewsCard = ({ title, urlToImage, url }: NewsPiece) => {
  const classes = useStyles();

//returning the cards
  return (
    <Card className={classes.card}>
      <CardActionArea href={url} target="_blank">
        <CardMedia
          className={classes.media}
          image={urlToImage}
          title={title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

//creating const for entertainment news
const EntertainmentNewsList = () => {

//arraying the newspiece and creating classes const to use created styles
const [news, setNews] = useState<Array<NewsPiece>>([]);
const classes = useStyles();


//fetching news from the API
const getNews = () => {
    fetch(`https://newsapi.org/v2/top-headlines?country=gb&category=entertainment&language=en&apiKey=${API_KEY}`)
      .then(response => response.json())
      .then(data => setNews(data.articles))
      .catch(err => {
        console.log(err);
      });
  };
  
//using useEffect hook to get news
  useEffect(() => {
    getNews();
  }, []);

//returning the page with some styling
  return (
    <div>
      <Grid container className={classes.root} spacing={2}>
      {news.slice(0, 9).map((article, index) => (
          <Grid item xs={10} sm={6} md={4} key={index}>
            <NewsCard
              title={article.title}
              urlToImage={article.urlToImage}
              url={article.url}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default EntertainmentNewsList;
