/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import './App.css';

let name: string;
let age: number | string; //number OR string
let isStudent: boolean;
let hobbies: string[];
let role: [number, string]

let printName: (name: string) => void; //passes a string, returns VOID (because it's just console logging)

// function printName(name:string|number){
//   console.log(name)
// }

// type Person={
//   name:string;
//   age?:number;
// }

// let person: Person = {
//   name: "dave"
// }

// let lotsofpeople:Person[];


function App() {
  return (
    <div className="App">
      hello world
    </div>
  );
}

export default App;
