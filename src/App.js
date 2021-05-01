import QuestionCard from './components/QuestionCard';
import { useSelector, useDispatch } from 'react-redux';
import { getNextQuestionAC, fetchQuizQuestions, setAnswerAC, resetDataAC } from './store/actions';

function App() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.data);
  const score = useSelector((state) => state.score);
  const questionNum = useSelector((state) => state.questionNum);
  const totalQuestions = useSelector((state) => state.totalQuestions);
  const userAnswer = useSelector((state) => state.currentUserAnswer);

  console.log(data);

  const getNextQuestion = () => {
    dispatch(getNextQuestionAC());
    dispatch(setAnswerAC(''));
  };

  const startGame = () => {
    dispatch(resetDataAC());
    dispatch(fetchQuizQuestions());
  };

  return (
    <div className="container">
      <h1>my-quiz</h1>
      {data ? <div>SCORE: {score}</div> : null}
      {!data || totalQuestions - 1 === questionNum ? (
        <button onClick={() => startGame()}>start</button>
      ) : null}
      {data ? <QuestionCard data={data[questionNum]} /> : null}
      <div>
        {data && userAnswer && totalQuestions - 1 !== questionNum ? (
          <button onClick={() => getNextQuestion()}>next</button>
        ) : null}
      </div>
    </div>
  );
}

export default App;
