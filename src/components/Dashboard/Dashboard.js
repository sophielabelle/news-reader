import './Dashboard.css';
import { DashboardCard } from './DashboardCard/DashboardCard';

export const Dashboard = ({ articles }) =>  {
  const articleDisplay = articles.map((article, i) => {
    return (
      <DashboardCard key={article.title} article={article}/>
    )
  })

  return (
    <div className="dashboard">
      <h2>Recent Articles</h2>
      {articleDisplay}
    </div>
  );
}