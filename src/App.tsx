import { FC } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import QuestionCard from './components/QuestionCard';
import Loader from './components/Loader';
import StartupSettings from './components/StartupSettings'
import { getNextQuestionAC, setAnswerAC,} from './store/actions';
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

  const getNextQuestion = () => {
    dispatch(getNextQuestionAC());
    dispatch(setAnswerAC(''));
  };

  return (
    <div className="container">
      <h1 className='title'>quiz-app</h1>
      {data ? <div className='score'>score: {score}</div> : null}
      {data ? <div className='total'>total:  {questionNum + 1} / {totalQuestions}</div> : null}
      {!data || totalQuestions - 1 === questionNum ? (
        <StartupSettings />
      ) : null}
      {loading && <Loader />}
      {data ? <QuestionCard data={data[questionNum]} userAnswer={userAnswer}/> : null}
      <div>
        {data && userAnswer && totalQuestions - 1 !== questionNum ? (
          <button className='btn-next' onClick={() => getNextQuestion()}>next</button>
        ) : null}
      </div>
      {
        errorMsg && <div>{errorMsg}</div>
      }
    </div>
  );
}

export default App;
