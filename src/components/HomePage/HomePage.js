import Container from "../../styles/Container";
import styled from 'styled-components';
import {AiOutlineExport} from 'react-icons/ai';
import {AiOutlinePlusCircle} from 'react-icons/ai';
import {AiOutlineMinusCircle} from 'react-icons/ai';
import { useNavigate, Link } from "react-router-dom";
import { useEffect, useState } from 'react';
import { infos, listEntrys } from "../services/MyWallet";
import ListReleases from "../ListReleases/ListReleases";

export default function HomePage(){

    const navigate = useNavigate();
    const [user, setUser] = useState({});
    const [list, setList] = useState([]);
    const [thereReleases, setThereReleases] = useState(true);
    const [typeBalance, setTypeBalance] = useState(true);
    const [summation, setSummation] = useState(0);

    function logOut(){
        localStorage.setItem('mywallet', JSON.stringify(''));
        navigate('/');
    }

    useEffect(() => {
        infos()
            .then((data) => {
                setUser(data.data);
        }).catch((error) => {
            if(error.response.status === 401) alert('Usuário não Autenticado!');
            navigate('/');
        });

        listEntrys()
            .then((data) => {
            if(data.data.length === 0) {
                setThereReleases(false);
                setList([...data.data]);
            }
            else {
                setList([...data.data]);
                sum(data);
            } 
        }).catch((error) => {
            if(error.response.status === 401) alert('Usuário não autenticado!');
            navigate('/');
        });

    }, []);

    function sum(data){
        const temp = data.data.reduce((previousValue, currentValue) => {
            const subsComma = parseFloat(currentValue.value.replace(',', '.'));
            if(currentValue.type === 'entry') return previousValue + subsComma;
            else return previousValue - subsComma;
        }, 0); 
        setSummation(Math.abs(temp));
        if(temp < 0) {
            setTypeBalance(false);
        }
        else setTypeBalance(true);
    }

    return (
        <>
            <Container padding={true}>
                <Wrapp>
                    <Header>
                    <h1>Olá, {user.name}</h1>
                    <Exit onClick={() => logOut()}>
                        <AiOutlineExport color="white" size='25px'/>
                    </Exit>    
                    </Header>
                        
                            {thereReleases ? 
                                <Records>
                                    <div>
                                        {list.map((value, index) => <ListReleases value={value} key={index}/>)}
                                    </div>
                                    <Balance>
                                        <h1>SALDO</h1>
                                        {typeBalance ? <Green>{summation.toFixed(2)}</Green>
                                        : <Red>{summation.toFixed(2)}</Red>}
                                    </Balance>
                                </Records>
                            : <Records><NoReleases><p>Não há registros de<br/>entrada ou saída</p></NoReleases></Records>}
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
    padding: 23px 12px 10px 12px;
    background-color: #FFF;
    border-radius: 5px;
    color: #868686;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    overflow: scroll;
`;

const Balance = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 15px;
    width: 100%;

    h1{
        font-family: 'Raleway', sans-serif;;
        font-weight: 700;
        font-size: 17px;
        margin: 0 0;
        color: #000;
    }
`;

const Green = styled.p`
    font-weight: 400;
    color: #03AC00;
`;

const Red = styled.p`
    font-weight: 400;
    color: #C70000;
`;

const NoReleases = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    p{
        text-align: center;
    }
`

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