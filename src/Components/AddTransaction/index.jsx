import { useState, useRef, useContext } from "react"
import { ExpenseTrackerContext } from "../../Context";

const AddTransaction = () => {
    const context = useContext(ExpenseTrackerContext);
    
    const form = useRef(null);

    const [newTransactionName, setNewTransactionName] = useState("");
    const onChangeName = (event) =>{
        setNewTransactionName (event.target.value);
    }
    
    const [newTransactionAmount, setNewTransactionAmount] = useState("");
    const onChangeAmount = (event) =>{
        setNewTransactionAmount (event.target.value)
    }


    const createNewTransaction = (event, text, amount) =>{
        event.preventDefault();
        setNewTransactionName ("");
        setNewTransactionAmount ("")
        if(!(amount == "") && !(text == "")){
            const formData = new FormData(form.current);
            const data = {
                title: formData.get("title"),
                amount: formData.get("amount"),
            }
            const newHistory = [...context.history, data]
    
            const stringifiedData = JSON.stringify(newHistory);
            localStorage.setItem("transaction-history", stringifiedData)
    
            context.setHistory(newHistory)
        }else{
            //TODO: add styling for when the button is clicked but no amount is given
        }
    }

    return (
        <form ref={form} className="flex flex-col w-[50%]">
            <label className="font-light">Add transaction</label>
            <hr />
            <div className="flex flex-col">
                <label className="font-bold">Transaction name</label>
                <input 
                    type="text"
                    id="title"
                    name="title"
                    className="p-[6px] mb-[20px] border border-black rounded"
                    placeholder='Ex: Groceries'
                    value={newTransactionName}
                    onChange={onChangeName} ></input>
            </div>
            <div className="flex flex-col">
                <label className="font-bold">Amount (+ income | - expense)</label> 
                <input
                    type="number"
                    id="amount"
                    name="amount"
                    className="p-[6px] mb-[20px] border border-black rounded"
                    placeholder="Ex: 1000"
                    value={newTransactionAmount}
                    onChange={onChangeAmount}>
                </input>
            </div>
            <button onClick={(event) => createNewTransaction(event, newTransactionName, newTransactionAmount)}>submit</button>
        </form>
    )
}

export default AddTransaction