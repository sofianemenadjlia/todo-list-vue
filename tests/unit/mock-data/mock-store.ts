import { createStore } from "vuex";

import { StateInterface } from "@/store";
import todosModule from "@/store/todos";
import todosState from "./test-todos-state";


// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const createVuexStore = (todosInitialState = todosState) =>
  createStore<StateInterface>({
    modules: {
      todos: {
        ...todosModule,
        state: { ...todosInitialState },
      },
    },
  });

export default createVuexStore;
