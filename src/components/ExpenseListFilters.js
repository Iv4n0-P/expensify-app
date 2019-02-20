import React from 'react'
import { connect } from 'react-redux'
import { setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate } from '../actions/filters'
import {DateRangePicker} from 'react-dates'

export class ExpenseListFilters extends React.Component {

    state = {
        calendarFocused: null
    }

   onDatesChange = ({startDate, endDate}) => {
        this.props.setStartDate(startDate)
        this.props.setEndDate(endDate)
    }

    onFocusChange = (calendarFocused) => {
        this.setState(() => ({calendarFocused}))
    }

    onTextChange = (e) => {
        this.props.setTextFilter(e.target.value)
    }

    onSortChange = (e) => {
        e.target.value === 'date' ? this.props.sortByDate(e.target.value) : this.props.sortByAmount(e.target.value)
    }
    

    render() {
        return (<div>
        <input
                type="text"
                value={this.props.filters.text}
                onChange={this.onTextChange}
            /> 
            <select
                value={this.props.filters.sortBy}
                onChange={this.onSortChange}
            >
                <option value="date">Date</option>
                <option value="amount">Amount</option>
            </select>
            <DateRangePicker
                startDate={this.props.filters.startDate}
                startDateId="test"
                endDate={this.props.filters.endDate}
                endDateId="test"
                onDatesChange={this.onDatesChange} 
                focusedInput={this.state.calendarFocused} 
                onFocusChange={this.onFocusChange} 
                numberOfMonths={1}
                isOutsideRange={() => false}
                showClearDates={true}
            />
        </div>)

    }
}

const mapStateToProps = (state) => ({
        filters: state.filters
})

const mapDispatchToProps = (dispatch) => ({
    setStartDate: (startDate) => dispatch(setStartDate(startDate)),
    setEndDate: (endDate) => dispatch(setEndDate(endDate)),
    setTextFilter: (text) => dispatch(setTextFilter(text)),
    sortByDate: (date) => dispatch(sortByDate(date)),
    sortByAmount: (date) => dispatch(sortByAmount(date)),
  });

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseListFilters) 

