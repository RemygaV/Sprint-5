import '../App.css';
import Form from "./Form";
import React, { useState, useEffect } from 'react';

function Main() {
    const [input, setInput] = useState('');
    const [todos, setTodos] = useState();

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
                    />
                </div>

            </div>

        </div>

    );
}
export default Main;