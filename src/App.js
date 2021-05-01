import QuestionCard from './components/QuestionCard';
import { useSelector, useDispatch } from 'react-redux';
import { getDataAC } from './store/reducer';

function App() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.data);
  // console.log(data);

  const fetchData = async () => {
    const res = await fetch(`https://opentdb.com/api.php?amount=10&difficulty=easy&type=multiple`);
    const json = await res.json();

    const questions = await json.results;
    dispatch(getDataAC(questions));
  };

  return (
    <div className="container">
      <h1>my-quiz</h1>
      <button onClick={() => fetchData()}>start</button>
      <QuestionCard data={data} />
    </div>
  );
}

export default App;
