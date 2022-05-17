import React,{useState} from 'react'
import ExpenseForm from './ExpenseForm';


const NewExpense=(props)=> {

  const [isEditing, setIsEditing]=useState(false)
  const SaveExpenseDataHandler=(enteredExpenseData)=>{
    const expenseData={
      ...enteredExpenseData,
      id: Math.random().toString()
    };
   props.onAddExpense(expenseData)
  }

  const startEditingHandler=()=>{
    setIsEditing(true)
  }
  const stopEditingHandler=()=>{
    setIsEditing(false)
  }
  return (
    <div className='new-expense'>
           
           {isEditing &&  <ExpenseForm onSaveExpenseData={SaveExpenseDataHandler} onCancel={stopEditingHandler}/>}
           {!isEditing &&  <button onClick={startEditingHandler}>Add New Expence</button>}
        </div>
  )
}

export default NewExpense;
