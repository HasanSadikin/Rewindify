import { Album } from "./AlbumContext";

type Action =
  | {
      type: "NEXT_SONG";
    }
  | {
      type: "PREV_SONG";
    };

const albumStateReducer = (state: Album, action: Action) => {
  const { type } = action;

  switch (type) {
    case "NEXT_SONG":
      return {
        ...state,
      };
    case "PREV_SONG":
      return {
        ...state,
      };
    default:
      return {
        ...state,
      };
  }
};

export default albumStateReducer;
