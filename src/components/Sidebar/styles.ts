import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  padding-top: 50px;
  max-width: 300px;
  background: #0a0a0a;
  height: 100%;

  color: #ffffff;

  img {
    width: 250px;
    display: block;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 20px;
  }

  div > ul {
    list-style: none;

    li {
      margin: 0px 0px;
      font-size: 20px;
    }

    a {
      color: #ffffff;
      display: flex;
      padding: 10px 20px;
      align-items: center;
      justify-content: space-between;
      text-decoration: none;
      transition: color 0.25s;
      transition: background 0.25s;

      svg {
        margin-right: 5px;
      }

      &:hover {
        background: #ffffff;
        color: ${shade(0.25, '#000000')};
      }
    }
  }
`;
