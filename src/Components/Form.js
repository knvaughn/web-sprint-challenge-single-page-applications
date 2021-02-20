import React from 'react';

const Form = (props) => {
    const { submit } = props;

    const onSubmit = (event) => {
        event.preventDefault();
        submit();
    }

    return (
        <div>
            <h2>Build Your Own Pizza</h2>
            <form onSubmit={onSubmit}>
                <label>
                    Name
                    <input 
                        name="name"
                        type="text"
                    />
                </label>
            </form>
        </div>
    )
}

export default Form;