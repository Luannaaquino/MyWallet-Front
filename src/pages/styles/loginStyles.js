import styled from 'styled-components';

const Container = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    span {
        font-weight: bold;
    }

    h1{
        font-family: 'Saira Stencil One', cursive;
        margin-bottom: 20px;
        color: white;
        font-size: 32px;
    }

    h1{
        font-family: 'Saira Stencil One', cursive;
        margin-bottom: 20px;
        color: white;
        font-size: 32px;
    }

    h3{
        margin-top: 20px;
        color: white;
    }

    input{
        width: 80%;
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
        width: 80%;
        height: 45px;
        border-radius: 5px;
        background-color: #A328D6;
        color: white;
        @media (max-width: 600px) {
            width: 93%;
        }
    }
`;
  

export default Container;