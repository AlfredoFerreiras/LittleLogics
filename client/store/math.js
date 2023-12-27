import axios from "axios";

// Action Types
const GET_MATH_PROBLEMS = "GET_MATH_PROBLEMS";
const ADD_MATH_PROBLEM = "ADD_MATH_PROBLEM";
const UPDATE_MATH_PROBLEM = "UPDATE_MATH_PROBLEM";
const DELETE_MATH_PROBLEM = "DELETE_MATH_PROBLEM";

const TOKEN = "token";

// Action Creators
const getMathProblems = (mathProblems) => ({
  type: GET_MATH_PROBLEMS,
  mathProblems,
});
const addMathProblem = (problem) => ({ type: ADD_MATH_PROBLEM, problem });
const updateMathProblem = (problem) => ({ type: UPDATE_MATH_PROBLEM, problem });
const deleteMathProblem = (id) => ({ type: DELETE_MATH_PROBLEM, id });

// Thunk Creators
export const fetchMathProblems = () => {
  return async (dispatch) => {
    const token = window.localStorage.getItem(TOKEN);
    const res = await axios.get("/api/math", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const mathProblems = res.data;
    dispatch(getMathProblems(mathProblems));
  };
};

export const postMathProblem = (problem) => async (dispatch) => {
  try {
    const res = await axios.post("/api/math", problem);
    dispatch(addMathProblem(res.data));
  } catch (err) {
    console.error(err);
  }
};

export const putMathProblem = (problem) => async (dispatch) => {
  try {
    const res = await axios.put(`/api/math/${problem.id}`, problem);
    dispatch(updateMathProblem(res.data));
  } catch (err) {
    console.error(err);
  }
};

export const destroyMathProblem = (id) => async (dispatch) => {
  try {
    await axios.delete(`/api/math/${id}`);
    dispatch(deleteMathProblem(id));
  } catch (err) {
    console.error(err);
  }
};

4;
export default function mathReducer(state = [], action) {
  switch (action.type) {
    case GET_MATH_PROBLEMS:
      return action.mathProblems;
    case ADD_MATH_PROBLEM:
      return [...state, action.problem];
    case UPDATE_MATH_PROBLEM:
      return state.map((problem) =>
        problem.id === action.problem.id ? action.problem : problem
      );
    case DELETE_MATH_PROBLEM:
      return state.filter((problem) => problem.id !== action.id);
    default:
      return state;
  }
}
