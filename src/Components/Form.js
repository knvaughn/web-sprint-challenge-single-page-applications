import React from 'react';
import styled from 'styled-components';

const StyledForm = styled.div`
    display: flex;
    flex-flow: column nowrap;
    width: 100%;
    max-width: 900px;

    h2 {
        color: #c10a26;
        margin: 50px 0 30px;
        padding: 0 20px;
        font-size: 2rem;
    }

    h3 {
        background: #ececec;
        padding: 30px 20px;
        margin: 15px 0;
    }

    input, select {
        margin: 20px 0;
        padding: 5px;
        font-family: 'Roboto', sans-serif;
        font-size: 1rem;
        display: inline-block;
    }

    input[type="text"], select {
        width: 40%;
        border: 2px solid #ececec;
        background: none;
        padding: 15px 20px;
    }

    input[type="radio"] {
        margin: 20px 10px 20px 0;
    }

    input[type="checkbox"] {
        margin: 20px 10px 20px 20px;
    }

    label {
        margin: 0 20px;
        display: inline-block;
    }

    .toppings label, .substitute label {
        margin: 0 20px 0 0;
    }

    .submit-order {
        display: flex;
        justify-content: space-between;
        padding: 20px 0 100px;
        border-top: 2px solid #efefef;
        margin-top: 20px;
    }

    button {
        border: none;
        color: #fff;
        background: #93a63b;
        padding: 0px 30px;
        border-radius: 10px;
        font-size: 1rem;
        font-weight: bold;
        letter-spacing: 1px;
        transition: all .2s linear;
        width: 100%;
        max-width: 400px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 60px;

        &:hover {
            cursor: pointer;
            background: #a6b94b;
        }

        &[disabled] {
            background: #ccc;
            cursor: initial;
        }
    }

    .form-error {
        color: #c31313;
        font-weight: bold;
        padding: 0 20px;
    }

    /* The switch - the box around the slider */
    .switch {
        position: relative;
        display: inline-block;
        width: 60px;
        height: 34px;
    }

    /* Hide default HTML checkbox */
    .switch input {
        opacity: 0;
        width: 0;
        height: 0;
    }

    /* The slider */
    .slider {
        position: absolute;
        cursor: pointer;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: #ccc;
        -webkit-transition: .4s;
        transition: .4s;
    }

    .slider:before {
        position: absolute;
        content: "";
        height: 26px;
        width: 26px;
        left: 4px;
        bottom: 4px;
        background-color: white;
        -webkit-transition: .4s;
        transition: .4s;
    }

    input:checked + .slider {
        background-color: #93a63b;
    }

    input:focus + .slider {
        box-shadow: 0 0 1px #2196F3;
    }

    input:checked + .slider:before {
        -webkit-transform: translateX(26px);
        -ms-transform: translateX(26px);
        transform: translateX(26px);
    }

    /* Rounded sliders */
    .slider.round {
        border-radius: 34px;
    }

    .slider.round:before {
        border-radius: 50%;
    }
`;

const Form = (props) => {
    const { submit, inputChange, formValues, formErrors, price, disabled } = props;

    const onSubmit = (event) => {
        event.preventDefault();
        submit();
    }

    const onChange = (event) => {
        const { name, value, type, checked } = event.target;
        const returnValue = type === 'checkbox' ? checked : value;
        inputChange(name, returnValue);
    }

    return (
        <StyledForm>
            <h2>Build Your Own Pizza</h2>
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <h3>Name</h3>
                    <input 
                        name="name"
                        type="text"
                        value={formValues.name}
                        onChange={onChange}
                        data-cy="name"
                    />
                    <div className="form-error">{formErrors.name}</div>
                </div>
                <div className="form-group">
                    <h3>Choice of Size</h3>
                    <select
                        name="size"
                        value={formValues.size}
                        onChange={onChange}
                        data-cy="size"
                    >
                        <option value="">Select</option>
                        <option value="small">Small</option>
                        <option value="medium">Medium</option>
                        <option value="large">Large</option>
                    </select>
                    <div className="form-error">{formErrors.size}</div>
                </div>
                <div className="form-group">
                    <h3>Choice of Sauce</h3>
                    <label>
                        <input 
                            name="sauce"
                            type="radio"
                            value="originalRed"
                            checked={formValues.sauce === 'originalRed'}
                            onChange={onChange}
                            data-cy="originalRed"
                        />
                        Original Red 
                    </label>
                    <label>
                        <input 
                            name="sauce"
                            type="radio"
                            value="garlicRanch"
                            checked={formValues.sauce === 'garlicRanch'}
                            onChange={onChange}
                            data-cy="garlicRanch"
                        />
                        Garlic Ranch
                    </label>
                    <label>
                        <input 
                            name="sauce"
                            type="radio"
                            value="bbq"
                            checked={formValues.sauce === 'bbq'}
                            onChange={onChange}
                            data-cy="bbq"
                        />
                        BBQ Sauce
                    </label>
                    <label>
                        <input 
                            name="sauce"
                            type="radio"
                            value="noSauce"
                            checked={formValues.sauce === 'noSauce'}
                            onChange={onChange}
                            data-cy="noSauce"
                        />
                        No sauce
                    </label>
                    <div className="form-error">{formErrors.sauce}</div>
                </div>
                <div className="form-group toppings">
                    <h3>Add Toppings</h3>
                    <label>
                        <input 
                            name="pepperoni"
                            type="checkbox"
                            checked={formValues.pepperoni}
                            onChange={onChange}
                            data-cy="pepperoni"
                        />
                        Pepperoni
                    </label>
                    <label>
                        <input 
                            name="sausage"
                            type="checkbox"
                            checked={formValues.sausage}
                            onChange={onChange}
                            data-cy="sausage"
                        />
                        Sausage
                    </label>
                    <label>
                        <input 
                            name="canadianBacon"
                            type="checkbox"
                            checked={formValues.canadianBacon}
                            onChange={onChange}
                            data-cy="canadianBacon"
                        />
                        Canadian Bacon
                    </label>
                    <label>
                        <input 
                            name="spicyItalianSausage"
                            type="checkbox"
                            checked={formValues.spicyItalianSausage}
                            onChange={onChange}
                            data-cy="spicyItalianSausage"
                        />
                        Spicy Italian Sausage
                    </label>
                    <label>
                        <input 
                            name="grilledChicken"
                            type="checkbox"
                            checked={formValues.grilledChicken}
                            onChange={onChange}
                            data-cy="grilledChicken"
                        />
                        Grilled Chicken
                    </label>
                    <label>
                        <input 
                            name="onions"
                            type="checkbox"
                            checked={formValues.onions}
                            onChange={onChange}
                            data-cy="onions"
                        />
                        Onions
                    </label>
                    <label>
                        <input 
                            name="greenPepper"
                            type="checkbox"
                            checked={formValues.greenPepper}
                            onChange={onChange}
                            data-cy="greenPepper"
                        />
                        Green Pepper
                    </label>
                    <label>
                        <input 
                            name="dicedTomatoes"
                            type="checkbox"
                            checked={formValues.dicedTomatoes}
                            onChange={onChange}
                            data-cy="dicedTomatoes"
                        />
                        Diced Tomatoes
                    </label>
                    <label>
                        <input 
                            name="blackOlives"
                            type="checkbox"
                            checked={formValues.blackOlives}
                            onChange={onChange}
                            data-cy="blackOlives"
                        />
                        Black Olives
                    </label>
                    <label>
                        <input 
                            name="roastedGarlic"
                            type="checkbox"
                            checked={formValues.roastedGarlic}
                            onChange={onChange}
                            data-cy="roastedGarlic"
                        />
                        Roasted Garlic
                    </label>
                    <label>
                        <input 
                            name="artichokeHearts"
                            type="checkbox"
                            checked={formValues.artichokeHearts}
                            onChange={onChange}
                            data-cy="artichokeHearts"
                        />
                        Artichoke Hearts
                    </label>
                    <label>
                        <input 
                            name="threeCheese"
                            type="checkbox"
                            checked={formValues.threeCheese}
                            onChange={onChange}
                            data-cy="threeCheese"
                        />
                        Three Cheese
                    </label>
                    <label>
                        <input 
                            name="pineapple"
                            type="checkbox"
                            checked={formValues.pineapple}
                            onChange={onChange}
                            data-cy="pineapple"
                        />
                        Pineapple
                    </label>
                    <label>
                        <input 
                            name="extraCheese"
                            type="checkbox"
                            checked={formValues.extraCheese}
                            onChange={onChange}
                            data-cy="extraCheese"
                        />
                        Extra Cheese
                    </label>
                </div>
                <div className="form-group substitute">
                    <h3>Choice of Substitute</h3>
                    <label className="switch">
                        <input 
                            name="glutenFreeCrust"
                            type="checkbox"
                            checked={formValues.glutenFreeCrust}
                            onChange={onChange}
                            data-cy="glutenFreeCrust"
                        />
                        <span className="slider round"></span>
                    </label>
                    Gluten Free Crust (+ $1.00)
                </div>
                <div className="form-group">
                    <h3>Special Instructions</h3>
                    <input 
                        name="instructions"
                        type="text"
                        placeholder="Anything else you'd like to add?"
                        value={formValues.instructions}
                        onChange={onChange}
                        data-cy="instructions"
                    />
                </div>
                <div className="form-group submit-order">
                    <div className="quantity">
                        <input 
                            name="quantity"
                            type="number"
                            min="1"
                            max="100"
                            value={formValues.quantity}
                            onChange={onChange}
                            data-cy="quantity"
                        />
                        <div className="form-error">{formErrors.quantity}</div>
                    </div>
                    <button disabled={disabled} data-cy="submit"><span>Add to Order</span> <span>${formValues.glutenFreeCrust ? formValues.quantity * (price + 1) : price * formValues.quantity}</span></button>
                </div>
            </form>
        </StyledForm>
    )
}

export default Form;