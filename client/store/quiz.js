import axios from "axios";

// Action Types
const GET_QUIZZES = "GET_QUIZZES";
const ADD_QUIZ = "ADD_QUIZ";
const UPDATE_QUIZ = "UPDATE_QUIZ";
const DELETE_QUIZ = "DELETE_QUIZ";

// Action Creators
const getQuizzes = (quizzes) => ({ type: GET_QUIZZES, quizzes });
const addQuiz = (quiz) => ({ type: ADD_QUIZ, quiz });
const updateQuiz = (quiz) => ({ type: UPDATE_QUIZ, quiz });
const deleteQuiz = (id) => ({ type: DELETE_QUIZ, id });

// Thunk Creators
export const fetchQuizzes = () => async (dispatch) => {
  try {
    const { data } = await axios.get("/api/quiz");
    dispatch(getQuizzes(data));
  } catch (error) {
    console.error(error);
  }
};

export const fetchRandomQuizzes = () => async (dispatch) => {
  try {
    const { data } = await axios.get("/api/quiz/random");
    dispatch(getQuizzes(data));
  } catch (error) {
    console.error(error);
  }
};

export const createQuiz = (quiz) => async (dispatch) => {
  try {
    const { data } = await axios.post("/api/quiz", quiz);
    dispatch(addQuiz(data));
  } catch (error) {
    console.error(error);
  }
};

export const editQuiz = (quiz) => async (dispatch) => {
  try {
    const { data } = await axios.put(`/api/quiz/${quiz.id}`, quiz);
    dispatch(updateQuiz(data));
  } catch (error) {
    console.error(error);
  }
};

export const removeQuiz = (id) => async (dispatch) => {
  try {
    await axios.delete(`/api/quiz/${id}`);
    dispatch(deleteQuiz(id));
  } catch (error) {
    console.error(error);
  }
};

// Reducer
export default function quizReducer(state = [], action) {
  switch (action.type) {
    case GET_QUIZZES:
      return action.quizzes;
    case ADD_QUIZ:
      return [...state, action.quiz];
    case UPDATE_QUIZ:
      return state.map((quiz) =>
        quiz.id === action.quiz.id ? action.quiz : quiz
      );
    case DELETE_QUIZ:
      return state.filter((quiz) => quiz.id !== action.id);
    default:
      return state;
  }
}
