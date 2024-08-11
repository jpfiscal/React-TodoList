import React, {useState} from "react"

const NewTodoForm = ({ addListItem }) => {
    const INITIAL_STATE = {
        task: ''
    }
    const [formData, setFormData] = useState(INITIAL_STATE);
    const handleChange = (e) =>{
        const {name, value} = e.target;
        setFormData(formData => ({
            ...formData,
            [name]: value
        }))
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        addListItem({...formData});
        setFormData(INITIAL_STATE);
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="task">Task</label>
            <input
                id="task"
                type="text"
                name="task"
                placeholder="Task"
                value={formData.task}
                onChange={handleChange}
            />
            <button>Add Item</button>
        </form>
    )
}

export default NewTodoForm;