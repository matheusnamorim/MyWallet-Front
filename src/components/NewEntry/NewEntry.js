import Container from "../../styles/Container";
import Form from "../../styles/Form";
import { registerEntrys } from "../services/MyWallet";
import { useState } from 'react';
import { valueMask } from "../maskValue";

export default function NewEntry(){

    const [value, setValue] = useState('');
    const [description, setDescription] = useState('');
    const [isDisabled, setIsDisabled] = useState(false);

    function register(event){
        event.preventDefault();
        setIsDisabled(true);
    }

    return (
        <>
            <Container padding={true}>
                <h2>Nova Entrada</h2>
                <Form onSubmit={register}>
                    <input disabled={isDisabled} value={value} onChange={(e) => setValue(valueMask(e.target.value))} placeholder='Valor' required/>
                    <input disabled={isDisabled} value={description} onChange={(e) => setDescription(e.target.value)} type='text' placeholder='Descrição' required/>
                    <button disabled={isDisabled}>Salvar entrada</button>
                </Form>
            </Container>
        </>
    );
}
