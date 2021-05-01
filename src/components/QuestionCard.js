const QuestionCard = ({ data }) => {
  // console.log(data);

  return (
    <div className="card">
      <h3>QuestionCard</h3>
      {data && <div>{data[1].question}</div>}

      <button>next</button>
    </div>
  );
};

export default QuestionCard;
