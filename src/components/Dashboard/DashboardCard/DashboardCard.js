import './DashboardCard.css';

export const DashboardCard = ({article}) =>  {
  console.log(article)
  return (
    <div className="dashboard-card">
      <h2>{article.title}</h2>
      <p>{article.description}</p>
    </div>
  );
}