import { testData } from '../../dev-data';
import './Dashboard.css';
import { DashboardCard } from './DashboardCard/DashboardCard';

export const Dashboard = () =>  {
  const articleDisplay = testData.map(article => {
    return (
      <DashboardCard key={article.title} article={article}/>
    )
  })

  return (
    <div className="dashboard">
      {articleDisplay}
    </div>
  );
}