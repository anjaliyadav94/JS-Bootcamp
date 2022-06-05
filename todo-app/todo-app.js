const todos = getSavedTodos()

const filter = {
    searchText: '',
    hideCompleted: false
}

renderTodos(todos, filter)

document.querySelector('#search-text').addEventListener('input', function(e){
    filter.searchText = e.target.value
    renderTodos(todos, filter)
})

document.querySelector('#add-todo').addEventListener('submit', function(e){
    e.preventDefault()
    todos.push({
        id: uuidv4(),
        text: e.target.elements.listName.value,
        completed: false
    })
    saveTodos(todos)
    renderTodos(todos, filter)
    e.target.elements.listName.value = ''
})

document.querySelector('#hide').addEventListener('change', function(e){
    filter.hideCompleted = e.target.checked
    renderTodos(todos, filter)
})

