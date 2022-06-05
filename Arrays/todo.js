const todos = [{
    text: 'Workout',
    completed: true
}, {
    text: 'Breakfast',
    completed: true
}, {
    text: 'Snacks',
    completed: true
}, {
    text: 'Lunch',
    completed: false
}, {
    text: 'Dinner',
    completed: false
}]

// const deleteTodo = function (todos, todoText){
//     const index = todos.findIndex (function (todo){
//         return todo.text.toLowerCase() === todoText.toLowerCase()
//     })
//     if (index > -1){
//         todos.splice(index, 1)
//     }
// }

const getThingsToDo = function (todos){  
    return todos.filter(function(todo){
        return !todo.completed
    })
}

const sortTodos = function (todos){
    todos.sort(function(a, b){
        if (!a.completed && b.completed){
            return -1
        } else if (a.completed && !b.completed){
            return 1
        }else {
            return 0
        }
    })
}

sortTodos(todos)
console.log(todos)

//console.log(getThingsToDo(todos))

//deleteTodo(todos, 'snacks111')

//console.log(todos)


const quarterOf = function(month){

    if (month = 1 || month <=3){
      console.log('Quarter 1')
    }; if (month <= 6){
      console.log('Quarter 2')
    }; if (month <=9){
      console.log('Quarter 3')
    }; if (month <=12) {
      console.log('Quarter 4')
    }
  }
  let num = quarterOf(8)
console.log(num)
