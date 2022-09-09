import Container from '../../styles/Container';
import Form from '../../styles/Form';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { sign_Up } from '../services/MyWallet';

export default function SignUp(){

    const navigate = useNavigate();
    const [eye, setEye] = useState('eye-off-outline');
    const [typePassword, setTypePassword] = useState('password');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');
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

    function signUp(event){
        event.preventDefault();
        setIsDisabled(true);
        if(password === passwordConfirm){
            setTimeout(function(){
                sign_Up({
                    name,
                    email,
                    password
                }).then(() => {
                    navigate('/');
                }).catch(() => {
                    alert('Insira os dados novamente');
                    setIsDisabled(false);
                });
            }, 5000);
        }else{
            alert('Senhas não coincidem');
            setIsDisabled(false);
        }
    }

    return (
        <>
            <Container aligner={true}>
                <h1>MyWallet</h1>
                <Form onSubmit={signUp} heigth='165px' padding='24px'> 
                    <input disabled={isDisabled} value={name} onChange={(e) => setName(e.target.value)} type='text' placeholder='Nome' required/>
                    <input disabled={isDisabled} value={email} onChange={(e) => setEmail(e.target.value)} type='email' placeholder='Email' required/>
                    <input disabled={isDisabled} value={password} onChange={(e) => setPassword(e.target.value)} type={typePassword} placeholder='Senha' required/>
                    <input disabled={isDisabled} value={passwordConfirm} onChange={(e) => setPasswordConfirm(e.target.value)} type='password' placeholder='Confirme a senha' required/>
                    <ion-icon onClick={() => showPassword()} name={eye}></ion-icon>
                    <button disabled={isDisabled} >Cadastrar</button>
                    <p onClick={() => {if(!isDisabled) navigate('/')}}>Já tem uma conta? Entre agora!</p>
                </Form>
            </Container>
        </>
    );
}