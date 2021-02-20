import React from 'react';
import { useHistory } from 'react-router-dom';

const Home = () => {
    let history = useHistory();

    const routeToForm = () => {
        history.push("/pizza");
    }

    return (
        <div>
            <h2>Your favorite food, delivered while coding</h2>
            <button onClick={routeToForm}>Pizza?</button>
        </div>
    )
}

export default Home;