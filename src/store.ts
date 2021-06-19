import { makeAutoObservable } from "mobx";

// Standard interface and functions
export interface Todo {
    id: number;
    text: string;
    done: boolean;
  }
  
  const removeTodo = (todos: Todo[], id: number): Todo[] =>
    todos.filter((todo) => todo.id !== id);
  
  const addTodo = (todos: Todo[], text: string): Todo[] => [
    ...todos,
    {
      id: Math.max(0, Math.max(...todos.map(({ id }) => id))) + 1,
      text,
      done: false,
    },
  ];

//   Mobx Implementation

class Store {
    todos: Todo[] = [ ];
    newTodo: string = "";

    constructor() {
        makeAutoObservable(this);
    }


}

const store = new Store();
export default store;