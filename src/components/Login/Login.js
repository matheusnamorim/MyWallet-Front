import Container from '../../styles/Container';
import Form from '../../styles/Form';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { sign_In } from '../services/MyWallet';

export default function Login(){

    const navigate = useNavigate();
    const [eye, setEye] = useState('eye-off-outline');
    const [typePassword, setTypePassword] = useState('password');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isDisabled, setIsDisabled] = useState(false);

    function showPassword(){
        if(typePassword === 'password'){
            setTypePassword('text');
            setEye('eye-outline');
        }
        if(typePassword === 'text'){
            setTypePassword('password');
            setEye('eye-off-outline');
        }
    }

    function signIn(event){
        event.preventDefault();
        setIsDisabled(true);

        setTimeout(function(){
            sign_In({
                email,
                password
            }).then((data) => {
                const dadosSerializados = JSON.stringify(data.data);
                localStorage.setItem('mywallet', dadosSerializados);
                navigate('/home');
            }).catch((error) => {
                if(error.response.status === 401) alert('Usuário não autenticado!');
                if(error.response.status === 422) alert('Dados inválidos!');
                if(error.response.status === 404) alert('Usuário ou senha incorretos!');
                setIsDisabled(false);
            });
        }, 1000);
    }

    return (
        <>
            <Container aligner={true}>
                <h1>MyWallet</h1>
                <Form onSubmit={signIn} heigth='90px' padding='24px'>
                    <input disabled={isDisabled} value={email} onChange={(e) => setEmail(e.target.value)} type='email' placeholder='Email' required/>
                    <input disabled={isDisabled} value={password} onChange={(e) => setPassword(e.target.value)} type={typePassword} placeholder='Senha' required/>
                    <ion-icon onClick={() => showPassword()} name={eye}></ion-icon>
                    <button disabled={isDisabled}>Entrar</button>
                    <p onClick={() => {if(!isDisabled) navigate('/sign-up')}}>Primeira vez? Cadastre-se!</p>
                </Form>
            </Container>
        </>
    );
}