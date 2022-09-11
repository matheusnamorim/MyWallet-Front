import styled from  'styled-components';
import StylesValue from '../../styles/StylesValue';
import { useState, useEffect } from 'react';

export default function ListReleases({value}){
    const [typeEntry, setTypeEntry] = useState('');


    useEffect(() => {
        if(value.type === 'entry') setTypeEntry('1');
        if(value.type === 'exit') setTypeEntry('2');
    }, []);
    
    function Value(price){
        console.log((price.replace(',', '')));
        if(price.length <= 2){
           return price+',00'; 
        }
        return price;
    }

    return (
        <>
        <Wrapp>
            <div>
                <StylesValue date={true}>{value.date}</StylesValue>
                <StylesValue description={true}>{value.description}</StylesValue>
            </div>
            <StylesValue type={typeEntry}>{Value(value.value)}</StylesValue>
        </Wrapp>
        </>
    );
}

const Wrapp = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;

    div{
        width: 80%;
        display: flex;
    }
`;

