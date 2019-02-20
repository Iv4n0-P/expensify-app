import { addExpense, removeExpense, editExpense } from '../../actions/expenses.js'

test('removeExpense', () => {
    const result = removeExpense({id: '123abc'});
    expect(result).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123abc'
    });
  });

test('editExpense', () => {
    const result = editExpense('123abc',{note: 'New note value'});
    expect(result).toEqual({
        type: 'EDIT_EXPENSE',
        id: '123abc',
        updates: {note: 'New note value'}
    });
});

test('addExpense1', () => {
    const expenseData = {
        description: 'Rent',
        amount: 109500,
        createdAt: 1000,
        note: 'This was last months rent'
    }
    const result = addExpense(expenseData);
    expect(result).toEqual({
        type: 'ADD_EXPENSE',
        expense: {...expenseData,
        id: expect.any(String)}
    });
  });

test('addExpense2', () => {
    const result = addExpense();
    expect(result).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
        id: expect.any(String),
        description: '',
        amount: 0,
        createdAt: 0,
        note: ''
    }
    });
  });