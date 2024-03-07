import { createStore } from "redux";
import bookReducer from "../reducers/bookReducer";

const configureStore = () => {
  return createStore(bookReducer);
};

export default configureStore;
