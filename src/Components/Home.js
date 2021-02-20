import React from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

const StyledHome = styled.div`
    flex: 1 1 auto;
    width: 100%;
    background: url('pizza.jpg') no-repeat center;
    background-size: cover;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    justify-content: center;
    padding: 20px;

    h2 {
        color: #fff;
        text-transform: uppercase;
        font-size: 5rem;
        max-width: 1200px;
        text-align: center;
        text-shadow: 5px 5px 5px rgba(0,0,0,.5);
        margin-top: 0;
    }

    button {
        border: none;
        color: #fff;
        background: #93a63b;
        padding: 10px 30px;
        border-radius: 50px;
        font-size: 2rem;
        font-weight: bold;
        letter-spacing: 1px;
        box-shadow: 5px 5px 5px rgba(0,0,0,.5);
        transition: all .2s linear;

        &:hover {
            cursor: pointer;
            background: #a6b94b;
        }
    }

    @media screen and (max-width: 1200px) {
        h2 {
            font-size: 3.5rem;
            max-width: 800px;
        }
    }
`;

const Home = () => {
    let history = useHistory();

    const routeToForm = () => {
        history.push("/pizza");
    }

    return (
        <StyledHome>
            <h2>Your favorite food, delivered while coding</h2>
            <button onClick={routeToForm}>Pizza?</button>
        </StyledHome>
    )
}

export default Home;