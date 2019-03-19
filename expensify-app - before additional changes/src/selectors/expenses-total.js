//export default (expenses = [{amount: 0}]) => expenses.reduce((n, {amount}) => n+amount, 0)

//ili njegova metoda

/* export default (expenses) => {
    if (expenses.lenght === 0) {
        return 0
    } else {
        return expenses.map((expense) => expense.amount).reduce((sum, value) => sum+value, 0)
        }
    } */

    //ili

    export default (expenses) => {
        return expenses
        .map((expense) => expense.amount)
        .reduce((sum, value) => sum+value, 0)
        }