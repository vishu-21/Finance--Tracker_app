import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export const AddTransaction = () => {
  const types = ["Income" , "Expense"];
  const [text, setText] = useState("");
  const[typeval , setTypeval] = useState('');
  let [amount, setAmount] = useState('');

  const { addTransaction } = useContext(GlobalContext);

  const onSubmit = (e) => {
    e.preventDefault();
    if(typeval=="Expense"){
      amount = amount * -1;
    };

    const newTransaction = {
      text,
      amount: +amount,
                
    };
    console.log(typeval);
    addTransaction(newTransaction);
    setText('');
    setAmount('');
    setTypeval();
  };

  return (
    <>
      <div className="add__transaction">
        <h4>Add new transaction</h4>
        <form onSubmit={onSubmit}>
          <div className="form-control">
            <label htmlFor="text">Income / Expense</label>
            <input
              type="text"
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Enter text..."
            />
          </div>
          <div>
            {
              types.map((val)=>{
                return <>
                <input type="radio" value={val} id="{val}" name="method" onChange={(e)=>setTypeval(e.target.value)}/> 
                <label htmlFor="{val}">{val}</label>
                </>
              })
            }

             
         
          </div>
          
          <div className="form-control">
            <label htmlFor="amount">
              Amount <br />
              
            </label>
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="Enter amount('-ve' for expense)"
            />
          </div>
          <button className="btn">Add transaction</button>
        </form>
      </div>
    </>
  );
};
