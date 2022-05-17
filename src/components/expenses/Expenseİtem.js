import React from 'react'
import ExpenseDate from './ExpenseDate'
import Card from '../Ui/Card'
import { useState } from 'react'
export default function Expenseİtem(props) {

 const [title, setTitle]=useState(props.title)
  
 const clickHandler=()=>{
console.log(props.title)
setTitle("saa")
 }
    return (
      

            <Card className='expense-item'>
              <ExpenseDate date={props.date}/>
                <div className='expense-item__description'>
                    <h2>{props.title}</h2>
                </div>
                <div className='expense-item__price'>${props.amount}</div>
                <button onClick={clickHandler}>Click</button>
            </Card>

    )
}
