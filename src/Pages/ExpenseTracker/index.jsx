import { useContext } from 'react'
import AddTransaction from '../../Components/AddTransaction'
import HistoryTransactions from '../../Components/HistoryTransactions'
import { ExpenseTrackerContext } from '../../Context'

const ExpenseTracker = () => {
    const context = useContext(ExpenseTrackerContext)

    return (
        <div className='w-[90vw] flex justify-around items-center all-lol'>
            <div className="flex flex-col justify-center items-center left-side">
                <h3>Expenses</h3>
                    <div className='w-[40%] text-[20px]'>
                        <p className='mb-0 font-extralight'>Balance</p>
                        <p className='mt-0 font-bold'>${context.totalBalance}</p>
                    </div>
                    <div className="flex justify-around items-center border border-black rounded-lg w-[40%] h-[100px] gap-[10px] mb-[40px] bg-white">
                        <div className="text-center">
                            <p>Income</p>
                            <p className='text-[#00ff00]'>${context.totalIncome}</p>
                        </div>
                        <div className="text-center">
                            <p>Expenses</p>
                            <p className='text-[#ff0000]'>${context.totalExpenses}</p>
                        </div>
                    </div>
                <AddTransaction />
            </div>

            <HistoryTransactions />
        </div>
    )
}

export default ExpenseTracker