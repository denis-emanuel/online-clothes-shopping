import UserActionType from "./user.types";

const INITIAL_STATE = {
  currentUser: null,
  error: null,
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UserActionType.GOOGLE_SIGN_IN_SUCCESS:
    case UserActionType.EMAIL_SIGN_IN_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
        error: null,
      };

    case UserActionType.SIGN_OUT_SUCCESS:
      return {
        ...state,
        currentUser: null,
        error: null,
      };

    case UserActionType.SIGN_UP_FAILURE:
    case UserActionType.GOOGLE_SIGN_IN_FAILURE:
    case UserActionType.EMAIL_SIGN_IN_FAILURE:
    case UserActionType.SIGN_OUT_FAILURE:
      return {
        ...state,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default userReducer;
