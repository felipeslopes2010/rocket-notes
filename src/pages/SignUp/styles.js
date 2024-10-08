import styled from "styled-components";
import backgroundImg from "../../assets/background.png";

export const Container = styled.div`
    height: 100vh;
    display: flex;
    align-items: stretch;
`;

export const Form = styled.form`
    padding: 0 136px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;

    > h1 {
        font-size: 48px;
        color: ${({theme}) => theme.COLORS.ORANGE};
    }
    
    p {
        font-size: 14px;
        margin-bottom: 48px;
        color: ${({theme}) => theme.COLORS.GRAY_100};
    }

    > h2 {
        font-size: 24px;
        margin-bottom: 48px;
        color: ${({theme}) => theme.COLORS.WHITE};
    }

    > button:last-child {
        margin-top: 124px;
        font-size: 16px;
        color: ${({theme}) => theme.COLORS.ORANGE};
    }
`;

export const Background = styled.div`
    flex: 1;
    background: url(${backgroundImg}) no-repeat center center;
    background-size: cover;
`;