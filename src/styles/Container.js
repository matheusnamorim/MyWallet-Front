import styled from 'styled-components';

export default function Container({children, padding, aligner}){
    return <Wrapp aligner={aligner} padding={padding}>{children}</Wrapp>
}

const Wrapp = styled.div`
    height: 100%;
    width: 100%;

    ${(props) => {
        if(props.padding){
            return`
                padding: 0 24px;
            `;
        }
        if(props.aligner){
            return`
                height: 100vh;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
            `;
        }
        if(props.center){
            return`background-color: black`;
        }
    }}


    h1{
        font-family: 'Saira Stencil One', cursive;
        font-size: 32px;
        color: #FFF;
        margin-bottom: 30px;
    }

    h3{
        font-family: 'Saira Stencil One', cursive;
        text-align: center;
        font-size: 50px;
        color: #FFF;
    }

    h2{
        margin: 25px 0 40px 0;
        font-size: 26px;
        font-family: 'Raleway', sans-serif;
        font-weight: 700;
        color: #FFF;
    }

    span{
        position: fixed;
        right: 20px;
        top: 20px;
        cursor: pointer;
    }
`;