import './DashboardCard.css';
import { DateTime } from "luxon";

export const DashboardCard = ({article}) =>  {
  const cleanName = article.source.name ? <p>Source: {article.source.name}</p> : null;
  const cleanDate = DateTime.fromISO(article.publishedAt).toLocaleString(DateTime.DATE_MED);
  
  return (
    <div className="dashboard-card">
      <h2>{article.title}</h2>
      <section className='card-contents'>
        <img src={article.urlToImage} alt={article.title}/>
        <div className='card-description'>
          <p>{article.description}</p>
          {cleanName}
          <p>Published: {cleanDate}</p>
        </div>
      </section>
    </div>
  );
}