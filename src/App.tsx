import { FC } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import QuestionCard from './components/QuestionCard';
import Loader from './components/Loader';
import { getNextQuestionAC, fetchQuizQuestions, setAnswerAC, resetDataAC } from './store/actions';
import {RootStateType} from './store'

const App: FC = () => {
  const dispatch = useDispatch();
  const data = useSelector((state: RootStateType) => state.data);
  const score = useSelector((state: RootStateType) => state.score);
  const questionNum = useSelector((state: RootStateType) => state.questionNum);
  const totalQuestions = useSelector((state: RootStateType) => state.totalQuestions);
  const userAnswer = useSelector((state: RootStateType) => state.currentUserAnswer);
  const loading = useSelector((state: RootStateType) => state.loading);
  const errorMsg = useSelector((state: RootStateType) => state.error);
  

  // console.log(data);

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
      {loading && <Loader />}
      {data ? <QuestionCard data={data[questionNum]} userAnswer={userAnswer}/> : null}
      <div>
        {data && userAnswer && totalQuestions - 1 !== questionNum ? (
          <button onClick={() => getNextQuestion()}>next</button>
        ) : null}
      </div>
      {
        errorMsg && <div>{errorMsg}</div>
      }
    </div>
  );
}

export default App;
