import React from 'react'

const TransactionList = () => {
  return (
   <>
   <h3>History</h3>
   <ul id='list' className='list'>
    <li className='minus'>
cash <span><button className='delete-btn'>x</button></span>
    </li>
   </ul>
   </>
  )
};
export default TransactionList;
