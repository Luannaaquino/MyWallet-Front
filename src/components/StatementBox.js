import React, { useState, useEffect } from 'react';

export default function StatementBox({ statementList }) {
  const [finalBalance, setFinalBalance] = useState('0,00');
  const [status, setStatus] = useState('positive');
    //fazer um map aqui?

  return (
    <>
      <ul>               
      </ul>
      <div>
        <h3>SALDO</h3>
        <span>
          R$
        </span>
      </div>
    </>
  );
}