import React from 'react';

function TodosList({ todos, setTodos }) {
    return (
        <div>
            {todos.map((todo) => (
                <li className="list-item" key={todo.id}>
                    <input
                        type="text"
                        value={todo.title}
                        className="list"
                        onChange={(event) => event.preventDefault()} />
                    <div>
                        <button className='button-complete task button'>Done</button>
                        <button className='button-edit task button'>Edit</button>
                        <button className='button-delete task button'>Delete</button>
                    </div>

                </li>
            ))}
        </div>
    );
}

export default TodosList;