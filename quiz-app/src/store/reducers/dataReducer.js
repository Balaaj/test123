import questionData from '../../questionData.json'

const initialState = {
  questions: questionData,
  currentIndex: 0,
  questionScore: 0
}

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_QUESTIONS':
      return {
        ...state,
        questions: action.payload.data || questionData,
        currentIndex: action.payload.index || 0
      }
    case 'SET_QUESTIONS_INDEX':
      return {
        ...state,
        currentIndex: action.index
      }
    case 'SET_QUESTION_SCORE':
      return {
        ...state,
        questionScore: state.questionScore + action.score
      }
    default:
      return state
  }
}

export default dataReducer;