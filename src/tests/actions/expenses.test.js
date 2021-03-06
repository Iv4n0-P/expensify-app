import { startAddExpense, addExpense, removeExpense, editExpense, setExpenses, startSetExpenses, startRemoveExpense, startEditExpense } from '../../actions/expenses.js'
import expenses from '../fictures/expenses'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import database from '../../firebase/firebase'

const uid = 'thisismytestuid'
const defaultAuthState = { auth: { uid } }


beforeEach((done) => {
    const expensesData = {}
    expenses.forEach(({ id, description, note, amount, createdAt }) => {
        expensesData[id] = { description, note, amount, createdAt}
    })
    database.ref(`users/${uid}/expenses`).set(expensesData).then(() => done())
})

test('removeExpense', () => {
    const result = removeExpense({id: '123abc'});
    expect(result).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123abc'
    });
  });

test('should remove expense from firebase', (done) => {
    const store = createMockStore(defaultAuthState)
    const id = expenses[1].id
    store.dispatch(startRemoveExpense({ id })).then(() => {
        const actions = store.getActions()
        expect(actions[0]).toEqual({
            type: 'REMOVE_EXPENSE',
            id
        })
        return database.ref(`users/${uid}/expenses/${id}`).once('value')
    }).then((snapshot) => {
        expect(snapshot.val()).toBeFalsy()
        done()
    })
})

test('should edit expense in firebase', (done) => {
    const store = createMockStore(defaultAuthState)
    const updates = { amount: 21045 }
    const id = expenses[0].id
    store.dispatch(startEditExpense ( id, updates )).then(() => {
        const actions = store.getActions()
        expect(actions[0]).toEqual({
            type: 'EDIT_EXPENSE',
            id,
            updates
        })
        return database.ref(`users/${uid}/expenses/${id}`).once('value')
    }).then((snapshot) => {
        expect(snapshot.val().amount).toBe(updates.amount)
        done()
    })
})


test('editExpense', () => {
    const result = editExpense('123abc',{note: 'New note value'});
    expect(result).toEqual({
        type: 'EDIT_EXPENSE',
        id: '123abc',
        updates: {note: 'New note value'}
    });
});

test('addExpense1', () => {
    const result = addExpense(expenses[2]);
    expect(result).toEqual({
        type: 'ADD_EXPENSE',
        expense: expenses[2]
    });
  });

//ASYNC TESTOVI
//ovo je test za asinkronizirani kod
//sad će mockat store
//https://github.com/dmitry-zaets/redux-mock-store
//yarn add redux-mock-store
//import configureMockStore from 'redux-mock-store'
//import thunk from 'redux-thunk'

//ovo nije kreacija novog stora nego konfiguracija da svi testovi kreiraju isti mock store
const createMockStore = configureMockStore([thunk])
//ovo (done) govori JETS-u da se radi o asinkroniziranom testu
test('should add expense to database and store', (done) => {
const store = createMockStore(defaultAuthState) // ovo kreiraja mock store
const expenseData = {
    description: 'mouse',
    amount: 3000,
    note: 'This one is beter',
    createdAt: 1000
}
store.dispatch(startAddExpense(expenseData)).then(() => {
    const actions = store.getActions()
    expect(actions[0]).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            id: expect.any(String),
            ...expenseData
        }
    })

    return database.ref(`users/${uid}/expenses/${actions[0].expense.id}`).once('value')
    //ovo vraća promise
}).then((snapshot)=> {
    //i ovaj then je success case za taj promise
    expect(snapshot.val()).toEqual(expenseData)
    done()
})
})

test('should add expense with defaults to database and store', (done) => {
    const store = createMockStore(defaultAuthState) // ovo kreiraja mock store
    const expenseDefaults = {
            description: '', 
            note: '', 
            amount: 0, 
            createdAt: 0
    }
    store.dispatch(startAddExpense(defaultAuthState)).then(() => {
        const actions = store.getActions()
        expect(actions[0]).toEqual({
            type: 'ADD_EXPENSE',
            expense: {
                id: expect.any(String),
                ...expenseDefaults
            }
        })
    
        return database.ref(`users/${uid}/expenses/${actions[0].expense.id}`).once('value')
        //ovo vraća promise
    }).then((snapshot)=> {
        //i ovaj then je success case za taj promise
        expect(snapshot.val()).toEqual(expenseDefaults)
        done()
    })
})


/* test('addExpense2', () => {
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
  }); */

  test ('should set up expense action object with data', () => {
    const action = setExpenses(expenses)
    expect (action).toEqual({
        type: 'SET_EXPENSES',
        expenses
    })
  })

  test ('Should fetch the expenses from firebase', (done) => {
      const store = createMockStore(defaultAuthState)
      store.dispatch(startSetExpenses()).then(() => {
      const actions = store.getActions()
      expect(actions[0]).toEqual({
          type: 'SET_EXPENSES',
          expenses
      })
      done()
    })
  })
