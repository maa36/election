import { createStore } from "redux";

const user = [];

const FactureTotal = (state = user, action) => {
  if (action.type === "NEW_USER") {
      console.log(action.nouveauxUsers);
      
  return state;
    
  }
  return state;
};

const MyStore = createStore(FactureTotal);

export default MyStore;