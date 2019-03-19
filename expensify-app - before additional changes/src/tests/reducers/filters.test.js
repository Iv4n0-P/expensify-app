import filtersReducer from '../../reducers/filters'
import moment from 'moment'

test('Should set default filter values', () => {
    const result = filtersReducer(undefined,{ type: '@@INIT'});
    expect(result).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    });
});

test('Sort by amount', () => {
    const result = filtersReducer(undefined, {type: 'SORT_BY_AMOUNT'});
    expect(result.sortBy).toBe('amount')
});

test('Sort by date', () => {
    const currentState = {
        text: '',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined
    }
    const result = filtersReducer(currentState, {type: 'SORT_BY_DATE'});
    expect(result.sortBy).toBe('date')
});

test('should set text filter', () => {
    const text = 'This is my filter';
    const action = {
      type: 'SET_TEXT_FILTER',
      text
    };
    const state = filtersReducer(undefined, action);
    expect(state.text).toBe(text);
  });

test('Set start date', () => {
    const startDate = moment()
    const action = {type: 'SET_START_DATE', startDate}
    const result = filtersReducer(undefined, action);
    expect(result.startDate).toEqual(startDate)
});

 test('Set end date', () => {
    const endDate = moment()
    const action = {type: 'SET_END_DATE', endDate}
    const result = filtersReducer(undefined, action);
    expect(result.endDate).toEqual(endDate)
}); 

