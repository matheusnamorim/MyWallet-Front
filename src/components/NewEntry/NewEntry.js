import Container from "../../styles/Container";
import Form from "../../styles/Form";
import styled from 'styled-components';

export default function NewEntry(){
    return (
        <>
            <Container padding={true}>
                <Title>Nova Entrada</Title>
                <Form onSubmit={(e) => e.preventDefault()}>
                    <input type='text' placeholder='Valor' required/>
                    <input type='text' placeholder='Descrição' required/>
                    <button>Salvar entrada</button>
                </Form>
            </Container>
        </>
    );
}

const Title = styled.h2`
    margin: 25px 0 40px 0;
    font-size: 26px;
    font-family: 'Raleway', sans-serif;
	font-weight: 700;
    color: #FFF;
`;