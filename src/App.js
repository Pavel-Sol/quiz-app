import QuestionCard from './components/QuestionCard';
import { useSelector, useDispatch } from 'react-redux';
import { getDataAC, getNextQuestionAC } from './store/actions';

function App() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.data);
  const questionNum = useSelector((state) => state.questionNum);

  const fetchData = async () => {
    const res = await fetch(`https://opentdb.com/api.php?amount=10&difficulty=easy&type=multiple`);
    const json = await res.json();

    const questions = await json.results;
    dispatch(getDataAC(questions));
  };

  const getNextQuestion = () => {
    dispatch(getNextQuestionAC());
  };

  return (
    <div className="container">
      <h1>my-quiz</h1>
      <button onClick={() => fetchData()}>start</button>
      {data && <QuestionCard data={data[questionNum]} />}
      <div>{data && <button onClick={() => getNextQuestion()}>next</button>}</div>
    </div>
  );
}

export default App;
