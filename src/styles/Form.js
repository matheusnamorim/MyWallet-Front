import styled from 'styled-components';

export default function Form({children, ...otherprops}){
    return <Wrapp {...otherprops}>{children}</Wrapp>;
}

const Wrapp = styled.form`
    padding: 0 24px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
    input{
        border: none;
        width: 100%;
        height: 58px;
        background-color: #FFF;
        border-radius: 5px;
        font-family: 'Raleway', sans-serif;
	    font-weight: 400;
        font-size: 20px;
        padding-left: 15px;
        color: #000;
        margin-bottom: 13px;
    }

    input::placeholder{
        color: #000;
        font-size: 20px;
    }

    button{
        border: none;
        width: 100%;
        height: 46px;
        background-color: #A328D6;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 5px;
        color: #FFF;
        font-weight: 700;
        font-size: 20px;
        cursor: pointer;
    }

    p{
        margin-top: 35px;
        font-size: 15px;
        font-weight: 700;
        color: #FFF;
        cursor: pointer;
    }
`;