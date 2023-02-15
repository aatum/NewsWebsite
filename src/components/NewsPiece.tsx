import React from "react";

//creating newspiece interface, for every newspiece showed in the page
export default interface NewsPiece{
    title: string;
    url: string;
    urlToImage: string;
}

//defining the newspiece and returning it
const NewsPiece: React.FC<NewsPiece> = ({ title, url, urlToImage }) => {
    return (
      <div className='news-app'>
        <div className='news-piece'>
          <img className='news-img' src={urlToImage} alt={urlToImage} />
          <h3>
            <a href={url}>{title}</a>
          </h3>
        </div>
      </div>
    );
  };

