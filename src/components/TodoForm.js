import React, { useState, useEffect, useRef } from 'react'

function TodoForm(props) {

    const [input, setInput] = useState(props.edit ? props.edit.value : '');

    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current.focus();
    });

    const handleChange = e => {
        setInput(e.target.value);
    };

    const handleSubmit = e => {
        e.preventDefault();

        props.onSubmit({
            id: Math.floor(Math.random() * 10000),
            text: input
        });
        setInput('');
    };

    return (
        <form onSubmit={handleSubmit} className='form-control'>
            {props.edit ? (
                <>
                    <input
                        placeholder='Updare your item'
                        value={input}
                        onChange={handleChange}
                        name='text'
                        ref={inputRef}
                        className='form-control mt-2'
                    />
                    <button onClick={handleSubmit} className='mt-3 mb-2 btn btn-warning'>
                        Update
                    </button>
                </>
            ) : (
                <>
                    <input
                        placeholder='Add a todo'
                        value={input}
                        onChange={handleChange}
                        name='text'
                        ref={inputRef}
                        className='form-control mt-2'
                    />
                    <button onClick={handleSubmit} className='mt-3 mb-2 btn btn-primary'>
                        Add todo
                    </button>
                </>
            )}
        </form>
    );
}

export default TodoForm