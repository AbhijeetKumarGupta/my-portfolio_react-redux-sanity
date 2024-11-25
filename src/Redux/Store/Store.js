import { createStore } from "redux";
import reducers from "../Reducers/Reducers";

const Store = createStore(reducers);

export default Store;
