import React from "react";
import './ListItem.css';

const ListItem = ({id, task, removeItem}) => {
    return(
        <div className="ListItem">
            <p>{task}</p>
            <button onClick={() => removeItem(id)}>X</button>
        </div>
    )
}

export default ListItem;