// перемешивает ответы для вывода на страницу
export const shuffleArray = (array: Array<any>) => [...array].sort(() => Math.random() - 0.5);



// проверка на правильность ответа принимает: 
// answer - значение кнопки,
// userAnswer - ответ, который дал юзер,
// correctAnswer - правильный ответ.
// возвращает класс для кнопки

export const checkAnswer = (answer: string, userAnswer: string, correctAnswer: string): string =>  {
   if (userAnswer && answer === correctAnswer) {
       return 'card__btn card__btn__correct'
   } else if (userAnswer && answer !== correctAnswer && answer === userAnswer) {
       return 'card__btn card__btn__wrong'
   } else {
     return 'card__btn'
   }
 }