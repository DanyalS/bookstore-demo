import { ADD_BOOK, EDIT_BOOK, DELETE_BOOK } from "../actions/bookActions";
import { Book } from "../types/types";

const initialState: Book[] = [];

const bookReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.payload];
    case EDIT_BOOK:
      return state.map((book: Book) => (book.id === action.payload.id ? action.payload : book));
    case DELETE_BOOK:
      return state.filter((book: Book) => book.id !== action.payload);
    default:
      return state;
  }
};

export default bookReducer;
