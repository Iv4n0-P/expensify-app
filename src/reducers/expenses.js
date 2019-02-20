//Expenses Reducer
const expensesReducerDefaultState = []

export default (state = expensesReducerDefaultState, action) => {
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