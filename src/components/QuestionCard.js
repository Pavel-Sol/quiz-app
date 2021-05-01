import { useSelector, useDispatch } from 'react-redux';
import { increaseScoreAC, setAnswerAC } from './../store/actions';

const QuestionCard = ({ data }) => {
  // console.log(data);

  const dispatch = useDispatch();
  const userAnswer = useSelector((state) => state.currentUserAnswer);
  // const questionNum = useSelector((state) => state.questionNum);
  // const totalQuestions = useSelector((state) => state.totalQuestions);
  // console.log(userAnswer);

  const acceptAnswer = (e) => {
    // console.log(e.target.value);
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
