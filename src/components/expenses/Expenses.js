import React, {useState}from 'react'
import Expenseİtem from './Expenseİtem'
import Card from '../Ui/Card'
import ExpenseFilter from './ExpenseFilter'
import ExpensesList from './ExpensesList'
import ExpensesChart from '../Cart/ExpensesChart'
function Expenses(props) {
 const [filteredYear, setFilteredYear]=useState("2020")
  const filterChangeHandler = selectedYear => {
    console.log(selectedYear)
    setFilteredYear(selectedYear);
  }


 
  const filteredExpenses=props.items.filter(expense=>{
  return expense.date.getFullYear().toString()===filteredYear;
  }
    ) 


  return (
    <>
      <Card className='expenses'>
        <div>
        <ExpenseFilter selected={filteredYear} 
         onChangeFilter={filterChangeHandler} /></div>
        <ExpensesChart expenses={filteredExpenses}/>
        <ExpensesList items={filteredExpenses}/>
      </Card>
    </>
  )
}
export default Expenses;

