import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { IoExitOutline } from 'react-icons/io5';
import styled from 'styled-components';
import axios from 'axios';

export default function Header() {
    
  return (
    <HeaderContainer>
      <h2>
        Olá,
      </h2>
      <IoExitOutline size="26px" color="white"/>
    </HeaderContainer>
  );
}

const HeaderContainer = styled.header`
    display: flex;
    align-itens: center;
    justify-content: space-between;
    margin: 20px 0px;

    h2{
        font-family: 'Raleway', sans-serif;
        font-size: 26px;
        color: white;
        font-weight: bold;
    }
`;