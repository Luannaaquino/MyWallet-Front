import styled from 'styled-components';

const Container = styled.div`
    height: 100vh;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    * {
        border-radius: 5px;
    }
    div {
        display: flex;
    }
    input{
        width: 50%;
        height: 45px;
        padding-left: 10px;
        margin-bottom: 5px;
        border-radius: 5px;
        @media (max-width: 600px) {
            width: 90%;
        }
        &::placeholder{
            font-family: "Oswald", sans-serif;
            font-size: 18px;
            font-weight: 700;
            color: #9F9F9F;
        }
        &:focus{
            box-shadow: 0 0 0 0;
            outline: 0;
        }
    }

    button{
        width: 51%;
        height: 45px;
        border-radius: 5px;
        background-color: #A328D6;
        color: white;
        @media (max-width: 600px) {
            width: 93%;
        }
    }

    h2{
        font-family: 'Raleway', sans-serif;
        font-size: 26px;
        color: white;
        font-weight: bold;
        margin-bottom: 10px;
    }
`;

export default Container;