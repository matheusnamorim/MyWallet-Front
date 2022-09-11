import styled from 'styled-components';

export default function StylesValue({children, date, description, type, ...otherprops}){
    return <Wrapp date={date} description={description} type={type} {...otherprops}>{children}</Wrapp>;
}

const Wrapp = styled.p`
    font-family: 'Raleway', sans-serif;
    font-weight: 400;
    font-size: 16px;

    ${(props) => {
        if(props.date){
            return `color: #C6C6C6;
                    margin-right: 10px;`;
        }
        if(props.description){
            return `color: #000000;
            word-break: break-word;`
        }
        if(props.type === '1'){
            return `color: #03AC00;
            word-break: break-word;`
        }
        if(props.type === '2'){
            return `color: #C70000;
            word-break: break-word;`
        }
    }}
`;