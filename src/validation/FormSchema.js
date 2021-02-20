import * as Yup from 'yup';

const FormSchema = Yup.object().shape({
    name: Yup.string(),
    size: Yup.string(),
    sauce: Yup.string(),
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
    quantity: Yup.number().positive().integer()
});

export default FormSchema;