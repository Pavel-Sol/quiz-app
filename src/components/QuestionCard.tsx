import React, { FC } from 'react';
import {useDispatch } from 'react-redux';

import { increaseScoreAC, setAnswerAC } from '../store/actions';
import {QuestionItemType} from './../store/type'

type Props = {
  data: QuestionItemType
  userAnswer: string
}

const QuestionCard: FC<Props> = ({ data, userAnswer }) => {
  const dispatch = useDispatch();

  const acceptAnswer = (e: React.MouseEvent<HTMLButtonElement>): void => {
    dispatch(setAnswerAC(e.currentTarget.value));
    if (e.currentTarget.value === data.correct_answer) {
      dispatch(increaseScoreAC());
    }
  };

  return (
    <div className="card">
      <h3>QuestionCard</h3>
      {data && <div>{data.question}</div>}
      {data &&
        data.answers.map((answer : string) => {
          return (
            <div key={answer}>
              <button disabled={userAnswer ? true : false} value={answer} onClick={acceptAnswer}>
                {answer}
              </button>
            </div>
          );
        })}
    </div>
  );
};

export default QuestionCard;
