import { useSelector, useDispatch } from 'react-redux';
import { increaseScoreAC } from './../store/actions';

const QuestionCard = ({ data }) => {
  console.log(data);

  const dispatch = useDispatch();

  const acceptAnswer = (e) => {
    // console.log(e.target.value);
    if (e.target.value === data.correct_answer) {
      dispatch(increaseScoreAC());
    }
  };

  return (
    <div className="card">
      <h3>QuestionCard</h3>
      {data && <div>{data.question}</div>}
      {data &&
        data.answers.map((answer) => {
          return (
            <div>
              <button value={answer} onClick={acceptAnswer}>
                {answer}
              </button>
              ;
            </div>
          );
        })}
    </div>
  );
};

export default QuestionCard;
