/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react';
import './App.css';
import InputField from './components/InputField';

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


  return (
    <div className="App">
      <span className="heading">Taskify</span>
      <InputField
        todo={todo}
        setTodo={setTodo}
      />
    </div>
  );
}

export default App;
