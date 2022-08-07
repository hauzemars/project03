import React from 'react';
import './App.css';
import Dinner from './dinner';
import Breakfast from './breakfast';



function App() {
  return (
  <div className="App">
        <Dinner dishName="Beef Biryani" sweetDish="Kheer"/>
        <hr/>
        <Dinner dishName="Burger" sweetDish="Pudding"/>
        <hr/>
        <Dinner dishName="Salad" sweetDish="Ice Cream"/>
        <hr/>
        <Breakfast Maiin="Paratha"/>

  </div>
  

  );
  
}

export default App;

