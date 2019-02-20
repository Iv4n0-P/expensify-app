import selectExpenses from '../../selectors/expenses'
import moment from 'moment'
import expenses from '../fictures/expenses'

test('by text value', () => {
    const filters = {
        text: 'e',
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined
    }
    const result = selectExpenses(expenses, filters);
    expect(result).toEqual([expenses[2], expenses[1]]);
});

test('by startDate', () => {
    const filters = {
        text: '',
        sortBy: 'date',
        startDate: moment(0),
        endDate: undefined
    }
    const result = selectExpenses(expenses, filters);
    expect(result).toEqual([expenses[2], expenses[0]]);
});

test('by startDate blank', () => {
    const filters = {
        text: 'e',
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined
    }
    const result = selectExpenses(expenses, filters);
    expect(result).toEqual([expenses[2], expenses[1]]);
});

test('by endDate', () => {
    const filters = {
        text: '',
        sortBy: 'date',
        startDate: undefined,
        endDate: moment(0)
    }
    const result = selectExpenses(expenses, filters);
    expect(result).toEqual([expenses[0], expenses[1]]);
});

test('by endDate blank', () => {
    const filters = {
        text: '',
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined
    }
    const result = selectExpenses(expenses, filters);
    expect(result).toEqual([expenses[2], expenses[0], expenses[1]]);
});

test('by date', () => {
    const filters = {
        text: '',
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined
    }
    const result = selectExpenses(expenses, filters);
    expect(result).toEqual([expenses[2], expenses[0], expenses[1]]);
});

test('by amount', () => {
    const filters = {
        text: '',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined
    }
    const result = selectExpenses(expenses, filters);
    expect(result).toEqual([expenses[1], expenses[2], expenses[0]]);
});