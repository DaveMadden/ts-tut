/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react';
import './App.css';
import InputField from './components/InputField';
import { TodoList } from './components/TodoList';
import { Todo } from './model';

let name: string;
let age: number | string; //number OR string
let isStudent: boolean;
let hobbies: string[];
let role: [number, string]

/** TYPESCRIPT BASICS NOTES
// let printName: (name: string) => void; //passes a string, returns VOID (because it's just console logging)
let printName: (name: string) => never; //passes a string, does not return anything -i don't know how tf you're supposed to make this thing DO anything though...what's the format for the content?!?

// function printName(name:string|number){
//   console.log(name)
// }

// type Person = { //type can be extended in declaration with &
//   name:string;
//   age?:number;
// }
// type Guy = Person & {
//    profession: string;
//}

interface Person { //
  name:string;
  age?:number;
}

interface Guy extends Person { 
  profession: string;
}

// let person: Person = {
//   name: "dave"
// }

// let lotsofpeople:Person[];
*/



const App: React.FC = () => {

  const [todo, setTodo] = useState<string>("")
  const [todos, setTodos] = useState<Todo[]>([]) //type is array of Todos. Todo defined in the model from model.ts

  const handleAdd = (e:React.FormEvent) => {
    e.preventDefault() //stops page refresh that comes as a default
    if (todo){
      let addThis: Todo = {id:Date.now(), todo: todo, isDone: false}
      // console.log(addThis)
      setTodos([...todos, addThis]);
      setTodo("");
    }
  }
  //had to move these outside because the declaration/execution lag was f-ing me up
  // console.log(todos)
  // console.log("should be blank: ", todo)

  return (
    <div className="App">
      <span className="heading">Tasks</span>
      <InputField
        todo={todo}
        setTodo={setTodo}
        handleAdd={handleAdd}
      />
      {/**TODOLIST */}
      <TodoList
        todos={todos}
        setTodos={setTodos}/>
      {/* {todos.map((t)=>(
        <li>{t.todo}</li>
      ))} */}
    </div>
  );
}

export default App;
