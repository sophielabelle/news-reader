import { Link } from 'react-router-dom';
import { DateTime } from "luxon";
import './DashboardCard.css';

export const DashboardCard = ({article}) =>  {
  const cleanName = article.source.name ? <p>Source: {article.source.name}</p> : null;
  const cleanDate = DateTime.fromISO(article.publishedAt).toLocaleString(DateTime.DATE_MED);

  return (
    <Link to={`/article/${article.source.id}`}>
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
    </Link>
  );
}

