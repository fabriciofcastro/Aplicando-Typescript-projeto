import styled from "styled-components";


export const Container = styled.div`
    width: 80vw;
    height: 100vh;
    background-color: #c0c0c0;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto  ;
`

export const Header = styled.header`
    margin: 84px 0 44px;
    width: 50%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`       

export const Titulo = styled.h1`
    font-size: 28px;
`

export const Input = styled.input`
    width: 50%;
    padding: 24px;

    background-color: #E6E6E6;
    border-radius: 5px;
    border: none;
    font-size: 16px;
`

export const Button = styled.button`
    width: 50%;
    padding: 24px;
    font-weight: 700;
    background-color: #EA4C89;
    color: #FFF;
    border-radius: 5px;
    border: none;
    cursor: pointer;
    transition: filter 0.2s;
    margin-top: 15px;

    :hover{
        filter: brightness(0.9);
     
    }

`

export const Section = styled.section`
     display: flex;
     align-items: center;
`

export const SectionImg = styled.img`
 
    border-radius: 30px;
    margin-left: 17px;
    width: 60px;
    height: 60px;
`
export const Strong = styled.strong`
    font-weight: bold;
`
