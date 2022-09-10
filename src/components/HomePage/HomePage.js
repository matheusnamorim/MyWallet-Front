import Container from "../../styles/Container";
import styled from 'styled-components';
import {AiFillExclamationCircle, AiOutlineExport} from 'react-icons/ai';
import {AiOutlinePlusCircle} from 'react-icons/ai';
import {AiOutlineMinusCircle} from 'react-icons/ai';
import { useNavigate, Link } from "react-router-dom";

export default function HomePage(){

    const navigate = useNavigate();
    function logOut(){
        localStorage.setItem('mywallet', JSON.stringify());
        navigate('/');
    }

    return (
        <>
            <Container padding={true}>
                <Wrapp>
                    <Header>
                    <h1>Olá, Fulano</h1>
                    <Exit onClick={() => logOut()}>
                        <AiOutlineExport color="white" size='25px'/>
                    </Exit>    
                    </Header>
                    <Records>Não há registros de<br/>entrada ou saída</Records>
                    <Btn>                   
                        <NewBtn>
                            <Link to='/new-entry' style={{ height: '100%', textDecoration: 'none', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                                <AiOutlinePlusCircle color="white" size='25px'/>
                                <p>Nova<br/>entrada</p>
                            </Link>
                        </NewBtn>
                        <NewBtn>
                            <Link to='/new-exit' style={{ height: '100%', textDecoration: 'none', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                                <AiOutlineMinusCircle color="white" size='25px'/>
                                <p>Nova<br/>saída</p>
                            </Link>
                        </NewBtn>
                    </Btn>
                </Wrapp>

            </Container>
        </>
    );
}

const Exit = styled.div`
    cursor: pointer;
`;

const Wrapp = styled.div`
    min-height: 100vh;
    padding: 25px 0 16px 0;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
`;

const Header = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    h1{
        font-family: 'Raleway', sans-serif;
	    font-weight: 700;
        font-size: 26px;
        margin-bottom: 0;
    }

`;

const Records = styled.div`
    height: 66vh;
    background-color: #FFF;
    border-radius: 5px;
    color: #868686;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
`;

const Btn = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const NewBtn = styled.div`
    padding: 10px;
    width: 48%;
    height: 114px;
    border-radius: 5px;
    background-color: #A328D6;
    cursor: pointer;

    p{
        font-weight: 700;
        font-size: 17px;
        color: #FFF;
    }
`;