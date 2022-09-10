import Container from "../../styles/Container";
import Form from "../../styles/Form";
import { registerEntrys } from "../services/MyWallet";
import { useState } from 'react';
import { valueMask } from "../maskValue";
import { useNavigate } from "react-router-dom";

export default function NewExit(){

    const navigate = useNavigate();
    const [value, setValue] = useState('');
    const [description, setDescription] = useState('');
    const [isDisabled, setIsDisabled] = useState(false);

    function register(event){
        event.preventDefault();
        setIsDisabled(true);

        setTimeout(function(){
            registerEntrys({
                value,
                description,
                type: 'exit'
            }).then(()=>{
                navigate('/home');
            }).catch((error) => {
                if(error.response.status === 401) {
                    alert('Usuário não autenticado');
                    navigate('/'); 
                }
                if(error.response.status === 422) alert('Dados inválidos!');
                setIsDisabled(false);
            });
        }, 1000);
    }

    return (
        <>
            <Container padding={true}>
                <h2>Nova saída</h2>
                <Form onSubmit={register}>
                    <input disabled={isDisabled} value={value} onChange={(e) => setValue(valueMask(e.target.value))} placeholder='Valor' required/>
                    <input disabled={isDisabled} value={description} onChange={(e) => setDescription(e.target.value)} type='text' placeholder='Descrição' required/>
                    <button disabled={isDisabled}>Salvar saída</button>
                </Form>
            </Container>
        </>
    );
}