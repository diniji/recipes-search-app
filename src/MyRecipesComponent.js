import Accordion from 'react-bootstrap/Accordion';
import apple from './icons8-red-apple-96.png';
import appleCalculator from './icons8-healthy-food-calories-calculator-96.png';


function MyRecipesComponent({label, image, calories, ingredients, cuisine, protein, fatTotal, fatSat, fatTrans, carbs, fiber, sugars, cholesterol, vitD, calcium, iron, potassium, servings, instructions}) {
    return(
        <div className="singleRecipeWrap">
            <div className="singleRecipe">
                <div className="container">
                    <h2 className="h2Style">{label}</h2>
                </div>
                <div className="container">
                    <img src={image} className="dishImg" alt="The dish" />
                </div>

                <div className="containerForP">
                    <p>{(calories/servings).toFixed()} calories/serving</p>
                </div>

                <div className="containerForP">
                    <p>{servings} servings</p>
                </div>

                <div className="containerForP">
                    <p>Cuisine: {cuisine}</p>
                </div>

                <div className="accordionPosition">
                    <Accordion>

                        <Accordion.Item eventKey="0">
                            <Accordion.Header>Ingredients</Accordion.Header>
                            <Accordion.Body>
                                <ul>
                                    {ingredients.map((ingredient, index) => {
                                        return (
                                            <div key={index}>
                                                <li> <img src={apple} className="icon" alt="apple" /> {ingredient}</li>
                                            </div>
                                        )
                                        })}
                                </ul>
                            </Accordion.Body>
                        </Accordion.Item>

                        <Accordion.Item eventKey="1">
                            <Accordion.Header>Nutrition Facts (per serving)</Accordion.Header>
                            <Accordion.Body>
                                <ul>
                                    <li> <img src={appleCalculator} className="icon" alt="apple calculator" /> {protein.label} {((protein.quantity)/servings).toFixed()}{protein.unit}
                                    </li>
                                    <li> <img src={appleCalculator} className="icon" alt="apple calculator" /> Total Fat {((fatTotal.quantity)/servings).toFixed()}{fatTotal.unit} / Saturated {((fatSat.quantity)/servings).toFixed()}{fatSat.unit} / Trans {((fatTrans.quantity)/servings).toFixed()}{fatTrans.unit}
                                    </li>
                                    <li> <img src={appleCalculator} className="icon" alt="apple calculator" /> Carbs {((carbs.quantity)/servings).toFixed()}{carbs.unit} / Fiber {((fiber.quantity)/servings).toFixed()}{fiber.unit} / Sugars {((sugars.quantity)/servings).toFixed()}{sugars.unit}
                                    </li>
                                    <li> <img src={appleCalculator} className="icon" alt="apple calculator" /> Cholesterol {((cholesterol.quantity)/servings).toFixed()}{cholesterol.unit}
                                    </li>
                                    <li> <img src={appleCalculator} className="icon" alt="apple calculator" /> Vitamin D {((vitD.quantity)/servings).toFixed()}{vitD.unit}
                                    </li>
                                    <li> <img src={appleCalculator} className="icon" alt="apple calculator" /> Calcium {((calcium.quantity)/servings).toFixed()}{calcium.unit}
                                    </li>
                                    <li> <img src={appleCalculator} className="icon" alt="apple calculator" /> Iron {((iron.quantity)/servings).toFixed()}{iron.unit}
                                    </li>
                                    <li> <img src={appleCalculator} className="icon" alt="apple calculator" /> Potassium {((potassium.quantity)/servings).toFixed()}{potassium.unit}
                                    </li>
                                </ul>
                            </Accordion.Body>
                        </Accordion.Item>

                    </Accordion>

                </div>

                <div className="containerForP">
                    <p>For cooking instructions click <a href={instructions} rel="noreferrer" target="_blank">here</a></p>
                </div>

            </div>
        </div>
    )
}

export default MyRecipesComponent;