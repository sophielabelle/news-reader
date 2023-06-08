import './SingleArticle.css';
import { DateTime } from "luxon";

export const SingleArticle = ({ article }) =>  {
  console.log(article)
  const cleanDate = article.publishedAt ? DateTime.fromISO(article.publishedAt).toLocaleString(DateTime.DATE_MED) : null;

  return (
    <div className="single-article nav-spacing">
      <div className="single-content">
        <h2>{article.title}</h2>
        <h3>{article.author} Published {cleanDate}</h3>
        <img src={article.urlToImage} alt=''/>
        <p>{article.content}</p>
      </div>
    </div>
  );
}