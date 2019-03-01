import React from 'react'
import selectExpensesTotal from '../selectors/expenses-total'
import SelectExpenses from '../selectors/expenses'
import { connect } from 'react-redux'
import numeral from 'numeral'

export const ExpensesSummary = ({expenseCount, expensesTotal}) => {
    const expenseWord = expenseCount === 1 ? 'expense' : 'expenses'
    const formatedExpensesTotal = numeral(expensesTotal / 100).format('$0,0.00')

    return (
        <div>
            <h1>Viewing {expenseCount} {expenseWord} totalling {formatedExpensesTotal}</h1>
        </div>
    )
}

const mapStateToProps = (state) => {
    const expensesToShow = SelectExpenses(state.expenses, state.filters)
    return {
        expensesTotal: selectExpensesTotal(expensesToShow),
        expenseCount: expensesToShow.length
    }
} 

export default connect (mapStateToProps)(ExpensesSummary)


