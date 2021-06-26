import React, { useState, useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import Container from '../pages/styles/loginStyles'
import axios from 'axios';

export default function SingUp() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  const[loading, setLoading] = useState(false)
  const history = useHistory();

  function handleSubmit(e){
    e.preventDefault();
    setLoading(true);
    if(loading) return;

    const body = {
      name,
      email,
      password,
      passwordConfirmation
  };

    const request = axios.post('http://localhost:4000/sign-up', body);
    request.then((response)=> {
      if (response.status === 201){
          setLoading(false);
          alert('Cadastrado com sucesso');
          history.push("/");
      } else {
          alert(response.status);
      }
      request.catch((error)=> {
        if(error.response.status === 409) {
            alert('Esse email já está em uso');
        } else {
            alert('Houve um erro ao cadastrar');
        }
        setLoading(false);
    })
  });
  }

  return (
    <Container>
    <h1>MyWallet</h1>

    <form onSubmit={handleSubmit}>
      <input 
        type="text"
        placeholder="Nome" 
        onChange={(e) => setName(e.target.value)} 
        value={name}
      />

      <input 
        type="email"
        placeholder="E-mail" 
        onChange={(e) => setEmail(e.target.value)} 
        value={email}
      />

      <input 
        type="password" 
        placeholder="Senha" 
        onChange={(e) => setPassword(e.target.value)} 
        value={password}
      />

      <input 
        type="password" 
        placeholder="Confirme a senha" 
        onChange={(e) => setPasswordConfirmation(e.target.value)} 
        value={passwordConfirmation}
      />

      <button type="submit">{loading ? 'Cadastrando' : 'Cadastrar'}</button>
    </form>

    <Link to="/"><h3>Ja tem uma conta? Entre agora!</h3></Link>
  </Container>
  );
}