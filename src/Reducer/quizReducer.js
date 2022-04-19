
import { ACTION_TYPE } from "../Utility/constants";

export const quizReducerFtn = (state, action) => {
  switch (action.type) {
    case ACTION_TYPE.SET_CATEGORIES:
      return { ...state, categories: action.payload };
    case ACTION_TYPE.QUIZZES_BY_CATEGORY:
      return { ...state, quizzesByCategory: action.payload };
    case ACTION_TYPE.SET_QUIZ:
      return { ...state, quiz: action.payload };
    case ACTION_TYPE.CLEAR_FILTER:
      return initialFilterState;
    default:
      return state;
  }
};
