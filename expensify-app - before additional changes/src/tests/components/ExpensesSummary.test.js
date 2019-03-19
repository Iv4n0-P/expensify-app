import React from 'react'
import { ExpensesSummary } from '../../components/ExpensesSummary'
import { shallow } from 'enzyme'

test('should render ExpensesSummary with one expense', () => {
    const wrapper = shallow(<ExpensesSummary expenseCount={1} expensesTotal={10000}/>)
    expect(wrapper).toMatchSnapshot();
  });

test('should render ExpensesSummary with multiple expenses', () => {
    const wrapper = shallow(<ExpensesSummary expenseCount={2} expensesTotal={10000}/>)
    expect(wrapper).toMatchSnapshot();
});