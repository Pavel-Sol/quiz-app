export const SET_DATA = 'SET_DATA';
export const GET_NEXT_QUESTION = 'GET_NEXT_QUESTION';
export const INCREASE_SCORE = 'INCREASE_SCORE';
export const SET_ANSWER = 'SET_ANSWER';
export const RESET_DATA = 'RESET_DATA';
export const SHOW_LOADER = 'SHOW_LOADER';
export const HIDE_LOADER = 'HIDE_LOADER';

// types TS------------------------------------------

export type QuizStateType = {
  data: null | Array<QuestionItemType>
  questionNum: number
  score: number
  currentUserAnswer: string
  totalQuestions: number
  loading: boolean
}

export type QuestionItemType = {
   answers: Array<string>
   category: string
   correct_answer: string
   difficulty: string
   incorrect_answers: Array<string>
   question: string
   type: string
}

// actionTypes---
type SetDataACType = {
  type: typeof SET_DATA
  payload: null | Array<QuestionItemType>
}

type ResetDataACType = {
  type: typeof RESET_DATA
}

type GetNextQuestionACType = {
  type: typeof GET_NEXT_QUESTION
}

type IncreaseScoreACType = {
  type: typeof INCREASE_SCORE
}

type SetAnswerACType = {
  type: typeof SET_ANSWER
  payload: string
}

type ShowLoaderACType = {
  type: typeof SHOW_LOADER
}

type HideLoaderACType = {
  type: typeof HIDE_LOADER
}

export type QuizActionType = SetDataACType 
| ResetDataACType
| GetNextQuestionACType
| IncreaseScoreACType
| SetAnswerACType
| ShowLoaderACType
| HideLoaderACType