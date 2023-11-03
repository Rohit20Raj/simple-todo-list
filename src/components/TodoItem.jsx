export function TodoItem({completed, id, title, toggleTodo, deleteTodo}) {
    return (
        <li className="list-group-item">
            <label className="form-check-label">
                <input className="form-check-input me-1"
                    type="checkbox"
                    checked={completed}
                    onChange={e => toggleTodo(id, e.target.checked)}
                    />
                {title}
            </label>
            <button className="btn btn-danger btn-sm float-end"
                type="button"
                onClick={() => deleteTodo(id)} 
                >
                Delete
            </button>
        </li>
    )
}