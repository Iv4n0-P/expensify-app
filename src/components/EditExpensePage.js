import React from 'react'
import { connect } from 'react-redux'
import ExpenseForm from './ExpenseForm'
import { startEditExpense, startRemoveExpense } from '../actions/expenses'
import { OptionModal } from './Modal'

export class EditExpensePage extends React.Component {

  state = {
    selectedOption: undefined
  }

  handleOpenModal = () => {
    this.setState(() => ({ selectedOption: true }));
  }

  handleCloseModal = () => {
    this.setState(() => ({ selectedOption: undefined }));
  }

  onSubmit = (expense) => {
    this.props.startEditExpense(this.props.expense.id, expense)
    this.props.history.push('/')
  };

  onRemove = () => {
    this.props.startRemoveExpense({ id: this.props.expense.id });
    this.props.history.push('/');
  };

  render() {
    return (
      <div>
        <div className="page-header">
          <div className="content-container">
            <h1 className="page-header__title">Edit Expense</h1>
          </div>
        </div>
        <div className="content-container">
          <ExpenseForm
            expense={this.props.expense}
            onSubmit={this.onSubmit}
          />
          <button className="button-blue button-blue--secondary" onClick={this.handleOpenModal}>Remove Expense</button>

          <OptionModal
          showModal={this.state.selectedOption}
          onRemove={this.onRemove}
          handleCloseModal={this.handleCloseModal}
          />
        </div>
      </div>
    );
  }
};

const mapStateToProps = (state, props) => ({
  expense: state.expenses.find((expense) => expense.id === props.match.params.id)
})

const mapDispatchToProps = (dispatch, props) => ({
  startEditExpense: (id, expense) => dispatch(startEditExpense(id, expense)),
  startRemoveExpense: (data) => dispatch(startRemoveExpense(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage)




