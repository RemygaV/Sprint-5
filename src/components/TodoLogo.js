import React from 'react';
import pict from "../todo-img.jpg"

function TodoLogo() {
    return (
        <div className='main'>
            <img src={pict} alt="todo img"></img>         
        </div>
    );
}
export default TodoLogo;