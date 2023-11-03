import { TodoItem } from "./TodoItem"

export function TodoList({ todos, toggleTodo, deleteTodo }) {
    return (
        <ul className="container list-group list-group-flush">
            {todos.length === 0 && "Add ToDos to see them here"}
            {todos.map(todo => {
                return (
                    <TodoItem
                        {...todo}
                        key={todo.id}
                        toggleTodo={toggleTodo}
                        deleteTodo={deleteTodo}
                    />
                )
            })}
        </ul>
    )
}