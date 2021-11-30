import { ACTION_TYPE } from "../../services/constants/Index";

export const initialState = {
  post: [],
  people: [],
};
export const PostReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPE.GETALL:
      return {
        ...state,
        post: action.payload.data,
      };

    case ACTION_TYPE.ADD:
      return {
        ...state,
        post: action.payload.data,
      };

    case ACTION_TYPE.PEOPLE_LIST:
      return {
        ...state,
        people: action.payload.data.data,
      };

    default:
      return state;
  }
};
