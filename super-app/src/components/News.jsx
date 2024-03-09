import React, { useEffect, useState } from "react";
import newsimg from "../assets/images/news.png";
const News = () => {
    const [news,setNews] = useState({});
    const apiKey = import.meta.env.VITE_NEWS_KEY;
    useEffect(() => {
      const apiUrl = `https://newsapi.org/v2/everything?q=tesla&from=2024-02-09&sortBy=publishedAt&apiKey=${apiKey}`;
      fetch(apiUrl)
        .then((res) => res.json())
        .then((res) => setNews(res))
        .catch((err) => console.log(err));
    }, []);
    function truncateText(text, maxWords) {
        if(!text) return;
        const words = text.split(' ');
      
        if (words.length > maxWords) {
          const truncatedText = words.slice(0, maxWords).join(' ');
          return `${truncatedText}...`;
        }
      
        return text;
      }
    const check = () => {
       if(news&&news.articles&&news.articles.length>0) return true;
       return false;
    }
  return (
    <div className="news-container">
      <div className="news-img">
        <img src={check()?news.articles[0].urlToImage:""}  />
        <div className="news-title roboto-500">
          { check()&&news.articles[0].title}
        </div>
      </div>
      <div className="news-detail">
         <div className="news roboto-500">{truncateText(check()&&news.articles[0].description,60)}</div>
      </div>
    </div>
  );
};

export default News;
