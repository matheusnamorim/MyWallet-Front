import Container from '../../styles/Container';
import Form from '../../styles/Form';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { sign_Up } from '../services/MyWallet';
import { ThreeDots } from "react-loader-spinner";

export default function SignUp(){

    const navigate = useNavigate();
    const [eye, setEye] = useState('eye-off-outline');
    const [typePassword, setTypePassword] = useState('password');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');
    const [isDisabled, setIsDisabled] = useState(false);
    const [msgbtn, setMsgBtn] = useState('Cadastrar');

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
        setMsgBtn(<ThreeDots color="#FFF" height={45} width={45} />);

        setTimeout(function(){
            if(password === passwordConfirm){
                
                    sign_Up({
                        name,
                        email,
                        password
                    }).then(() => {
                        navigate('/');
                    }).catch((error) => {
                        if(error.response.status === 422) alert('Dados inválidos!');
                        if(error.response.status === 409) alert('Nome ou E-mail em uso!');
                        setIsDisabled(false);
                        setMsgBtn('Cadastrar');
                    });
                
            }else{
                alert('Senhas não coincidem');
                setIsDisabled(false);
                setMsgBtn('Cadastrar');
            }
        }, 1000);
    }

    return (
        <>
            <Container aligner={true}>
                <h1>MyWallet</h1>
                <Form onSubmit={signUp} heigth='165px' padding='24px' disabled={isDisabled}> 
                    <input disabled={isDisabled} value={name} onChange={(e) => setName(e.target.value)} type='text' placeholder='Nome' required/>
                    <input disabled={isDisabled} value={email} onChange={(e) => setEmail(e.target.value)} type='email' placeholder='Email' required/>
                    <input disabled={isDisabled} value={password} onChange={(e) => setPassword(e.target.value)} type={typePassword} placeholder='Senha' required/>
                    <input disabled={isDisabled} value={passwordConfirm} onChange={(e) => setPasswordConfirm(e.target.value)} type='password' placeholder='Confirme a senha' required/>
                    <ion-icon onClick={() => showPassword()} name={eye}></ion-icon>
                    <button disabled={isDisabled} >{msgbtn}</button>
                    <p onClick={() => {if(!isDisabled) navigate('/')}}>Já tem uma conta? Entre agora!</p>
                </Form>
            </Container>
        </>
    );
}