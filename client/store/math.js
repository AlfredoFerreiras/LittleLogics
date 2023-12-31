import axios from "axios";

// ACTION TYPES
const FETCH_MATH_PROMPT_REQUEST = "FETCH_MATH_PROMPT_REQUEST";
const FETCH_MATH_PROMPT_SUCCESS = "FETCH_MATH_PROMPT_SUCCESS";
const FETCH_MATH_PROMPT_FAILURE = "FETCH_MATH_PROMPT_FAILURE";

// ACTION CREATORS
const fetchMathPromptRequest = () => ({ type: FETCH_MATH_PROMPT_REQUEST });
const fetchMathPromptSuccess = (prompt, subcategory) => ({
  type: FETCH_MATH_PROMPT_SUCCESS,
  prompt,
  subcategory,
});
const fetchMathPromptFailure = (error) => ({
  type: FETCH_MATH_PROMPT_FAILURE,
  error,
});

// THUNK CREATORS
export const fetchMathPrompt = (subcategory) => async (dispatch) => {
  dispatch(fetchMathPromptRequest());
  console.log("Fetching math prompt for subcategory:", subcategory);
  try {
    const res = await axios.get(`/api/math/${subcategory}`);
    console.log("Fetch success:", res.data);
    dispatch(fetchMathPromptSuccess(res.data, subcategory));
  } catch (error) {
    console.error("Fetch error:", error);
    dispatch(fetchMathPromptFailure(error));
  }
};

// INITIAL STATE
const initialState = {
  problems: [],
  prompts: {},
  isLoading: false,
  error: null,
};

// REDUCER
export default function mathReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_MATH_PROMPT_REQUEST:
      console.log("Requesting math prompt...");
      return { ...state, isLoading: true };
    case FETCH_MATH_PROMPT_SUCCESS:
      console.log("Math prompt success:", action);
      return {
        ...state,
        isLoading: false,
        prompts: { ...state.prompts, [action.subcategory]: action.prompt },
        error: null,
      };
    case FETCH_MATH_PROMPT_FAILURE:
      console.log("Math prompt failure:", action.error);
      return { ...state, isLoading: false, error: action.error };
    default:
      return state;
  }
}
