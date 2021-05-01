const QuestionCard = ({ data }) => {
  console.log(data);

  return (
    <div className="card">
      <h3>QuestionCard</h3>
      {data && <div>{data.question}</div>}
    </div>
  );
};

export default QuestionCard;
