import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  flex: 1;
  height: 100%;
`;

export const Content = styled.div`

  padding: 0px 20px;
  height: 70%;

  h1 {
    border-bottom: 1px solid #000;
    margin-bottom: 5px;
  }

  form {
    .half-width {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    .right-aligned {
      display: flex;
      justify-content: flex-end;

      button {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 5px 50px;
        background: #323483;
        border: 0;
        color: #fff;
        font-weight: bold;
        border-radius: 5px;

        &:hover {
          background: ${shade(0.25, '#323483')};
        }

        svg {
          margin-right: 5px;
        }
      }
    }
  }

  div.table {
    height: 100%;
    font-size: 8px;
  }

  @media (max-width: 768px) {
    max-height: 70%;

  }
`;

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: flex-start;


  margin-top: 10px;
`;
