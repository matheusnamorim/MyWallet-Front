import Container from "../../styles/Container";
import Form from "../../styles/Form";
import styled from 'styled-components';

export default function NewEntry(){
    return (
        <>
            <Container padding={true}>
                <h2>Nova Entrada</h2>
                <Form onSubmit={(e) => e.preventDefault()}>
                    <input type='text' placeholder='Valor' required/>
                    <input type='text' placeholder='Descrição' required/>
                    <button>Salvar entrada</button>
                </Form>
            </Container>
        </>
    );
}