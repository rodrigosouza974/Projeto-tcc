import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 10px;
    height:50vh;
    margin-top: 20vh;
`;
export const Content = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 15px;
    height:100vh;
    width: 100%;
    box-shadow: 0 1px 2px #0003;
    background-color: white;
    max-width:350px;
    padding:20px;
    border-radius: 5px;
`;

export const Label = styled.label`
    font-size:18px;
    font-weight:600;
    color:#676767;
`;

export const LabelSignun = styled.label`
    font-size:16px;
    color:#676767;
`;

export const LabelError = styled.label`
    font-size:14x;
    color:red;
`;

export const Strong = styled.strong`
    cursor:pointer;

a{
    text-decoration: none;
    color: #676767;
} 
`;