import Container from "../../styles/Container";
import Form from "../../styles/Form";
import { registerEntrys } from "../services/MyWallet";
import { useState } from 'react';
import { valueMask } from "../maskValue";
import { useNavigate } from "react-router-dom";
import { IoArrowBackCircleOutline } from 'react-icons/io5';
import { ThreeDots } from "react-loader-spinner";

export default function NewEntry(){

    const navigate = useNavigate();
    const [value, setValue] = useState('');
    const [description, setDescription] = useState('');
    const [isDisabled, setIsDisabled] = useState(false);
    const [msgbtn, setMsgBtn] = useState('Salvar entrada');

    function register(event){
        event.preventDefault();
        setIsDisabled(true);
        setMsgBtn(<ThreeDots color="#FFF" height={45} width={45} />);

        setTimeout(function(){
            if(Number(value.replace(',', '')) !== 0){   
                    registerEntrys({
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
                        setMsgBtn('Salvar entrada')
                    });
            }else{
                alert('Dados inválidos!');
                setIsDisabled(false);
                setMsgBtn('Salvar entrada');
            }
        }, 1000);
    }

    return (
        <>
            <Container padding={true}>
                <h2>Nova Entrada</h2>
                <span onClick={()=> navigate('/home')}><IoArrowBackCircleOutline size='30px' color='#FFF'/></span>
                <Form onSubmit={register} disabled={isDisabled}>
                    <input disabled={isDisabled} value={value} onChange={(e) => setValue(valueMask(e.target.value))} placeholder='Valor' required/>
                    <input  maxLength={25} disabled={isDisabled} value={description} onChange={(e) => setDescription(e.target.value)} type='text' placeholder='Descrição' required/>
                    <button disabled={isDisabled}>{msgbtn}</button>
                </Form>
            </Container>
        </>
    );
}
