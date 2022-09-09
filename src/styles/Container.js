import styled from 'styled-components';

export default function Container({children, padding, aligner}){
    return <Wrapp aligner={aligner} padding={padding}>{children}</Wrapp>
}

const Wrapp = styled.div`
    min-height: 100vh;
    width: 100%;

    ${(props) => {
        if(props.padding){
            return`
                padding: 0 24px;
            `;
        }
        if(props.aligner){
            return`
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
            `;
        }
    }}


    h1{
        font-family: 'Saira Stencil One', cursive;
        font-size: 32px;
        color: #FFF;
        margin-bottom: 30px;
    }
`;