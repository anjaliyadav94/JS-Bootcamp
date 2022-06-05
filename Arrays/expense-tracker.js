const account = {
    name: 'Anjali Yadav',
    expenses: [],
    income: [],
    addExpenses: function(description, amount){     
        this.expenses.push({
            description:description,
            amount: amount
        })
    },
    addIncome: function(description, amount){
        this.income.push({
            description: description,
            amount: amount
        })
    },
    getAccountSummary: function(){
        let totalExpense = 0
        let totalIncome = 0
        let balance = 0

        this.expenses.forEach(function(expense){
            totalExpense = totalExpense + expense.amount
        })
        
        this.income.forEach(function(income){ ////there is foreach not function error here
            totalIncome = totalIncome + income.amount
        })
    
        balance = totalIncome - totalExpense
        return `${this.name} has a balance of $${balance}. $${totalIncome} in income. $${totalExpense} in expense.` 
    }   

}


account.addExpenses('Rent', 950)
account.addExpenses('Coffee', 2)
account.addIncome('Salary', 1000)
account.addIncome('Other', 500)
console.log(account.getAccountSummary())