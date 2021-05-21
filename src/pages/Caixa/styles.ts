import styled from 'styled-components';

export const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px 20px;
  flex-grow: 1;
  h1 {
    border-bottom: 1px solid #000;
    margin-bottom: 5px;
  }

  form {
    display: flex;
   
  }

  div.table {
    overflow-y: auto;
    max-height: 692px;
  }

  @media (max-width: 500px) {
  }

`;

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: flex-start;


  margin-top: 10px;
`;
