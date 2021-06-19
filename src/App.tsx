import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import List from './components/List';
import AddToList from './components/AddToList';

export interface IState {
  people: {
    name: string
    age: number
    url: string
    note?: string
  }[]
}

function App() {
  const [people, setPeople] = useState<IState["people"]>([
    {
      name: "Gideo",
      age: 3000,
      url: "https://media.gettyimages.com/photos/love-everything-picture-id1135940061?s=612x612",
      note: "He is a yehyeh boy"
    }
  ]);

  // people.map(i => {
  //   i.age
  // })

  return (
    <div className="App">
      <h1>People Invited To Our Party</h1>
      <List people={ people } />
      <AddToList people={ people } setPeople={ setPeople } />
    </div>
  );
}

export default App;
