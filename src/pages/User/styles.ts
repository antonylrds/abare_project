import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  flex: 1;
`;

export const Content = styled.div`
  padding: 20px 60px;
  display: block;

  .separator {
    width: 100%;
    height: 1px;
    background: rgba(0, 0, 0, 0.25);
    margin-bottom: 10px;
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
    height:400px;
  }
`;

export const Header = styled.header`
  background: #0a0a0a;
  width: 100%;
  height: 128px;
  display: flex;
  align-items: center;
  padding: 50px;

  img {
    max-width: 200px;
    max-height: 100px;
  }

  div {
    display: flex;
    flex: 1;
    justify-content: flex-end;
  }

  button {
    border-radius: 15px;
    height: 50px;
    color: #fff;
    background: #E8383C;
    border: 0;
    padding: 10px;
    transition: background-color 0.2s;

    &:hover {
      background: ${shade(0.2, '#E8383C')};
    }

    & + button {
      margin-left: 10px;
    }
  }
`;

export const IconButton = styled.button`
  display:flex;
  align-items: center;
  justify-content: center;

  svg {
    margin-right: 5px;
  }
`;
