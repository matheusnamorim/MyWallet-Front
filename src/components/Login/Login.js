import Container from '../../styles/Container';
import Form from '../../styles/Form';
import { useState } from 'react';
import { Link } from 'react-router-dom';
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
            <Container aligner={true}>
                <h1>MyWallet</h1>
                <Form onSubmit={(e) => e.preventDefault()} heigth='90px' padding='24px'>
                    <input type='email' placeholder='Email' required/>
                    <input type={typePassword} placeholder='Senha' required/>
                    <ion-icon onClick={() => showPassword()} name={eye}></ion-icon>
                    <button>Entrar</button>
                    <Link to='/sign-up' style={{ textDecoration: 'none' }}><p>Primeira vez? Cadastre-se!</p></Link>
                </Form>
            </Container>
        </>
    );
}
