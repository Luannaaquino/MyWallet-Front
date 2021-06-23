import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

import Container from '../styles/TransactionsStyles';


export default function Input() {
  const [cost, setCost] = useState('');
  const [item, setItem] = useState('');
  const [selectDate, setSelectDate] = useState('');
  const [loading, setLoading] = useState(false);
  const history = useHistory();
   
  return (
    <Container>
      <h2>Nova entrada</h2>
      <form>
        <input 
          type="text"
          placeholder="Valor" 
          onChange={(e) => setCost(e.target.value)} 
          value={cost}
        />
        <input 
          type="text" 
          placeholder="Descricao" 
          onChange={(e) => setItem(e.target.value)} 
          value={item}
        />               
        <button>Salvar entrada</button>
      </form>
    </Container>
  );
}