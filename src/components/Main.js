import '../App.css';
import Form from "./Form";
import React, { useState, useEffect } from 'react';
import TodosList from './TodosList';

function Main() {
    const [input, setInput] = useState('');
    const [todos, setTodos] = useState([]);
    const [editTodo, setEditTodo] = useState(null);

    return (
        <div className="main">
            <div className='app-wrapper'>
                <div>
                    <h1> Todo List </h1>
                </div>

                <div>
                    <Form
                        input={input}
                        setInput={setInput}
                        todos={todos}
                        setTodos={setTodos}
                        editTodo={editTodo}
                        setEditTodo={setEditTodo}
                    />
                </div>

                <div>
                    <TodosList
                        todos={todos}
                        setTodos={setTodos}
                        setEditTodo={setEditTodo}
                    />
                </div>

            </div>

        </div>

    );
}
export default Main;