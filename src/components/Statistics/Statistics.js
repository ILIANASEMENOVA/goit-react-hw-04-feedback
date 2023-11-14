import { ListFeedback } from './Statistics.styled';

export const Statistics = ({ stats, total, positivePercentage }) => {
  const keys = Object.keys(stats);
  const statisticsList = keys.map(key => (
    <li key={key}>
      {key}: {stats[key]}
    </li>
  ));

  return (
    <>
      <ListFeedback>
        {statisticsList}
        <p>Total: {total}</p>
        <p>Positive Feedback: {positivePercentage}%</p>
      </ListFeedback>
    </>
  );
};
