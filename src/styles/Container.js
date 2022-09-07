import styled from 'styled-components';

export default function Container({children}){
    return <Wrapp>{children}</Wrapp>
}

const Wrapp = styled.div`
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