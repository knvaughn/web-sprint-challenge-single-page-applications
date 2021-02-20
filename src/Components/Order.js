import React from 'react';
import styled from 'styled-components';

const StyledOrder = styled.div`
    display: flex;
    flex-flow: column nowrap;
    flex: 1 1 auto;

    h2 {
        color: #c10a26;
        margin: 50px 0 30px;
        padding: 0 20px;
        font-size: 2rem;
        text-align: center;
        width: 100%;
    }

    img {
        width: 100%;
        max-width: 800px;
        display: block;
    }
`;

const Order = (props) => {
    const { order } = props;

    return (
        <StyledOrder>
            <h2>Congrats! Pizza is on its way!</h2>
            <img src="../pizza2.jpg" />
        </StyledOrder>
    )
}

export default Order;