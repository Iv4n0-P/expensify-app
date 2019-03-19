import { setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate } from '../../actions/filters.js'
import moment from 'moment'

test('setStartDate', () => {
    const result = setStartDate(moment(0));
    expect(result).toEqual({
        type: 'SET_START_DATE',
        date: moment(0)
    });
  });

test('setEndDate', () => {
    const result = setEndDate(moment(0));
    expect(result).toEqual({
        type: 'SET_END_DATE',
        date: moment(0)
    });
});

test('sortByAmount', () => {
    expect(sortByAmount()).toEqual({
        type: 'SORT_BY_AMOUNT'
    });
});

test('sortByDate', () => {
    expect(sortByDate()).toEqual({
        type: 'SORT_BY_DATE'
    });
});

test('setTextFilter1', () => {
    const result = setTextFilter('test');
    expect(result).toEqual({
        type: 'SET_TEXT_FILTER',
        text: 'test'
    });
});

test('setTextFilter2', () => {
    const result = setTextFilter();
    expect(result).toEqual({
        type: 'SET_TEXT_FILTER',
        text: ''
    });
});