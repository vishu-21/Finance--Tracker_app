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
    if(typeval==="Expense"){
      amount = amount * -1;
    };
    if(typeval===undefined){
      amount = "NULL";
    }
    if(text ==="" || amount ==="" || typeval===undefined){
      alert('please fill all the data')
    }
    const newTransaction = {
      text,
      amount: +amount,               
    };
    console.log(typeval);
    addTransaction(newTransaction);
    setTypeval('');
    setText('');
    setAmount('');
    
  };

  return (
    <>
      <div className="add__transaction">
        <h4>Add new transaction</h4>
        <form onSubmit={onSubmit}>
          <div className="form-control">
            <label htmlFor="text" className="method__type" >Category</label>
            <input
              type="text"
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Enter text..." required
            />
          </div>
          <div>
            <div className="method__type">Type</div>
            {
              types.map((val,ind)=>{
                return <>
                <input type="radio"  value={val} id="{val}" name="method" onChange={(e)=>setTypeval(e.target.value)}/> 
                <label htmlFor="{val}"key={ind} >{val}</label>
                </>
              })
            }

             
         
          </div>
          
          <div className="form-control">
            <label htmlFor="amount" className="method__type"> Amount           
            </label>
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="Enter amount"
            />
          </div>
          <button className="btn">Add transaction</button>
        </form>
      </div>
    </>
  );
};
