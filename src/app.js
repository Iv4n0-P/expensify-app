
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import AppRouter from './routers/AppRouter'
import configureStore from './store/configureStore'
import { startSetExpenses } from './actions/expenses'
import { setTextFilter } from './actions/filters'
import getVisibleExpenses from './selectors/expenses'
import 'normalize.css/normalize.css'
import './styles/styles.scss'
import 'react-dates/lib/css/_datepicker.css'
import './firebase/firebase'

const store = configureStore()

store.subscribe(() => {
    const state = store.getState()
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)
    console.log(visibleExpenses)
}) 

/* store.dispatch (addExpense({description: 'Water bill', amount: 4500}))
store.dispatch (addExpense({description: 'Gas bill', createdAt: 1000}))
store.dispatch (addExpense({description: 'Rent', amount: 109500})) */

//store.dispatch (removeExpense({id: expenseOne.expense.id}))
//store.dispatch (editExpense(expenseTwo.expense.id,{amount: 500}))
//store.dispatch(setStartDate(999))
//store.dispatch(setEndDate(1001))
//store.dispatch(setTextFilter('rent'))
//store.dispatch(sortByDate())
//store.dispatch(setStartDate())
//store.dispatch(sortByAmount())

 const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
) 

//--------------------


//---------------------

ReactDOM.render(<p>Loading...</p>, document.getElementById('app')); 

store.dispatch(startSetExpenses()).then(() => {
    ReactDOM.render(jsx, document.getElementById('app')); 
})



//--------------------------------------
//HIGHER ORDER COMPONENT (HOC)
// Higher Order Component (HOC) - A component (regular old react component) (HOC) that renders another compoenent (not just one, can be many more)

// Reuse code
// Render hijacking
// Prop manipulation
// Apstract data

/* import React from 'react'
import ReactDOM from 'react-dom'

const Info = (props) => (
    <div>
    <h1>Info</h1>
    <p>The info is: {props.info}</p>
    </div>  
)

const withAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAdmin && <p>This is private info. Please don't share!</p>}
            <WrappedComponent {...props}/>
        </div>
    ) 
}

const AdminInfo = withAdminWarning (Info)

const requireAuthentication = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAuthenticated ? (<WrappedComponent {...props}/>) : (<p>Please login to view the info</p>)}
        </div>
    ) 
}
const AuthInfo = requireAuthentication (Info)

//ReactDOM.render(<AdminInfo isAdmin={true} info="There are the details" />, document.getElementById('app'));
ReactDOM.render(<AuthInfo isAuthenticated={true} info="There are the details" />, document.getElementById('app'));
 */

//--------------------------------------



/* //ACTION GENERATORS

// ADD_EXPENSE
const addExpense = (
    {
    description = '', 
    note = '', 
    amount = 0, 
    createdAt = 0
} = {}) => ({
    type: 'ADD_EXPENSE',
    expense: {
        id: uuid(),
        description,
        note,
        amount, 
        createdAt
    }
})

// REMOVE_EXPENSE
const removeExpense = ({id} = {}) => ({
    type: 'REMOVE_EXPENSE',
    id
})

// EDIT_EXPENSE
const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
})

// SET_TEXT_FILTER
const setTextFilter = (text = '') => ({
    type: 'SET_TEXT_FILTER',
    text
})

// SORT_BY_DATE
const sortByDate = () => ({
    type: 'SORT_BY_DATE'
})

// SORT_BY_AMOUNT
const sortByAmount = () => ({
    type: 'SORT_BY_AMOUNT'
})

// SET_START_DATE
const setStartDate = (date) => ({
    type: 'SET_START_DATE',
    date
})

// SET_END_DATE
const setEndDate = (date) => ({
    type: 'SET_END_DATE',
    date
})

//REDUCERS
//Expenses Reducer
const expensesReducerDefaultState = []

const expensesReducer = (state = expensesReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_EXPENSE': 
       // return state.concat(action.expense) //concat a ne push tako da ne mjenja originalni array nego vraća novi, da ostane pure
        return [...state, action.expense] //isto kao gore ali sa spread operatorom
        case 'REMOVE_EXPENSE': 
        return state.filter((expense) => expense.id !== action.id)
        case 'EDIT_EXPENSE': 
        return state.map ((expense) => {
            if (expense.id === action.id) {
                return {...expense,
                ...action.updates}
            } else {return expense} 
        }) 
        default: return state
    }
}

//Filters reducer
const filtersReducerDefaultState = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
}

const filtersReducer = (state = filtersReducerDefaultState, action) => {
    switch (action.type) {
        case 'SET_TEXT_FILTER': 
        return {...state, text: action.text}
        case 'SORT_BY_DATE': 
        return {...state, sortBy: 'date'}
        case 'SORT_BY_AMOUNT': 
        return {...state, sortBy: 'amount'}
        case 'SET_START_DATE': 
        return {...state, startDate: action.date}
        case 'SET_END_DATE': 
        return {...state, endDate: action.date}
        default: return state
    }
}


//GET VISIBLE EXPENSES
const getVisibleExpenses = (expenses, {text, sortBy, startDate, endDate}) => {
    return expenses.filter((expense)=> {
        const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate
        const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());
        return startDateMatch & endDateMatch & textMatch
    }).sort((a,b) => {
        if (sortBy === 'date') {
            return a.createdAt < b.createdAt ? 1 : -1
        } else if (sortBy === 'amount') {
            return a.amount < b.amount ? 1 : -1
        } 
    })
}

//STORE
//Store creation
const store = createStore(
    combineReducers({
        expenses: expensesReducer,
        filters: filtersReducer
    })) */

/* store.subscribe(() => {
    const state = store.getState()
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)
    console.log(visibleExpenses)
})

const expenseOne = store.dispatch (addExpense({description: 'Rent', amount: 900, createdAt: -2000}))
const expenseTwo = store.dispatch (addExpense({description: 'Coffe', amount: 800, createdAt: -1000}))
 */
/* store.dispatch (removeExpense({id: expenseOne.expense.id}))
store.dispatch (editExpense(expenseTwo.expense.id,{amount: 500})) */

/* store.dispatch(setStartDate(999))
store.dispatch(setEndDate(1001))
store.dispatch(setTextFilter('rent')) */

/*store.dispatch(setTextFilter(''))

store.dispatch(sortByDate())



store.dispatch(setStartDate())

 */

/* store.dispatch(sortByAmount()) */