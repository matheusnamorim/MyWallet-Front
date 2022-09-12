import Container from "../../styles/Container";
import Form from "../../styles/Form";
import { registerEntrys } from "../services/MyWallet";
import { useState } from 'react';
import { valueMask } from "../maskValue";
import { useNavigate } from "react-router-dom";
import { IoArrowBackCircleOutline } from "react-icons/io5";

export default function NewExit(){

    const navigate = useNavigate();
    const [value, setValue] = useState('');
    const [description, setDescription] = useState('');
    const [isDisabled, setIsDisabled] = useState(false);

    function register(event){
        event.preventDefault();
        setIsDisabled(true);
        
        if(Number(value.replace(',', '')) !== 0){
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
        }else{
            alert('Dados inválidos!');
            setIsDisabled(false);
        }   
    }

    return (
        <>
            <Container padding={true}>
                <h2>Nova saída</h2>
                <span onClick={()=> navigate('/home')}><IoArrowBackCircleOutline size='30px' color='#FFF'/></span>
                <Form onSubmit={register}>
                    <input disabled={isDisabled} value={value} onChange={(e) => setValue(valueMask(e.target.value))} placeholder='Valor' required/>
                    <input disabled={isDisabled} value={description} onChange={(e) => setDescription(e.target.value)} type='text' maxLength={25} placeholder='Descrição' required/>
                    <button disabled={isDisabled}>Salvar saída</button>
                </Form>
            </Container>
        </>
    );
}