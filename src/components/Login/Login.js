import styled from 'styled-components';
import Form from '../../styles/Form';

export default function Login(){
    return (
        <>
            <Container>
                <h1>MyWallet</h1>
                <Form onSubmit={(e) => e.preventDefault()}>
                    <input placeholder='Email'/>
                    <input placeholder='Senha'/>
                    <button>Entrar</button>
                    <p>Primeira vez? Cadastre-se!</p>
                </Form>
            </Container>
        </>
    );
}

const Container = styled.div`
    min-height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h1{
        font-family: 'Saira Stencil One', cursive;
        font-size: 32px;
        color: #FFF;
        margin-bottom: 30px;
    }
`;