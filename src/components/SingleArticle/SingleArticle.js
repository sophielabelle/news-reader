import './SingleArticle.css';
import { DateTime } from "luxon";

export const SingleArticle = ({ article }) =>  {
  const cleanDate = DateTime.fromISO(article.publishedAt).toLocaleString(DateTime.DATE_MED);

  return (
    <div className="single-article nav-spacing">
      <h2>{article.title}</h2>
      <h3>{article.author} Published {cleanDate}</h3>
      <p>{article.content}</p>
    </div>
  );
}