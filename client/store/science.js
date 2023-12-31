import axios from "axios";

const FETCH_SCIENCE_PROMPT_REQUEST = "FETCH_SCIENCE_PROMPT_REQUEST";
const FETCH_SCIENCE_PROMPT_SUCCESS = "FETCH_SCIENCE_PROMPT_SUCCESS";
const FETCH_SCIENCE_PROMPT_FAILURE = "FETCH_SCIENCE_PROMPT_FAILURE";

const fetchSciencePromptSuccess = (prompt, subcategory) => ({
  type: FETCH_SCIENCE_PROMPT_SUCCESS,
  payload: { subcategory, ...prompt },
});
const fetchSciencePromptFailure = (error) => ({
  type: FETCH_SCIENCE_PROMPT_FAILURE,
  error,
});

const fetchSciencePromptRequest = () => ({
  type: FETCH_SCIENCE_PROMPT_REQUEST,
});
export const fetchSciencePrompt = (subcategory) => async (dispatch) => {
  dispatch(fetchSciencePromptRequest());
  try {
    const res = await axios.get(`/api/science/${subcategory}`);
    dispatch(fetchSciencePromptSuccess(res.data, subcategory)); // Expecting structured data
  } catch (error) {
    dispatch(fetchSciencePromptFailure(error.toString()));
  }
};

const initialState = {
  problems: [],
  prompts: {},
  isLoading: false,
  error: null,
};

export default function scienceReducer(state = initialState, action) {
  switch (action.type) {
    // ... (Handle any CRUD operations for science problems similar to math)
    case FETCH_SCIENCE_PROMPT_REQUEST:
      return { ...state, isLoading: true };
    case FETCH_SCIENCE_PROMPT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        prompts: {
          ...state.prompts,
          [action.payload.subcategory]: action.payload,
        },
        error: null,
      };
    case FETCH_SCIENCE_PROMPT_FAILURE:
      return { ...state, isLoading: false, error: action.error };
    default:
      return state;
  }
}
