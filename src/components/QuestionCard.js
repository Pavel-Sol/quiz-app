import { useSelector, useDispatch } from 'react-redux';
import { increaseScoreAC, setAnswerAC } from './../store/actions';

const QuestionCard = ({ data }) => {
  const dispatch = useDispatch();
  const userAnswer = useSelector((state) => state.currentUserAnswer);

  const acceptAnswer = (e) => {
    dispatch(setAnswerAC(e.target.value));
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
              <button disabled={userAnswer} value={answer} onClick={acceptAnswer}>
                {answer}
              </button>
            </div>
          );
        })}
    </div>
  );
};

export default QuestionCard;
