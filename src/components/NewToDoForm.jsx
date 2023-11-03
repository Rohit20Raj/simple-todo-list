import { useState } from "react";

export function NewToDoForm({ onSubmit }) {
    const [newItem, setNewItem] = useState("")

    function handleSubmit(e) {
        e.preventDefault()

        if (newItem === "") return

        onSubmit(newItem)

        setNewItem("")
    }
    return (
        <form onSubmit={handleSubmit} className="container my-3">
            <div className="mb-3">
                <label htmlFor="addNote" className="form-label">Add a Note</label>
                <input className="form-control"
                    value={newItem}
                    onChange={e => setNewItem(e.target.value)}
                    type="text"
                    id="addNote" />
            </div>

            <div className="d-grid gap-2">
                <button className="btn btn-success"
                    type="button"
                    onClick={handleSubmit}><strong>+</strong>Add</button>
            </div>
        </form>
    )
}