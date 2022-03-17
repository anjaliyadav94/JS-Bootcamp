let myaccount = {
    name: 'Anjali Yadav',
    expense: 0,
    income: 0
}

let addIncome = function (account, incomeAmount) {
    account.income = account.income + incomeAmount
}

let addExpense = function (account, expenseAmount) {
    account.expense = account.expense + expenseAmount
}

let getAccountSummary = function (account) {
    let balance = account.income - account.expense
    return `Account for ${account.name} has $${balance}. $${account.income} in income. $${account.expense} in expense`
}

let resetAccount = function (account) {
    account.income = 0
    account.expense = 0
}    

addIncome(myaccount, 1000)
addExpense(myaccount, 2.50)
addExpense(myaccount, 60)
console.log(getAccountSummary(myaccount))
resetAccount(myaccount)
console.log(getAccountSummary(myaccount))