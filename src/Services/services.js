import { ACTION_TYPE } from "../Utility/constants";
import axios from "axios";

export const getCategoryFromServer = async (dispatchQuizState) => {
   
    try {
      const { data, status } = await axios.get("/api/categories");
      if (status === 200)
      dispatchQuizState({ type: ACTION_TYPE.SET_CATEGORIES, payload: data.categories });
    } catch (error) {
      console.error(error);
    }
  };

  export const getQuizByCategory = async (dispatchQuizState, categorySelected) => {
   
    try {
      const { data, status } = await axios.get(`/api/quizzes`);

      if (status === 200){
        const quizByCategory = data.quizes.filter(quiz => quiz.catergoryName === categorySelected)
        dispatchQuizState({ type: ACTION_TYPE.QUIZZES_BY_CATEGORY, payload: quizByCategory});
      }
    
    } catch (error) {
      console.error(error);
    }
  };
  export const getQuizFromServer = async (id , dispatchQuizState) => {
   
    try {
      const { data, status } = await axios.get(`/api/quizzes/${id}`);
      if (status === 200)
        dispatchQuizState({ type: ACTION_TYPE.SET_QUIZ, payload: data.quiz });
    } catch (error) {
      console.error(error);
    }
  };
  