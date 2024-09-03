import { useState } from "react";
import React from 'react'

 const AddTransaction = () => {
  const [text,setText]= useState('')
const [amount,setAmount]=useState('')

  return (
    <>
<h3>Add New transaction</h3>
<form>
  <div className='form-control'>
    <label htmlfor="text">Text</label>
    <input type='text' value={text} onChange={(e)=>setText(e.target.value)} placeholder='Enter text...' />
  </div>
  <div className='form-control'>
    <label htmlFor="amount">Amount <br />(negative - expense, positive - income)</label>
    <input type='number' value={amount} onChange={(e)=>setAmount(e.target.value)} placeholder='Enter amount ...' />
  </div>
  <button className='btn'>Add transaction</button>
</form>
    </>
  )
};
export  default AddTransaction;
