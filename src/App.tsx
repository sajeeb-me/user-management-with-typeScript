import React from 'react';
import './App.css';
import Counter from './components/Counter';
import Users from './components/Users';

let student: string = 'Rahim';
let age: number = 20;
let isGood: boolean = true;

let students: string[] = ['Karim', 'Rahim', 'Jasim']
let fees: number[] = [10, 20, 30]

interface Person {
  name: string,
  age?: number,
  student: boolean,
  location?: string | number
}

const person: Person = {
  name: 'Bill',
  // age: 23,
  student: true,
  location: 55
}

const handleAddUser = (fName: string, age: number, address: string): number => {
  const total: number = 50;
  console.log(fName, age, address);
  return total;
}

function App() {
  return (
    <div className="App">
      <Counter />
      <Users />
    </div>
  );
}

export default App;
