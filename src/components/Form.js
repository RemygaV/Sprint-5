import React from 'react';


function Form() {
    
    return (
        <form>
            <input
                type="text"
                placeholder='Enter a Todo...'
                className="task-input"/>
            <button className='button-add' type="submit">Add</button>
        </form>
    );
}

export default Form;