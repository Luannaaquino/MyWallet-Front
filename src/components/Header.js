import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { IoExitOutline } from 'react-icons/io5';
import styled from 'styled-components';
import axios from 'axios';

export default function Header() {
    
  return (
    <HeaderContainer>
      <h2>
        Ola,
      </h2>
      <IoExitOutline size="26px"/>
    </HeaderContainer>
  );
}

const HeaderContainer = styled.header`
    display: flex;
    align-itens: center;
    justify-content: space-between;
    margin: 20px 0px;
`;