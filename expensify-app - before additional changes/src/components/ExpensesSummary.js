import React from 'react'
import selectExpensesTotal from '../selectors/expenses-total'
import SelectExpenses from '../selectors/expenses'
import { connect } from 'react-redux'
import numeral from 'numeral'
import { Link } from 'react-router-dom'

export const ExpensesSummary = ({ expenseCount, expensesTotal }) => {
    const expenseWord = expenseCount === 1 ? 'expense' : 'expenses'
    const formatedExpensesTotal = numeral(expensesTotal / 100).format('$0,0.00')

    return (
        <div className="page-header">
            <div className="content-container">
                <h1 className="page-header__title">Viewing <span>{expenseCount}</span> {expenseWord} totalling <span>{formatedExpensesTotal}</span></h1>
                <div className="page-header__actions">
                    <Link className="button-blue" to="/create">Add Expense</Link>
                </div>
             </div>
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

export default connect(mapStateToProps)(ExpensesSummary)


