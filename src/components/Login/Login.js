import styled from 'styled-components';
import Form from '../../styles/Form';
import { useState } from 'react';

export default function Login(){

    const [eye, setEye] = useState('eye-off-outline');
    const [typePassword, setTypePassword] = useState('password');

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

    return (
        <>
            <Container>
                <h1>MyWallet</h1>
                <Form onSubmit={(e) => e.preventDefault()}>
                    <input type='email' placeholder='Email' required/>
                    <input type={typePassword} placeholder='Senha' required/>
                    <ion-icon onClick={() => showPassword()} name={eye}></ion-icon>
                    <button>Entrar</button>
                    <p>Primeira vez? Cadastre-se!</p>
                </Form>
            </Container>
        </>
    );
}

const Container = styled.div`
    min-height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h1{
        font-family: 'Saira Stencil One', cursive;
        font-size: 32px;
        color: #FFF;
        margin-bottom: 30px;
    }
`;