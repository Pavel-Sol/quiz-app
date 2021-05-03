import React, { FC } from 'react';
import {useDispatch } from 'react-redux';
import {useState} from 'react'

import {fetchQuizQuestions, resetDataAC} from './../store/actions'

const StartupSettings: FC = () => {
   const dispatch = useDispatch()
   const [difficulty, setDifficulty] = useState('easy')
   const [amount, setAmount] = useState('10')

   const startGame = (difficulty: string, amount: string) => {
      dispatch(resetDataAC());
      dispatch(fetchQuizQuestions(difficulty, amount));
    };

   //  select изменение лок. стейта--------
    const selectDifficulty = (e: React.ChangeEvent<HTMLSelectElement>) => {
      setDifficulty(e.target.value)
    }

    const selectAmount = (e: React.ChangeEvent<HTMLSelectElement>) => {
      setAmount(e.target.value)
    }

   return(
      <div>
         <div className='difficulty'>
            <select onChange={selectDifficulty}>
               <option value="easy">Easy</option>
               <option value="medium">Medium</option>
               <option value="hard">Hard</option>
            </select>
         </div>

         <div className='quantity'>
            <select onChange={selectAmount}>
               <option value="10">10</option>
               <option value="20">20</option>
               <option value="30">30</option>
            </select>
         </div>
         <button onClick={() => startGame(difficulty, amount)}>start</button>
      </div>
   )
}

export default StartupSettings