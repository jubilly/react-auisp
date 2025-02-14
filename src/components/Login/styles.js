import styled from 'styled-components';

const Actions = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
`;
const ActionCreate = styled.div`
    text-align: left;
    width: 100%;
`;

const ActionRemember = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    flex-direction: row-reverse;
    * {
        cursor: pointer;
    }
`;

const SignIn = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    gap: 36px;
    margin-bottom: 60px;
`;

const FormLogin = styled.form`
    display: flex;
    flex-direction: column;
    gap: 36px;
    width: 100%;
`;

const Wrapper = styled.main`
    width: 80%;
    margin: 0 auto;
    padding: 0 40px;
    box-sizing: border-box;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
`;

export { Actions, ActionRemember, ActionCreate, FormLogin, SignIn, Wrapper };
