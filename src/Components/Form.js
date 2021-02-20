import React from 'react';

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
        <div>
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
                        Original Red 
                        <input 
                            name="sauce"
                            type="radio"
                            value="originalRed"
                            checked={formValues.sauce === 'originalRed'}
                            onChange={onChange}
                            data-cy="originalRed"
                        />
                    </label>
                    <label>
                        Garlic Ranch
                        <input 
                            name="sauce"
                            type="radio"
                            value="garlicRanch"
                            checked={formValues.sauce === 'garlicRanch'}
                            onChange={onChange}
                            data-cy="garlicRanch"
                        />
                    </label>
                    <label>
                        BBQ Sauce
                        <input 
                            name="sauce"
                            type="radio"
                            value="bbq"
                            checked={formValues.sauce === 'bbq'}
                            onChange={onChange}
                            data-cy="bbq"
                        />
                    </label>
                    <label>
                        No sauce
                        <input 
                            name="sauce"
                            type="radio"
                            value="noSauce"
                            checked={formValues.sauce === 'noSauce'}
                            onChange={onChange}
                            data-cy="noSauce"
                        />
                    </label>
                    <div className="form-error">{formErrors.sauce}</div>
                </div>
                <div className="form-group">
                    <h3>Add Toppings</h3>
                    <label>
                        Pepperoni
                        <input 
                            name="pepperoni"
                            type="checkbox"
                            checked={formValues.pepperoni}
                            onChange={onChange}
                            data-cy="pepperoni"
                        />
                    </label>
                    <label>
                        Sausage
                        <input 
                            name="sausage"
                            type="checkbox"
                            checked={formValues.sausage}
                            onChange={onChange}
                            data-cy="sausage"
                        />
                    </label>
                    <label>
                        Canadian Bacon
                        <input 
                            name="canadianBacon"
                            type="checkbox"
                            checked={formValues.canadianBacon}
                            onChange={onChange}
                            data-cy="canadianBacon"
                        />
                    </label>
                    <label>
                        Spicy Italian Sausage
                        <input 
                            name="spicyItalianSausage"
                            type="checkbox"
                            checked={formValues.spicyItalianSausage}
                            onChange={onChange}
                            data-cy="spicyItalianSausage"
                        />
                    </label>
                    <label>
                        Grilled Chicken
                        <input 
                            name="grilledChicken"
                            type="checkbox"
                            checked={formValues.grilledChicken}
                            onChange={onChange}
                            data-cy="grilledChicken"
                        />
                    </label>
                    <label>
                        Onions
                        <input 
                            name="onions"
                            type="checkbox"
                            checked={formValues.onions}
                            onChange={onChange}
                            data-cy="onions"
                        />
                    </label>
                    <label>
                        Green Pepper
                        <input 
                            name="greenPepper"
                            type="checkbox"
                            checked={formValues.greenPepper}
                            onChange={onChange}
                            data-cy="greenPepper"
                        />
                    </label>
                    <label>
                        Diced Tomatoes
                        <input 
                            name="dicedTomatoes"
                            type="checkbox"
                            checked={formValues.dicedTomatoes}
                            onChange={onChange}
                            data-cy="dicedTomatoes"
                        />
                    </label>
                    <label>
                        Black Olives
                        <input 
                            name="blackOlives"
                            type="checkbox"
                            checked={formValues.blackOlives}
                            onChange={onChange}
                            data-cy="blackOlives"
                        />
                    </label>
                    <label>
                        Roasted Garlic
                        <input 
                            name="roastedGarlic"
                            type="checkbox"
                            checked={formValues.roastedGarlic}
                            onChange={onChange}
                            data-cy="roastedGarlic"
                        />
                    </label>
                    <label>
                        Artichoke Hearts
                        <input 
                            name="artichokeHearts"
                            type="checkbox"
                            checked={formValues.artichokeHearts}
                            onChange={onChange}
                            data-cy="artichokeHearts"
                        />
                    </label>
                    <label>
                        Three Cheese
                        <input 
                            name="threeCheese"
                            type="checkbox"
                            checked={formValues.threeCheese}
                            onChange={onChange}
                            data-cy="threeCheese"
                        />
                    </label>
                    <label>
                        Pineapple
                        <input 
                            name="pineapple"
                            type="checkbox"
                            checked={formValues.pineapple}
                            onChange={onChange}
                            data-cy="pineapple"
                        />
                    </label>
                    <label>
                        Extra Cheese
                        <input 
                            name="extraCheese"
                            type="checkbox"
                            checked={formValues.extraCheese}
                            onChange={onChange}
                            data-cy="extraCheese"
                        />
                    </label>
                </div>
                <div className="form-group">
                    <h3>Choice of Substitute</h3>
                    <label>
                        Gluten Free Crust (+ $1.00)
                        <input 
                            name="glutenFreeCrust"
                            type="checkbox"
                            checked={formValues.glutenFreeCrust}
                            onChange={onChange}
                            data-cy="glutenFreeCrust"
                        />
                    </label>
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
                <div className="form-group">
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
                    <button disabled={disabled} data-cy="submit">Add to Order ${formValues.glutenFreeCrust ? formValues.quantity * (price + 1) : price * formValues.quantity}</button>
                </div>
            </form>
        </div>
    )
}

export default Form;