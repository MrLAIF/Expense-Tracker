import { ExpenseTrackerContext } from "../../Context"
import { useContext } from "react"
import TransactionCard from "../TransactionCard";

const HistoryTransactions = () => {
    const context = useContext(ExpenseTrackerContext)
    // console.log(context.history)

    const deleteTransaction = (index) => {
      const newList=[...context.history];
      // console.log(index)
      newList.splice(index, 1);
      context.setHistory(newList)
      localStorage.setItem("transaction-history", JSON.stringify(newList))
  }

    return (
        <div className="w-[40%] flex flex-col justify-center items-center right-side">
          <h3>History</h3>
            {context.history?.map((item, index) => (
              <TransactionCard key={index} title={item.title} amount={item.amount} onDelete={()=>deleteTransaction(index)}/>
            ))}
        </div>
    )
}

export default HistoryTransactions;