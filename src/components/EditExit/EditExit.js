import Container from "../../styles/Container";
import Form from "../../styles/Form";
import { useNavigate, useLocation } from "react-router-dom";
import { IoArrowBackCircleOutline } from "react-icons/io5";
import { useState } from 'react';
import { valueMask } from "../maskValue";
import { updateRegister } from "../services/MyWallet";

export default function EditEntry(){
    const navigate = useNavigate();
    const {state} = useLocation();
    const [value, setValue] = useState(state.value);
    const [description, setDescription] = useState(state.description);
    const [isDisabled, setIsDisabled] = useState(false);

    function update(event){
        event.preventDefault();
        setIsDisabled(true);
        
        updateRegister({
            id: state.id,
            value,
            description,
            type: 'exit'
        }).then(() => {
            navigate('/home');
        }).catch((error) => {
            if(error.response.status === 401) {
                alert('Usuário não autenticado');
                navigate('/'); 
            }
            if(error.response.status === 422) alert('Dados inválidos!');
            setIsDisabled(false);
        });
    }

    return (
        <>
            <Container padding={true}>
                <h2>Editar saída</h2>
                <span onClick={()=> navigate('/home')}><IoArrowBackCircleOutline size='30px' color='#FFF'/></span>
                <Form onSubmit={update}>
                    <input disabled={isDisabled} value={value} onChange={(e) => setValue(valueMask(e.target.value))} required/>
                    <input disabled={isDisabled} value={description} onChange={(e) => setDescription(e.target.value)} maxLength={25} required/>
                    <button disabled={isDisabled}>Atualizar saída</button>
                </Form>
            </Container>
        </>
    );
}