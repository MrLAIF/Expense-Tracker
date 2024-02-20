import { XMarkIcon } from '@heroicons/react/24/solid'
import { useContext } from 'react';
import { ExpenseTrackerContext } from '../../Context';

const TransactionCard = (props) => {
    const context = useContext(ExpenseTrackerContext)

    

    return(
        <div className={`relative flex justify-between items-center p-[2px_2px_2px_10px] rounded-lg w-[70%] m-[6px_0] ${props.amount>0 ? "border border-[#00ff11] bg-[#d8ffdb]":"border border-[#ff0011] bg-[#ff878f]"}`}>
            <p className="tran-name">{props.title}</p>
            <div className='flex justify-center items-center'>
                <p className="tran-amount">${props.amount}</p>
                <div className='cursor-pointer' onClick={props.onDelete}>
                    <XMarkIcon className="w-8 text-[#ff0000]"></XMarkIcon>
                </div>
            </div>

        </div>
    )
}

export default TransactionCard;