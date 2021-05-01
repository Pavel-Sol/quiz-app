const QuestionCard = ({ data }) => {
  console.log(data);

  return (
    <div className="card">
      <h3>QuestionCard</h3>
      {data && <div>{data.question}</div>}
      {data &&
        data.answers.map((answer) => {
          return (
            <div>
              <button>{answer}</button>;
            </div>
          );
        })}
    </div>
  );
};

export default QuestionCard;
