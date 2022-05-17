import React from 'react'
import Expenseİtem from './Expenseİtem';
 const ExpensesList=props=>{

    if (props.items.length==0){
     return <h2 className='expenses-list__fallback'>No Expense Found</h2>
    }
  return (
    <div>
         <ul className='expenses-list'>
           {props.items.map((expense)=><Expenseİtem
            key={expense.id} 
            title={expense.title}
            date={expense.date} 
            amount={expense.amount}/>)}
        </ul>
            
        
    </div>
  );
}

export default ExpensesList;
