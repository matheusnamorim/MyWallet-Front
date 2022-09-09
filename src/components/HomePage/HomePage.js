import Container from "../../styles/Container";
import styled from 'styled-components';
import {AiOutlineExport} from 'react-icons/ai';
import {AiOutlinePlusCircle} from 'react-icons/ai';
import {AiOutlineMinusCircle} from 'react-icons/ai';

export default function HomePage(){
    return (
        <>
            <Container padding={true}>
                <Wrapp>
                    <Header>
                    <h1>Olá, Fulano</h1>
                    <AiOutlineExport color="white" size='25px'/>
                    </Header>
                    <Records>Não há registros de<br/>entrada ou saída</Records>
                    <Btn>
                        <div>
                            <AiOutlinePlusCircle color="white" size='25px'/>
                            <p>Nova<br/>entrada</p>
                        </div>
                        <div>
                            <AiOutlineMinusCircle color="white" size='25px'/>
                            <p>Nova<br/>saída</p>
                        </div>
                    </Btn>
                </Wrapp>

            </Container>
        </>
    );
}

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

    ion-icon{
        font-size: 25px;
        color: #FFF;
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

    div{
        padding: 10px;
        width: 48%;
        height: 114px;
        border-radius: 5px;
        background-color: #A328D6;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    p{
        font-weight: 700;
        font-size: 17px;
        color: #FFF;
    }
`;