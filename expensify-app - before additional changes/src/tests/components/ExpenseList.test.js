import React from 'react'
import {shallow}from 'enzyme'
import {ExpenseList} from'../../components/ExpensesList'
import expenses from '../fictures/expenses'

test ('should render ExpenseList with expenses', () => {
    const wrapper = shallow(<ExpenseList expenses={expenses}/>)
    //expect(wrapper.find('h1').text()).toBe('Expensify')
    expect(wrapper).toMatchSnapshot()
 })

 test ('should render ExpenseList with empty message', () => {
    const wrapper = shallow(<ExpenseList expenses={[]}/>)
    //expect(wrapper.find('h1').text()).toBe('Expensify')
    expect(wrapper).toMatchSnapshot()
 })