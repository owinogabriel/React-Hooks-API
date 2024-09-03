import React from 'react'

 const AddTransaction = () => {
  return (
    <>
<h3>Add New transaction</h3>
<form>
  <div className='form-control'>
    <label for="text">Text</label>
    <input type='text' placeholder='Enter text...'
  </div>
</form>
    </>
  )
};
export  default AddTransaction;
