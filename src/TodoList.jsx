import React, { useState } from "react"
import {v4 as uuid } from "uuid";
import ListItem from "./ListItem";
import NewTodoForm from "./NewTodoForm"

const TodoList = () => {
    const INITIAL_STATE = [];
    const [ListItems, setListItem] = useState(INITIAL_STATE);
    const addListItem = (newListItem) => {
        setListItem(ListItems => [...ListItems, {...newListItem, id: uuid() }]);
    }
    const removeItem = (itemID) => {
        setListItem(ListItems.filter(item => item.id !== itemID));
    }
    return (
        <div className="TodoList">
            <NewTodoForm addListItem={addListItem}/>
            <div>
                {ListItems.map(({id, task}) => <ListItem 
                    id={id} 
                    task={task}
                    removeItem={removeItem}
                />)}
            </div>
        </div>
    )
}

export default TodoList;