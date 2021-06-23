import React, { useState, useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { AiOutlineMinusCircle, AiOutlinePlusCircle } from 'react-icons/ai';

import Header from '../components/Header';
import StatementBox from '../components/StatementBox';
import BalanceContainer from './styles/WalletStyles';

export default function Wallet() {

    const [statementList, setStatementList] = useState();

  return (
    <BalanceContainer>
    <Header />               
    <div><span>Nao ha registros de entrada ou saida</span></div>     
    <footer>
      <Link to="/add-received">
        <button type="submit">
          <AiOutlinePlusCircle size="25px" />
          Nova entrada
        </button>
      </Link>
      <Link to="/add-spent">
        <button type="submit">
          <AiOutlineMinusCircle size="25px" />
          Nova saida
        </button>
      </Link>
    </footer>
          
  </BalanceContainer>
  );
}

//{statementList 
   // ? <StatementBox statementList={statementList} /> 
   // : <div><span>Nao ha registros de entrada ou saida</span></div>}

   //fazer um map pra buscar os dados