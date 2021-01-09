export const setQuestions = (payload) => {
  return {
    type: 'SET_QUESTIONS',
    payload
  }
}

export const setQuestionsIndex = (index) => {
  return {
    type: 'SET_QUESTIONS_INDEX',
    index
  }
}

export const setQuestionScore = (score) => {

  return {
    type: 'SET_QUESTION_SCORE',
    score
  }
}