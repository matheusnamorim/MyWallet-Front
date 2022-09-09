import Container from '../../styles/Container';
import Form from '../../styles/Form';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function SignUp(){

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
                <Form onSubmit={(e) => e.preventDefault()} heigth='165px'> 
                    <input type='text' placeholder='Nome' required/>
                    <input type='email' placeholder='Email' required/>
                    <input type={typePassword} placeholder='Senha' required/>
                    <input type='password' placeholder='Confirme a senha' required/>
                    <ion-icon onClick={() => showPassword()} name={eye}></ion-icon>
                    <button>Cadastrar</button>
                    <Link to='/' style={{ textDecoration: 'none' }}><p>Já tem uma conta? Entre agora!</p></Link>
                </Form>
            </Container>
        </>
    );
}