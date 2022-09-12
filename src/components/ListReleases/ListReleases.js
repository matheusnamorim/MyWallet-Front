import styled from  'styled-components';
import StylesValue from '../../styles/StylesValue';
import { useState, useEffect } from 'react';
import { TiDelete } from 'react-icons/ti'
import { deleteReleases } from '../services/MyWallet';
import { useNavigate } from 'react-router-dom';

export default function ListReleases({value, reload, setReload, index, array}){
    const navigate = useNavigate();
    const [typeEntry, setTypeEntry] = useState('');

    useEffect(() => {
        if(value._id === reload) {
            if(array[index+1].type === 'entry') setTypeEntry('1');
            if(array[index+1].type === 'exit') setTypeEntry('2');
            return;
        }
        if(value.type === 'entry') setTypeEntry('1');
        if(value.type === 'exit') setTypeEntry('2');
    }, [reload]);
    
    function Value(price){ 
        let newPrice = price;
        if(price.length <= 2){
            newPrice = price+',00';
        }
        return newPrice;
    }

    function deleteValue(_id){
        if(window.confirm('Deseja apagar esse registro?')){
            deleteReleases(
                _id
            ).then(() => {
                setReload(_id);
            }).catch((error) => {
                if(error.response.status === 401) alert('Usuário não autenticado!');
                navigate('/');
            });
        }


    }   

    return (
        <>
        <Wrapp>
            <div>
                <StylesValue date={true}>{value.date}</StylesValue>
                <StylesValue description={true}>{value.description}</StylesValue>
            </div>
            <div>
                <StylesValue type={typeEntry}>{Value(value.value)}</StylesValue>
                <TiDelete onClick={() => deleteValue(value._id)} size='15px' color='#C6C6C6' cursor='pointer'/>
            </div>
        </Wrapp>
        </>
    );
}

const Wrapp = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;

    div{
        display: flex;
    }
`;
