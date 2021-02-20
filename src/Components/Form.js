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
                <div className="form-group">
                    <h3>Name</h3>
                    <input 
                        name="name"
                        type="text"
                    />
                </div>
                <div className="form-group">
                    <h3>Choice of Size</h3>
                    <select>
                        <option value="small">Small</option>
                        <option value="medium">Medium</option>
                        <option value="large">Large</option>
                    </select>
                </div>
                <div className="form-group">
                    <h3>Add Toppings</h3>
                    <label>
                        Pepperoni
                        <input 
                            name="pepperoni"
                            type="checkbox"
                        />
                    </label>
                    <label>
                        Sausage
                        <input 
                            name="sausage"
                            type="checkbox"
                        />
                    </label>
                    <label>
                        Canadian Bacon
                        <input 
                            name="canadianBacon"
                            type="checkbox"
                        />
                    </label>
                    <label>
                        Spicy Italian Sausage
                        <input 
                            name="spicyItalianSausage"
                            type="checkbox"
                        />
                    </label>
                    <label>
                        Grilled Chicken
                        <input 
                            name="grilledChicken"
                            type="checkbox"
                        />
                    </label>
                    <label>
                        Onions
                        <input 
                            name="onions"
                            type="checkbox"
                        />
                    </label>
                    <label>
                        Green Pepper
                        <input 
                            name="greenPepper"
                            type="checkbox"
                        />
                    </label>
                    <label>
                        Diced Tomatoes
                        <input 
                            name="dicedTomatoes"
                            type="checkbox"
                        />
                    </label>
                    <label>
                        Black Olives
                        <input 
                            name="blackOlives"
                            type="checkbox"
                        />
                    </label>
                    <label>
                        Roasted Garlic
                        <input 
                            name="roastedGarlic"
                            type="checkbox"
                        />
                    </label>
                    <label>
                        Artichoke Hearts
                        <input 
                            name="artichokeHearts"
                            type="checkbox"
                        />
                    </label>
                    <label>
                        Three Cheese
                        <input 
                            name="threeCheese"
                            type="checkbox"
                        />
                    </label>
                    <label>
                        Pineapple
                        <input 
                            name="pineapple"
                            type="checkbox"
                        />
                    </label>
                    <label>
                        Extra Cheese
                        <input 
                            name="extraCheese"
                            type="checkbox"
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
                        />
                    </label>
                </div>
                <div className="form-group">
                    <h3>Special Instructions</h3>
                    <input 
                        name="instructions"
                        type="text"
                        placeholder="Anything else you'd like to add?"
                    />
                </div>
                <div className="form-group">
                    <input 
                        name="quantity"
                        type="number"
                        min="1"
                        max="100"
                    />
                    <button>Add to Order $17.99</button>
                </div>
            </form>
        </div>
    )
}

export default Form;