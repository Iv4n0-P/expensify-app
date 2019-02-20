import expensesReducer from '../../reducers/expenses'
import expenses from '../fictures/expenses'

test('Should set default values', () => {
    const result = expensesReducer(undefined,{ type: '@@INIT'});
    expect(result).toEqual([]);
});

test('Should add expense', () => {
    const expense = {
        id: '4',
        description: 'test',
        note: 'test',
        amount: 0,
        createdAt: '1'
    }
    const action = { type: 'ADD_EXPENSE', expense}
    const result = expensesReducer(expenses, action);
    expect(result).toEqual([...expenses, expense]);
});

test('Should remove expense by id', () => {
     const action = { type: 'REMOVE_EXPENSE', id: expenses[1].id}
     const result = expensesReducer(expenses, action);
     expect(result).toEqual([expenses[0], expenses[2]]);
});

test('Should not remove expense by id', () => {
    const action = { type: 'REMOVE_EXPENSE', id: '-1'}
    const result = expensesReducer(expenses, action);
    expect(result).toEqual(expenses);
});

test('Should edit expense', () => {
    const action = { type: 'EDIT_EXPENSE', id: expenses[0].id, updates: {description: 'test2'} }
    const result = expensesReducer(expenses, action);
    expect(result[0].description).toEqual('test2');
});

test('Should not edit expense if id is not found', () => {
    const action = { type: 'EDIT_EXPENSE', id: '-1', updates: {description: 'test2'} }
    const result = expensesReducer(expenses, action);
    expect(result).toEqual(expenses);
});