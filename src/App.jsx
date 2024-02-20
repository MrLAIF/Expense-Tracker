import './App.css'
import { ExpenseTrackerProvider } from './Context'
import ExpenseTracker from './Pages/ExpenseTracker'

function App() {
  
  return (
    <ExpenseTrackerProvider>
      <ExpenseTracker />
    </ExpenseTrackerProvider>
  )
}

export default App
