import * as Yup from 'yup';

const FormSchema = Yup.object().shape({
    name: Yup.string().min(2, 'Name must be at least 2 characters').required('Name is required'),
    size: Yup.string().oneOf(['small', 'medium', 'large'], 'Size is required'),
    sauce: Yup.string().required('Please choose a sauce, or select No Sauce'),
    pepperoni: Yup.boolean(),
    sausage: Yup.boolean(),
    canadianBacon: Yup.boolean(),
    spicyItalianSausage: Yup.boolean(),
    grilledChicken: Yup.boolean(),
    onions: Yup.boolean(),
    greenPepper: Yup.boolean(),
    dicedTomatoes: Yup.boolean(),
    blackOlives: Yup.boolean(), 
    roastedGarlic: Yup.boolean(),
    artichokeHearts: Yup.boolean(),
    threeCheese: Yup.boolean(),
    pineapple: Yup.boolean(),
    extraCheese: Yup.boolean(),
    glutenFreeCrust: Yup.boolean(),
    instructions: Yup.string(),
    quantity: Yup.number().positive().integer().required('Quantity is required')
});

export default FormSchema;