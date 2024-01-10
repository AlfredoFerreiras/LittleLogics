import axios from "axios";

const FETCH_TTS_REQUEST = "FETCH_TTS_REQUEST";
const FETCH_TTS_SUCCESS = "FETCH_TTS_SUCCESS";
const FETCH_TTS_FAILURE = "FETCH_TTS_FAILURE";

// ACTION CREATORS
const fetchTTSRequest = () => ({ type: FETCH_TTS_REQUEST });
const fetchTTSSuccess = (audio) => ({
  type: FETCH_TTS_SUCCESS,
  payload: audio,
});
const fetchTTSFailure = (error) => ({
  type: FETCH_TTS_FAILURE,
  payload: error,
});

// THUNK CREATORS
export const fetchTTS = (text, voice) => async (dispatch) => {
  dispatch(fetchTTSRequest());
  try {
    const response = await axios.post("/api/tts/synthesize", { text, voice });
    const audioBlob = new Blob([response.data], { type: "audio/Opus" });
    dispatch(fetchTTSSuccess(URL.createObjectURL(audioBlob)));
  } catch (error) {
    console.error("Error in synthesizing speech:", error);
    dispatch(fetchTTSFailure(error));
  }
};

// INITIAL STATE
const initialState = {
  audioUrl: "",
  isLoading: false,
  error: null,
};

export default function ttsReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_TTS_REQUEST:
      return { ...state, isLoading: true };
    case FETCH_TTS_SUCCESS:
      return { ...state, isLoading: false, audioUrl: action.payload };
    case FETCH_TTS_FAILURE:
      return { ...state, isLoading: false, error: action.payload };
    default:
      return state;
  }
}
