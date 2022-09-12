import Container from '../../styles/Container';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export default function WhithoutPermission(){

    return (
        <>
            <Container aligner={true}>
                <Wrapper>
                <h3>Unauthorized: <br/>Access denied</h3>
                <Btns>
                        <Link to='/sign-up' style={{ textDecoration: 'none' }}><button>Cadastre-se</button></Link>
                        <Link to='/' style={{ textDecoration: 'none' }}><button>Login</button></Link>
                    </Btns>
                </Wrapper>
            </Container>
        </>
    );
}

const Wrapper = styled.div`
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
`;

const Btns = styled.div`
    
    width: 220px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    button{
        width: 100px;
        height: 40px;
        border-radius: 5px;
        border: none;
        color: #8C11BE;
        background-color: #FFF;
        font-family: 'Raleway', sans-serif;
	    font-weight: 400;
        cursor: pointer;
    }
`;
