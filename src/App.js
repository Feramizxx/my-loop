import './App.css';
import { useState} from 'react';
import Expenses from './components/expenses/Expenses';
import NewExpense from './components/NewExpenses/NewExpense';
 
const DUMMY_EXPENSES = [
  {
    id:'e1',
    title: "Toilet Paper",
    date: new Date(2021, 3, 28),
    amount:294.67
  },
  {
    id:'e2',
    title: "Car insurance",
    date: new Date(2021, 4, 28),
    amount:254.67
  },
  {
    id:'e2',
    title: "New Tv",
    date: new Date(2021, 5, 28),
    amount:300.67
  }]

  



function App() {
   const [expenses, setExpense]= useState(DUMMY_EXPENSES)
   const addExpenseHandler=expense=>{
    setExpense(prevExpenses=>{
      return [expense, ...prevExpenses]
    })
  }
    return (
    <>
    <NewExpense onAddExpense={addExpenseHandler}/>
    <Expenses items={expenses}/>
    </>
  );
}

export default App;
