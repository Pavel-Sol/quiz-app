import QuestionCard from './components/QuestionCard';
import { useSelector, useDispatch } from 'react-redux';
import { getNextQuestionAC, fetchQuizQuestions } from './store/actions';

function App() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.data);
  const questionNum = useSelector((state) => state.questionNum);

  const getNextQuestion = () => {
    dispatch(getNextQuestionAC());
  };

  const startGame = () => {
    dispatch(fetchQuizQuestions());
  };

  return (
    <div className="container">
      <h1>my-quiz</h1>
      <button onClick={() => startGame()}>start</button>
      {data && <QuestionCard data={data[questionNum]} />}
      <div>{data && <button onClick={() => getNextQuestion()}>next</button>}</div>
    </div>
  );
}

export default App;
