import Container from "../../styles/Container";
import Form from "../../styles/Form";
import { useNavigate, useLocation } from "react-router-dom";
import { IoArrowBackCircleOutline } from "react-icons/io5";
import { useState } from 'react';
import { valueMask } from "../maskValue";
import { updateRegister } from "../services/MyWallet";
import { ThreeDots } from "react-loader-spinner";

export default function EditEntry(){
    const navigate = useNavigate();
    const {state} = useLocation();
    const [value, setValue] = useState(state.value);
    const [description, setDescription] = useState(state.description);
    const [isDisabled, setIsDisabled] = useState(false);
    const [msgbtn, setMsgBtn] = useState('Atualizar entrada');

    function update(event){
        event.preventDefault();
        setIsDisabled(true);
        setMsgBtn(<ThreeDots color="#FFF" height={45} width={45} />);
        
        setTimeout(function(){
            if(Number(value.replace(',', '')) !== 0){
                updateRegister({
                    id: state.id,
                    value,
                    description,
                    type: 'entry'
                }).then(() => {
                    navigate('/home');
                }).catch((error) => {
                    if(error.response.status === 401) {
                        alert('Usuário não autenticado');
                        navigate('/'); 
                    }
                    if(error.response.status === 422) alert('Dados inválidos!');
                    setIsDisabled(false);
                    setMsgBtn('Atualizar entrada');
                });
            }else{
                alert('Dados inválidos!');
                setIsDisabled(false);
                setMsgBtn('Atualizar entrada');
            }
        }, 1000);
    }

    return (
        <>
            <Container padding={true}>
                <h2>Editar Entrada</h2>
                <span onClick={()=> navigate('/home')}><IoArrowBackCircleOutline size='30px' color='#FFF'/></span>
                <Form onSubmit={update} disabled={isDisabled}>
                    <input disabled={isDisabled} value={value} onChange={(e) => setValue(valueMask(e.target.value))} required/>
                    <input disabled={isDisabled} value={description} onChange={(e) => setDescription(e.target.value)} maxLength={25} required/>
                    <button disabled={isDisabled}>{msgbtn}</button>
                </Form>
            </Container>
        </>
    );
}