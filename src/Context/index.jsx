import { createContext, useEffect, useState } from "react";

export const ExpenseTrackerContext = createContext();

// export const initLocalStorage = () => {
//     const transactionHistoryLS = localStorage.getItem("transaction-history");
//     let parsedTransactionHistory;

//     if(!transactionHistoryLS){
//         localStorage.setItem("transaction-history", JSON.stringify({}));
//         parsedTransactionHistory = {};
//     } else {
//         parsedTransactionHistory = JSON.parse(transactionHistoryLS);
//     }
// }

export const ExpenseTrackerProvider = ({children}) => {
    const [history, setHistory] = useState([]);
    
    const [balance, setBalance] = useState(0);

    let totalBalance = 0;
    history.forEach(transaction => {
        totalBalance += parseInt(transaction.amount);
    })

    let totalExpenses = 0;
    history.forEach(transaction => {
        if(transaction.amount < 0)
        totalExpenses += parseInt(transaction.amount);
    })
    
    let totalIncome = 0;
    history.forEach(transaction => {
        if(transaction.amount > 0)
        totalIncome += parseInt(transaction.amount);
    })

    

    useEffect(()=>{
        const transactionHistoryLS = localStorage.getItem("transaction-history");
        let parsedTransactionHistory;

        if(!transactionHistoryLS){
            localStorage.setItem("transaction-history", JSON.stringify({}));
            parsedTransactionHistory = {};
        } else {
            parsedTransactionHistory = JSON.parse(transactionHistoryLS);
            setHistory(parsedTransactionHistory)
        }
    }, []);

    return(
        <ExpenseTrackerContext.Provider value={{
            history,
            setHistory,
            balance,
            setBalance,
            totalBalance,
            totalExpenses,
            totalIncome,
        }}>
            {children}
        </ExpenseTrackerContext.Provider>
    )
}

// const defaultHistory = [
//     {title: "Meguberi", amount: -300},
//     {title: "Megurumi", amount: -300},
//     {title: "payment", amount: 700},
//     {title: "lottery", amount: 1000},
//   ];
//   localStorage.setItem('transaction-history', JSON.stringify(defaultHistory));