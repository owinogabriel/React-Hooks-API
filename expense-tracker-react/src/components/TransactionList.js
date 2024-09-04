import React, {useContext} from 'react'
import { GlobalContext } from '../context/GlobalState';


const TransactionList = () => {
  const { transaction } = useContext(GlobalContext);

  return (
    <>
      <h3>History</h3>
      <ul  className='list'>
        {transaction.map((trans) => (
          <li key={trans.id} className={trans.amount < 0 ? 'minus' : 'plus'}>
            {trans.text} <span>{trans.amount < 0 ? '-' : '+'}${Math.abs(trans.amount)}</span>
            <button className='delete-btn'>x</button>
          </li>
        ))}
      </ul>
    </>
  );
};
export default TransactionList;
